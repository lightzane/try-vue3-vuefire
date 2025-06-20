<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseImageCard from '@/components/base/BaseImageCard.vue';
import BaseRating from '@/components/base/BaseRating.vue';
import CafeImage from '@/components/CafeImage.vue';
import { useCurrentUser, useFirestore } from 'vuefire';
import { deleteDoc, doc } from 'firebase/firestore';

const db = useFirestore();
const user = useCurrentUser();

const props = defineProps({
  createdBy: {
    type: String,
    default: '',
  },
  createdById: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: 'No review yet',
  },
  docId: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: 'United States',
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const priceSymbol = computed(() => {
  switch (props.price) {
    case 1:
      return '$ - Less than $10';
    case 2:
      return '$$ - Between $10 to $30';
    case 3:
      return '$$$ - Between $30 to $60';
    case 4:
      return '$$$$ - More than $60';
    default:
      return 'No price defined';
  }
});

async function deleteCafe() {
  await deleteDoc(doc(db, 'cafes', props.docId));
}
</script>

<template>
  <BaseImageCard>
    <template v-slot:image>
      <CafeImage />
    </template>
    <template v-slot:title>
      {{ name }}
    </template>
    <template v-slot:subtitle v-if="favorite">
      <BaseIcon
        color="error"
        icon="mdi-fire-circle"
        size="small"
        class="mr-1"
      />
      <span class="mr-1">Favorite</span>
    </template>
    <template v-slot:rating>
      <BaseRating
        :model-value="rating"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      />
      <div class="text-grey ms-2">{{ rating }}</div>
    </template>
    <template v-slot:description>
      <p>{{ description }}</p>
    </template>
    <template v-slot:price>
      <p>{{ priceSymbol }}</p>
      <v-chip v-if="createdBy" size="x-small">Added by: {{ createdBy }}</v-chip>
    </template>
    <template v-slot:actions v-if="user?.email">
      <BaseButton color="primary" :to="`/cafe/${props.docId}`">
        <BaseIcon icon="mdi-pencil" class="mr-1" /> Edit
      </BaseButton>
      <BaseButton @click="deleteCafe" color="error" text>
        <BaseIcon icon="mdi-trash-can-outline" class="mr-1" />
        Delete
      </BaseButton>
    </template>
  </BaseImageCard>
</template>

<style></style>
