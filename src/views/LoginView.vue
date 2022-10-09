<template>
  <div style="background-color: rgb(20 184 166)">
    <main>
      <section class="relative w-full h-full min-h-screen">
        <div class="container mx-auto h-full ">
          <div class="flex content-center items-center justify-end h-full">
            <div class="container hidden md:block">
              <div class="text-center items-center content-center">
                <img class="max-w-200-px mx-auto" :src="logo" alt="Logo"><br/>
                <h1 class="text-center font-bold">¡Que leer sea como empezar una nueva aventura!</h1>
              </div>
            </div>
            <div class="w-full lg:w-4/12">
              <div
                class="relative pt-5 pb-5 h-full flex min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0"
              >
                <div class="flex-auto lg:px-10 pt-5 pb-5">

                  <form @submit="iniciarSesion">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="su correo electrónico"
                      />
                    </div>

                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Clave
                      </label>
                      <input
                        type="password"
                        id="password"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Su clave"
                      />
                    </div>
                    <div>
                      <label class="inline-flex items-center cursor-pointer">
                        <input
                          id="mantener"
                          type="checkbox"
                          class="form-checkbox border-0 rounded bg-black text-white ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span
                          class="ml-2 text-sm font-semibold"
                        >
                          ¿Mantener Sesión?
                        </span>
                      </label>
                    </div>

                    <div class="text-center mt-6">
                      <button
                        class="text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        style="background-color: rgb(20 184 166)"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                  </form>
                  <div class="flex flex-wrap mt-6 relative">
                    <div class="w-1/2">
                      <a href="javascript:void(0)" class="text-black">
                        <small>¿Olvidó su clave?</small>
                      </a>
                    </div>
                    <div class="w-1/2 text-right">
                      <router-link to="/register" class="text-black">
                        <small>Crear una cuenta</small>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>

<script>
import FooterSmall from "@/components/Footers/FooterSmall.vue";
import logo from "@/assets/logo.png";

export default {
  data() {
    return {
      logo
    };
  },
  components: {
    FooterSmall,
  },
  methods: {
    iniciarSesion: function (e) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email && password) {
        alert('iniciar Sesión');
        const client = new XMLHttpRequest();
        client.open("POST", "/login");
        client.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var jsonData = {
          username:email,
          password: window.btoa(password)
        }
        client.send(JSON.stringify(jsonData));
      }
      if (!email) {
        alert('el correo electrónico es obligatorio');
      }
      if (!password) {
        alert('la contraseña es obligatoria');
      }
      e.preventDefault();
    }
  }
};
</script>
