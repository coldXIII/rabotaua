<template>
  <section class="signin">
    <div class="form-box">
      <form action="">
        <h1>Sign In</h1>
        <label for="">
          <span class="visually-hidden">Email</span>
          <input type="text" placeholder="email" v-model="email" />
          <i class="fa-solid fa-envelope"></i>
        </label>
        <label for="">
          <span class="visually-hidden">Password</span>
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="password"
            v-model="password"
          />
          <i class="fa-solid fa-lock"></i>
          <button
            class="show-password"
            aria-label="Toggle Password"
            @click.prevent="showPassword = !showPassword"
          >
            <i class="fa-solid fa-eye"></i>
          </button>
        </label>
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click.prevent="signIn">Sign In</button>
        <button @click.prevent="signInWithGoogle">Sign In with Google</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();
const showPassword = ref(false);
const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Succesfully Registered');
      router.push('/');
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid Email';
          break;
        case 'auth/user-not-found':
          errMsg.value = 'No Account with that email found';
          break;
        case 'auth/Wrong-password':
          errMsg.value = 'Incorrect Password';
          break;
        default:
          errMsg.value = 'Email or Password was incorrect';
          break;
      }
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
.signin {

  min-height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/office-bg.webp) no-repeat;
  background-size: cover;

  .form-box {
    height: 60vh;
    display: flex;
    justify-content: center;
  }

  form {
    width: 23rem;
    min-width: 18rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    background: rgba(255, 83, 83, 0.3);
    box-shadow: 2px 2px 5px $main;

    h1 {
      margin-bottom: 2rem;
    }
    label {
      position: relative;
      width: 90%;
      &:last-of-type {
        margin-bottom: 1rem;
      }

      input {
        width: 100%;
        border: 1px solid rgba(150, 150, 150, 0.5);
        outline: none;
        border-radius: 0.5rem;
        padding: 0.7rem 2rem;
        margin: 0.5rem auto;
      }
      i {
        position: absolute;
        top: 18px;
        left: 5px;
        font-size: 1.3rem;
        color: $main;
      }
      .show-password {
        position: absolute;
        top: 2px;
        right: 2px;
        padding: 18px;
        background: transparent;
        cursor: pointer;
        &:hover {
          background: transparent;
        }

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.3rem;
          color: $main;

          &:hover {
            color: red;
          }
        }
      }
    }

    button {
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
