<template >
  <navBar />
  <router-view/>
  <FooterSmall/>
  <div id="snackbar"></div>
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
  background-color: rgb(20 184 166)
}


</style>
