<template>
  <div class="wrapper">
    <Card
      v-for="card in $store.state.cards"
      :key="card.id"
      :card="card"
      class="card"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  name: 'HomeView',
  components: { Card },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  .card {
    width: 90%;
    margin: 1rem auto;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    z-index: 20;
    overflow-x: hidden;
  }
}
</style>
