<template>
  <section class="relative w-full h-full min-h-screen">
    <div class="container mx-auto h-full ">
      <div class="flex content-center items-center justify-end h-full">
        <LogoSlogan />
        <div class="w-full lg:w-4/12">
          <div class="relative pt-5 pb-5 h-full flex min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
            <div class="flex-auto lg:px-10 pt-5 pb-5">

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Nombre de usuario
                </label>
                <input type="email" id="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="su correo electrónico" v-model="user" />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Clave
                </label>
                <input type="password" id="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Su clave" v-model="password" />
              </div>

              <div class="text-center mt-6">
                <button
                  class="text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  style="background-color: rgb(20 184 166)" @click="login">
                  Iniciar Sesión
                </button>
              </div>
              <div class="flex flex-wrap mt-6 relative">
                <a href="javascript:void(0)" class="text-black w-1/2">
                  <small>¿Olvidó su clave?</small>
                </a>
                <router-link to="/register" class="text-black w-1/2 text-right">
                  <small>Crear una cuenta</small>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LogoSlogan from "@/components/LogoSlogan.vue";
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  components: {
    LogoSlogan
  },
  methods: {
    login: function (e) {
      console.log("clicked", e)
    }
  }
};
</script>
