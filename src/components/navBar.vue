<template>
  <nav class="flex flex-row">
      <router-link v-if="user" class="basis-1/4 box-content h-5 text-zinc-100" to="/">{{user.name}}</router-link>
      <router-link  class="basis-1/4 box-content h-5 text-zinc-100" to="/">Inicio</router-link>
      <router-link v-if="!user" class="basis-1/4 box-content h-5 text-zinc-100" to="/login">Iniciar Sesion</router-link>
      <router-link v-if="!user" class="basis-1/4 box-content h-5 text-zinc-100" to="/register">Registro</router-link>
      <router-link  v-if="user && user.auth_helper.includes('CRUD_BOOKS')" class="basis-1/4 box-content h-5 text-zinc-100" to="/createBook">Crear libro</router-link>
      <router-link  v-if="user && user.auth_helper.includes('CREATE_ADMIN_USER')" class="basis-1/4 box-content h-5 text-zinc-100" to="/createAdmi">Crear Administrador</router-link>
      <button v-if="user" class="basis-1/4 box-content h-5 text-zinc-100" @click="logout">Cerrar sesion</button>
  </nav>
</template>

<script>
import snackBar from "@/components/snackBar.vue";
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
      var data = await fetch("http://localhost:5000/loggout", request)

      if (data.status === 200) {
        data = await data.json();
        localStorage.removeItem('userInFormation');
        //alert('¡Sesión cerrada con exito!');
        snackBar.showSnackBar("¡Hasta Pronto!")
        setTimeout(function () {
          window.location = '/';
        }, 1000);
      }else{
        //alert("No se pudo cerrar la session");
        snackBar.showSnackBar("No se pudo cerrar sesión, intenta nuevamente!")
      }
    }
  },
  data() {
    return {
      "user":JSON.parse(localStorage.getItem('userInFormation')),
    }
  },
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
