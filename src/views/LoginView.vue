<template>
  <section class="relative w-full h-full min-h-screen">
    <div class="container mx-auto h-full ">
      <div id="posicionCajaLogin" class="flex content-center items-center">
        <LogoSlogan />
        <div id="dimCajaLogin">
          <div class="relative pt-5 pb-5 h-full flex min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
            <div class="flex-auto lg:px-10 pt-5 pb-5">

              <div class="relative w-full mb-3"><br>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 align-left"
                  htmlFor="grid-password">
                  Escribe tu Email
                </label>
                <input type="email" id="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="su correo electrónico" v-model="user" />
              </div><br>

              <div class="relative w-full mb-3"><br>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Escribe tu contraseña {{password}}
                </label>
                <input type="password" id="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Su clave" v-model="password" />
              </div>

              <br><br><br>
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
    login: async function (e) {
      console.log(e);
      this.password = window.btoa(this.password);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers":'*', "Access-Control-Expose-Headers":'*' },
        mode:"cors",
        body: JSON.stringify({ username: this.user, password: this.password }),
        credentials: 'include'
      };
      let data = await fetch("http://localhost:5000/login", requestOptions)
      const respuesta = await data.json();
      if (respuesta.message == 'wrong password or username') {
        return alert('¡Usuario o Contraseña incorrecto!');
      }
      if (respuesta.message == 'succesfull login') {
        localStorage.setItem('username',this.user);
        alert('¡Inicio de Sesión Exitoso!');
        window.location = '/';
      }
    }
  }
};
</script>

<style>
#posicionCajaLogin {
  height: 40em;
}

#dimCajaLogin {
  padding-top: 2%;
  width: 100%;
  height: 100%;
}

#email {
  background-color: #def2f1;
}

#password {
  background-color: #def2f1;
}
</style>
