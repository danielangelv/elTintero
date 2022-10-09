<template >
  <navBar />
  <router-view class="background"/>
  <FooterSmall/>

</template>
<script>
import navBar from "@/components/navBar.vue";
import FooterSmall from "@/components/FooterSmall.vue";
export default {
  components: {
    navBar,
    FooterSmall
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.background {
  background-color: rgb(20 184 166)
}
</style>
