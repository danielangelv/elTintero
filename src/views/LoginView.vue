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
                  class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="su correo electrónico" v-model="user" />
              </div><br>

              <div class="relative w-full mb-3"><br>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Escribe tu contraseña
                </label>
                <input type="password" id="password"
                  class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                
                <RouterLink to="/recuperarContraseña" class="text-black w-1/2">
                  <small>¿Olvidó su clave?</small>
                </RouterLink>
                
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
import snackBar from "@/components/snackBar.vue";
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  components:
  {
    LogoSlogan
  },
  methods: {
    login: async function (e) {
      console.log(e);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
        mode:"cors",
        body: JSON.stringify({ "username": this.user, "password": window.btoa(this.password)}),
        credentials: 'include'
      };
      try {
        const data = await fetch("http://localhost:5000/login", requestOptions);
        console.log(data)
        if (data.status === 200) {
          const answer = await data.json();
          console.log(answer)
          localStorage.setItem('userInFormation', JSON.stringify(answer.data));
          //alert('¡Inicio de Sesión Exitoso!');
          snackBar.showSnackBar("¡Bienvenido nuevamente!");
          if(answer.data.name == 'usuario_root'){
            setTimeout(function () {
            window.location = '/createAdmi';
          }, 1000);
          }
          else{
            setTimeout(function () {
            window.location = '/';
          }, 1000);
          }

        }else{
          //return alert('¡Usuario o Contraseña incorrecto!');
          snackBar.showSnackBar("¡Datos incorrectos!")
          return;

        }
      } catch (e) {
        snackBar.showSnackBar("¡Datos incorrectos!")
        return;
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
  border: 1px solid rgb(20 184 166);
}

#password {
  background-color: #def2f1;
  border: 1px solid rgb(20 184 166);
}
</style>

<style>
#regLogo
{
  height: 200px;
}

h1
{
  text-align: center;
  font-size: 4rem;
  color: black;
  font-family: 'Abhaya Libre', serif;
  border-bottom: 2px solid rgb(20 184 166);
  margin-bottom: 2rem;
}
#boxRegisLogo
{
  width: 100%;
  background-color: rgb(20 184 166);
}

#boxRegis
{
  width: 800px;
  border: 2px solid rgb(20 184 166);
  justify-content: center;
}

.row
{
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;
  color: black;

}

[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #def2f1;
    border-color: rgb(20 184 166);
    border-width: 1px;
    border-radius: 10px;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
}
</style>
