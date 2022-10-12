<template>
  <nav class="navbar bg-light">
    <div class="container-fluid" v-if="username !== null">
        <router-link class="navbar-brand" to="/">Home</router-link> |
        {{username}} |
        <button class="btn btn-outline-success" @click="logout">Cerrar Sesión</button>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    <div class="container-fluid" v-else>
        <router-link class="navbar-brand" to="/">Home</router-link> |
        <router-link class="navbar-brand" to="/login">Iniciar Sesión</router-link> |
        <router-link class="navbar-brand" to="/register">Registro</router-link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
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
      data = await data.text();
      if (data == 'logg out') {
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
