<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link> |
      <router-link class="navbar-brand" to="/login">Iniciar Sesión</router-link>|
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
};
</script>
