<template>
  <div class="mini-header">
    <div class="header-menu">
      <ul>
        <li>
          <a href=""><i class="far fa-thumbs-up"></i> &nbsp; Рекомендуемые</a>
        </li>
        <li>
          <a href=""><i class="far fa-file"></i> &nbsp; Мои Резюме</a>
        </li>
        <li>
          <a href=""><i class="fas fa-file"></i> &nbsp; Просмотры Резюме</a>
        </li>
        <li>
          <a href=""><i class="fas fa-user-check"></i> &nbsp; Мои Отклики</a>
        </li>
        <li>
          <a href=""><i class="fas fa-user-tie"></i> &nbsp; Профиль</a>
        </li>
      </ul>
    </div>
    <form action="">
      <input type="text" placeholder="🔍" />
      <div class="input-inner">
        <!-- <i class="fas fa-map-marker-alt"></i> -->
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
export default {
  data() {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
  },
};
</script>
<style scoped lang="scss">
@import '../assets/styles/variables';
.header {
  width: 100%;
  background: $main;

  .header-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: $main;

    ul {
      display: flex;
      flex-direction: column;

      li {
        display: block;
        list-style: none;
        padding: 0.5rem;
        margin: 0.5rem auto;

        a {
          color: $white;
          font-weight: 700;
          font-size: 1.2rem;
        }
      }
    }
  }
  form {
    position: relative;
    background: $main;

    input {
      border: none;
      outline: none;
      width: 95%;
      padding: 0.8rem;
      margin: 1rem auto;
      border-radius: 0.5rem;
    }
    button {
      padding: 0.5rem;
      margin: 1rem;
      border: 2px solid $white;
      border-radius: 0.5rem;

      i {
        color: $white;
        font-size: 1.2rem;
      }
    }

    .input-inner {
      position: absolute;
      top: 18%;
      right: 5%;
      transform: translate(-5%, -18%);

      i {
        font-size: 1.2rem;

        @media screen and (max-width: 950px) {
          display: none;
        }
      }
      select {
        padding: 0.5rem;
        border: none;
        font-size: 1rem;
      }
    }
  }
}
</style>
