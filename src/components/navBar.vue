<template>
  <nav class="navbar bg-light">
    <div class="container-fluid" v-if="username !== null">
        <router-link class="navbar-brand" to="/">Inicio</router-link> |
        {{username}} |
        <button class="btn btn-outline-success" @click="logout">Cerrar Sesión</button>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    <div class="container-fluid" v-else>
        <router-link class="navbar-brand" to="/">Inicio</router-link> |
        <router-link class="navbar-brand" to="/login">Iniciar Sesión</router-link> |
        <router-link class="navbar-brand" to="/register">Registro</router-link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
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
          "username":localStorage.getItem('username'),
      }
  }
};
</script>

<style>
.btn-outline-success 
{
    --bs-btn-color: rgb(20 184 166);
    --bs-btn-border-color: rgb(20 184 166);
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: rgb(20 184 166);
    --bs-btn-hover-border-color: rgb(20 184 166);
    --bs-btn-focus-shadow-rgb: 25,135,84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: rgb(20 184 166);
    --bs-btn-active-border-color: rgb(20 184 166);
    --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: rgb(20 184 166);
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: rgb(20 184 166);
    --bs-gradient: none;
}
</style>
