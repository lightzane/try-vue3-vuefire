<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/base/BaseButton.vue';
import BaseContainer from '@/components/base/BaseContainer.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseForm from '@/components/base/BaseForm.vue';
import BaseInput from '@/components/base/BaseInput.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const userInput = ref({
  email: '',
  password: '',
});

// ! In this lesson, we will use the Password-based Authentication
// Reference: https://firebase.google.com/docs/auth/web/password-auth

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { useFirebaseAuth } from 'vuefire';

// const auth = getAuth(); // Firebase
const auth = useFirebaseAuth(); // VueFire

// https://firebase.google.com/docs/auth/web/google-signin
const provider = new GoogleAuthProvider();

async function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      router.push({ path: '/', replace: true });
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
async function createUser() {
  createUserWithEmailAndPassword(
    auth,
    userInput.value.email,
    userInput.value.password
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
}

// https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
async function signInUser() {
  signInWithEmailAndPassword(
    auth,
    userInput.value.email,
    userInput.value.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.email) {
        router.push('/');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
}
</script>

<template>
  <BaseContainer>
    <h1 class="mb-4">Sign In</h1>
    <BaseCard>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="userInput.email"
            type="email"
            label="Email"
            required
            placeholder="eleanorshellstrop@thegoodplace.com"
          />
          <BaseInput
            v-model="userInput.password"
            label="Password"
            type="password"
            required
          />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="signInUser" variant="tonal" color="success">
          Sign In
        </BaseButton>
        <BaseButton @click="googleSignIn" variant="tonal" color="success">
          Google
        </BaseButton>
        <BaseButton
          @click="createUser"
          variant="tonal"
          color="secondary"
          outline
        >
          Create New User
        </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
