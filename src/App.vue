<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: 'Graphik';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: url(./assets/fonts/Graphik-Regular-Web.woff2);
}
@font-face {
  font-family: 'Graphik';
  font-weight: 700;
  font-style: bold;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: url(./assets/fonts/Graphik-Bold-Web.woff2);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Graphik', sans-serif;
}
body {
  background: #e5e5e5;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 20px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: #ff5353;
  border-radius: 0.3rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button,
select {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #232323;
}
i {
  cursor: pointer;
}
.uploadcare--widget__button,
.uploadcare--widget__button:active,
.uploadcare--widget__button:visited {
  position: relative;
  background: transparent;
  border: none;
  outline: none;
  margin-right: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  color: red;
}
.uploadcare--widget__button:hover {
  background: rgba(255, 0, 0, 0.3);
}
</style>
