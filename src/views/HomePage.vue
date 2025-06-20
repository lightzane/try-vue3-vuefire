<script setup>
import { ref, computed } from 'vue';
import SidebarLayout from '@/layouts/SidebarLayout.vue';
import CafeCard from '@/components/CafeCard.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import BaseContainer from '@/components/base/BaseContainer.vue';
import BaseForm from '@/components/base/BaseForm.vue';
import BaseInput from '@/components/base/BaseInput.vue';

// * VueFire docs: https://vuefire.vuejs.org/guide/getting-started.html#Setup
import { useFirestore, useCollection } from 'vuefire';

const db = useFirestore();
// const cafeCollection = ref([]); // Original Firebase

// * Code snippet copied from:
// https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection
import {
  collection,
  // query,
  // where,
  // getDocs,
  // onSnapshot,
} from 'firebase/firestore';

// (Original Firebase)
// const q = query(collection(db, "cities"), where("capital", "==", true));
// const q = query(collection(db, 'cafes'));

// ! If you are getting error "FirebaseError: Missing or insufficient permissions"
// ! Then go to your Firestore Rules (if Production mode was selected during creation)
// ! You will see a line "allow read, write: if false;"
// ! For Testing purpose (and while Firebase Authentication not setup) then use:
// `allow read, write: if request.time < timestamp.date(2025, 6, 30);`

// * (Original Firebase) Single call
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, ' => ', doc.data());
//   cafeCollection.value.push(doc.data());
// });

// * (Original Firebase) Real-time call
// onSnapshot(q, (querySnapshot) => {
//   cafeCollection.value = [];

//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, ' => ', doc.data());
//     cafeCollection.value.push(doc.data());
//   });
// });

// 🔥 VueFire with Firebase !
const cafeCollection = useCollection(collection(db, 'cafes')); // VueFire + Firebase

// const cafeCollection = ref([
//   {
//     id: '413a9451-1b56-4219-86d7-2334c84beaac',
//     name: 'A Queso The Mondays',
//     location: 'Mexico',
//     price: 1,
//     rating: 4,
//     favorite: true,
//     description: '',
//   },
//   {
//     id: 'c686d673-34d3-4bff-983a-759bca3d0e20',
//     name: 'Pita Pan',
//     location: 'Neverland',
//     price: 2,
//     rating: 3.5,
//     favorite: false,
//     description: '',
//   },
//   {
//     id: '64596986-ba74-4238-b754-dc186656a654',
//     name: 'Tamago Never Dies',
//     location: 'United Kingdom',
//     price: 4,
//     rating: 5,
//     favorite: true,
//     description: '',
//   },
//   {
//     id: 'dd1b89d7-aec8-4968-aac8-c4c0281a9103',
//     name: "The Pesto's Yet to Come",
//     location: 'Italy',
//     price: 3,
//     rating: 0,
//     favorite: false,
//     description: '',
//   },
// ]);

const filterParams = ref({
  text: '',
  favorite: false,
});

const filteredCafes = computed(() => {
  return cafeCollection.value.filter((cafe) => {
    return (
      cafe.name.toLowerCase().includes(filterParams.value.text.toLowerCase()) &&
      (filterParams.value.favorite ? cafe.favorite : true)
    );
  });
});
</script>

<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <BaseContainer>
        <h2 class="mb-4">Filter</h2>
        <BaseForm>
          <BaseInput v-model="filterParams.text" label="Name" />
          <BaseCheckbox v-model="filterParams.favorite" label="Favorited" />
        </BaseForm>
      </BaseContainer>
    </template>

    <template v-slot:main>
      <BaseContainer>
        <h2 class="mb-4">Content</h2>
        <CafeCard
          v-for="cafe in filteredCafes"
          v-bind="cafe"
          :docId="cafe.id"
          :key="cafe.id"
        />
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>

<style></style>
