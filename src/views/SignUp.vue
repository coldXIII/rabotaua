
<template>
  <div class="signup">
    <form action="">
      <h1>Create an Account</h1>
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <p v-if="errMsg">{{ errMsg }}</p>
      <button @click.prevent="signUp">Sign Up</button>
      <button @click.prevent="signInWithGoogle">Sign In with Google</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const router = useRouter();
const signUp = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('Succesfully Registered');
      router.push('/');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/feed');
    })
    .catch((error) => {
        console.log(error.code);
      alert(error.message);
    });
};
</script>


<style scoped lang="scss">
@import '../assets/styles/variables';
.signup {
  min-height: 70vh;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;

    h1 {
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      border: 1px solid rgba(150, 150, 150, 0.5);
      outline: none;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem auto;
    }
    button {
      border: none;
      outline: none;
      background: $main;
      color: $white;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.3s ease;
      margin: 0.5rem auto;
    }
    button:hover {
      background: red;
      color: $white;
    }
  }
}
</style>