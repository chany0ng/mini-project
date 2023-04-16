<template>
  <div>
    <Header />
    <router-view>zz</router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  background-color: antiquewhite;
}
nav a {
  margin: 10px 10px;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
