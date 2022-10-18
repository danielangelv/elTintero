<template>
  <nav class="flex flex-row">
      <router-link  class="basis-1/4 box-content h-5 text-zinc-100" to="/">Inicio</router-link>
      <router-link  class="basis-1/4 box-content h-5 text-zinc-100" to="/login">Iniciar Sesion</router-link>
      <router-link  class="basis-1/4 box-content h-5 text-zinc-100" to="/register">Registro</router-link>
      <router-link  class="basis-1/4 box-content h-5 text-zinc-100" to="/createBook">Crear libro</router-link>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  methods: {
    logout: async function (e) {
      console.log(e);
      const request = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        credentials: 'include'
      };
      var data = await fetch("http://localhost:5000/logged", request)
      data = await data.json();
      if (data.message == 'logged out') {
        localStorage.removeItem('username');
        alert('¡Sesión cerrada con exito!');
        window.location = '/';
      }
    }
  },
  data() {
    return {
      "username": localStorage.getItem('username'),
    }
  }
};
</script>
<style>
nav {
  padding: 15px;
  font-weight: bold;
  background-color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>