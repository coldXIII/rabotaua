<template>
  <footer>
    <p>Copyrigt &copy; 2022 byCold</p>
  </footer>
</template>

<script>
export default{
  name:'AppFooter'
}

</script>

<style scoped lang="scss">
@import '../assets/styles/variables';
footer {
  background: $main;
  padding: 1rem;
  color: $white;
  font-weight: 500;
  margin-top: 2rem;
}
</style>
