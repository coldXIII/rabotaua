<template>
  <div class="header">
    <MobileMenu class="mobilemenu" :class="{ open: showMobileMenu }" />
    <div class="header-menu">
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/logo.png" alt=""
        /></router-link>
      </div>
      <div id="bars">
        <i
          class="fas fa-bars"
          :class="{ 'fa-times': showMobileMenu }"
          @click.prevent="showMobileMenu = !showMobileMenu"
        ></i>
      </div>
      <ul class="menu">
        <li>
          <a href=""><i class="far fa-thumbs-up"></i> &nbsp;Рекомендуемые</a>
        </li>
        <li>
          <router-link to="/my-cv"
            ><i class="far fa-file"></i> &nbsp; Мои Резюме</router-link
          >
        </li>
        <li>
          <a href=""
            ><i class="fas fa-file"></i> &nbsp; Просмотры Резюме ({{
              counter
            }})</a
          >
        </li>
        <li>
          <a href=""><i class="fas fa-user-check"></i> &nbsp; Мои Отклики</a>
        </li>
        <li>
          <a href=""><i class="fas fa-star"></i></a>
        </li>
        <li class="profile">
          <a href="" @click.prevent="signMenu = true"
            ><i class="fas fa-user-tie"></i> &nbsp; Профиль</a
          >
          <ul
            class="signup-menu"
            v-if="signMenu"
            @mouseleave="signMenu = false"
          >
            <li @click="signMenu = false">
              <router-link to="/sign-in" href=""
                ><i class="fas fa-user-tie"></i> &nbsp;signin</router-link
              >
            </li>
            <li @click="signMenu = false">
              <router-link to="/sign-up" href=""
                ><i class="fas fa-user-tie"></i> &nbsp;signup</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <form action="">
      <input type="text" placeholder="🔍" />
      <div class="input-inner">
        <i class="fas fa-map-marker-alt"></i>
        <select name="city" id="">
          <option value="Киев">Киев</option>
          <option value="Львов">Львов</option>
          <option value="Одесса">Одесса</option>
        </select>
      </div>
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import MobileMenu from './MobileMenu.vue';
export default {
  name: 'AppHeader',
  components: { MobileMenu },
  setup() {
    const showMobileMenu = ref(false);
    const signMenu = ref(false);
    const counter = ref(0);

    onBeforeMount(() => {
      fetch('https://api.countapi.xyz/update/cold/rabotaua/?amount=1')
        .then((response) => response.json())
        .then((data) => {
          counter.value = data.value;
        });
    });

    return {
      showMobileMenu,
      signMenu,
      counter,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables';

.header {
  width: 100%;
  background: $main;

  .mobilemenu {
    position: absolute;
    top: 5rem;
    right: -100%;
    min-width: 50%;
    z-index: 1000000;
    display: block;
    transition: all 0.5s ease-in-out;

    @media screen and (min-width: 990px) {
      display: none;
    }

    &.open {
      right: 0;
    }
  }

  .header-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      width: 13rem;

      img {
        width: 100%;
      }
    }
    #bars {
      padding: 0.7rem 0.7rem 1.5rem;
      margin-right: 0.7rem;
      cursor: pointer;
      transition: all 0.3s ease;

      i {
        font-size: 2rem;
        color: $white;
        display: none;

        @media screen and (max-width: 990px) {
          display: block;
        }
      }
    }

    .menu {
      display: flex;

      @media screen and (max-width: 990px) {
        display: none;
      }

      li {
        list-style: none;
        margin: 0 1rem;

        a {
          color: $white;
          font-weight: 700;
          transition: all 0.5s ease;
        }
      }
      .profile {
        position: relative;

        .signup-menu {
          position: absolute;
          left: -3rem;
          top: 2rem;
          background-color: $white;
          padding: 1rem 2rem;
          z-index: 9999;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          border-radius: 0.5rem;
          li {
            padding: 1rem;
            font-size: 1.2rem;
            border-radius: 0.5rem;
            transition: all 0.3s ease;

            a {
              width: 100%;
              height: 100%;
              color: $main;
              transition: all 0.3s ease;
            }
            &:hover {
              background-color: $main;
            }
            &:hover a {
              color: $white;
            }
          }
        }
      }
    }
  }
  form {
    position: relative;

    @media screen and (max-width: 990px) {
      display: none;
    }

    input {
      border: none;
      outline: none;
      width: 85%;
      padding: 0.8rem;
      margin: 1rem auto;
      border-radius: 0.5rem;
    }
    button {
      padding: 0.5rem;
      margin: 0 1rem;
      border: 2px solid $white;
      border-radius: 0.5rem;
      i {
        color: $white;
        font-size: 1.2rem;
      }
    }
    .input-inner {
      position: absolute;
      top: 50%;
      right: 10%;
      transform: translate(-10%, -50%);

      i {
        font-size: 1.2rem;
      }
      select {
        padding: 0.5rem;
        border: none;
        font-size: 1rem;
        color: #666;
      }
    }
  }
}
</style>
