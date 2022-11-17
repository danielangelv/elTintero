<template>
<nav class="flex flex-row" style="flex-wrap: nowrap;align-content: center;justify-content: space-between;align-items: center;">
    <router-link v-if="user" class="basis-1/4 box-content h-5 text-zinc-100" to="/">{{user.name}}</router-link>
    <router-link to="/" class="flex items-center">
        <img src="../assets/icono.png" class="h-10 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-sm font-semibold whitespace-nowrap text-gray-100">El Tintero</span>
    </router-link>
    <router-link v-if="!user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style="padding-left: 10vw" to="/login">Iniciar Sesion</router-link>
    <router-link v-if="!user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style="padding-left: 10vw" to="/register">Registro</router-link>
    <router-link v-if="!user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style="padding-left: 10vw" to="/editAccount">Editar cuenta</router-link>
    <router-link  v-if="user && user.auth_helper.includes('CRUD_BOOKS')" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/createBook">Crear libro</router-link>
    <router-link  v-if="user && user.auth_helper.includes('CREATE_ADMIN_USER')" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/createAdmi">Crear Administrador</router-link>
    <button v-if="user" class="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" @click="logout">Cerrar sesion</button>
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
