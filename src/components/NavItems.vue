<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import { getAuth, signOut } from 'firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';

const user = useCurrentUser();

// https://firebase.google.com/docs/auth/web/password-auth#next_steps
// const auth = getAuth(); // Firebase
const auth = useFirebaseAuth(); // VueFire

async function signOutFirebase() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Logged out!');
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
}
</script>

<template>
  <nav class="pr-4">
    <BaseButton to="/">Home</BaseButton>
    <BaseButton to="/new">New</BaseButton>
    <BaseButton v-if="user?.email" to="/" @click="signOutFirebase">
      Sign Out
    </BaseButton>
    <BaseButton v-else to="/sign-in">Sign-In</BaseButton>
  </nav>
</template>

<style></style>
