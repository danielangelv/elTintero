<template>

  <nav class="flex flex-row"
    style="flex-wrap: nowrap;align-content: center;justify-content: space-between;align-items: center;">

    <div v-if="user" class="flex space-x-2">
      <div>

        <button class="fa-solid fa-bars fa-2xl inline-block px-6 py-2.5 uppercase transition duration-150 ease-in-out"
          type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        </button>

        <div
          class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
          tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header flex items-center justify-center p-4">
            <i class="fa-solid fa-user fa-10x py-2" id="offcanvasExampleLabel"></i>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-50 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="offcanvas" aria-label="Close">X</button>
          </div>
          <div class="offcanvas-body flex-grow p-4" style="text-align: center;">
            <div>
              Pepito perez
            </div>
            <div v-if="user" class="offcanvas-body flex-grow p-4">{{ user.name }}</div>

            <div
              class="flex-grow w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
              style="background-color: #14b8a6; color:black; margin-top: 5px;">
              <router-link v-if="user" to="/ProfileView">Ver perfil
              </router-link>
            </div>

            <div
              class="flex-grow w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
              style="background-color: #14b8a6; color:black; margin-top: 5px;">
              <router-link v-if="user" to="/editAccount">Editar cuenta
              </router-link>
            </div>

            <button v-if="user"
              class="flex-grow font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
              style="background-color: #14b8a6; color:black; margin-top: 5px;" @click="logout">
              Cerrar sesion
            </button>

          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="flex items-center">
      <img src="../assets/icono.png" class="h-10 mr-3 " alt="Flowbite Logo" />
      <span class="self-center text-sm font-semibold whitespace-nowrap text-gray-100">El Tintero</span>
    </router-link>
    <router-link v-if="!user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" style="padding-left: 10vw" to="/login">Iniciar Sesion</router-link>
    <router-link v-if="!user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" style="padding-left: 10vw" to="/register">Registro</router-link>
    <router-link v-if="user && user.auth_helper.includes('CRUD_BOOKS')" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" to="/createBook">Crear libro</router-link>
    <router-link v-if="user && user.auth_helper.includes('CREATE_ADMIN_USER')" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" to="/createAdmi">Crear Administrador</router-link>
    <router-link v-if="user" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" style="padding-left: 10vw" to="/CarritoCompras"> <i class="fa-solid fa-cart-shopping fa-2x"></i></router-link>
    <router-link  v-if="user && user.auth_helper.includes('CREATE_STORE')" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700" to="/CrearTienda">Crear Tienda</router-link>
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
      } else {
        //alert("No se pudo cerrar la session");
        snackBar.showSnackBar("No se pudo cerrar sesión, intenta nuevamente!")
      }
    }
  },
  data() {
    return {
      "user": JSON.parse(localStorage.getItem('userInFormation')),
    }
  },
};
</script>
<style>
#offcanvasExample {
  background-color: #def2f1;
  border: 2px solid rgb(20 184 166);
}

nav {
  padding: 15px;
  font-weight: bold;
  background-color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c2c2c;
}
</style>
