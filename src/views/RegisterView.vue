<template>
  <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10 view-container">
    <div class="relative rounded-xl overflow-auto p-3">
      <img src="../assets/logo.png" class="text-center rounded-lg overflow-hidden w-56 sm:w-20 mx-auto">
    </div>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div>
        <h1>Registrate</h1>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="name">
            Nombre completo*
          </label>
          <input v-model="name" v-bind:class="generic_input_styles" id="name" type="text"
            placeholder="Pepito Perez Marques" v-bind:style="input_font_color">
        </div>
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="identification">
            Identificación*
          </label>
          <input v-model="id" v-bind:class="generic_input_styles" id="identification" type="text"
            placeholder="1088559554" v-bind:style="input_font_color">
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="user">
            Usuario*
          </label>
          <input v-model="user" v-bind:class="generic_input_styles" id="user" type="text" placeholder="pepito_perez1"
            v-bind:style="input_font_color">
        </div>
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="password">
            Contraseña*
          </label>
          <input v-model="password" v-bind:class="generic_input_styles" id="password" type="password" placeholder="***"
            v-bind:style="input_font_color" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe contener al menos un número, una letra mayúscula y minúscula, al menos 8 o más caracteres y no debe contener caracteres especiales" required>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="phoneNumber">
            Número de teléfono*
          </label>
          <input v-model="phoneNumber" v-bind:class="generic_input_styles" id="phonerNumber" type="tel" name="tel"
            min="300" placeholder="311585984" v-bind:style="input_font_color">
        </div>
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="mailingAddress">
            Dirección de correspondencia*
          </label>
          <input v-model="mailingAddress" v-bind:class="generic_input_styles" id="mailingAddress" type="text"
            placeholder="Carrera 11 #23-11" v-bind:style="input_font_color">
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="birthDate">
            Fecha de nacimiento*
          </label>
          <input v-model="birthDate" v-bind:class="generic_input_styles" type="date" min="1920-01-01" max="2014-01-01"
            id="birthDate" placeholder="01/01/2000" v-bind:style="input_font_color">
        </div>
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="birthPlace">
            País de residencia*
          </label>
          <div class="autocomplete" style="display: grid;">
            <input class="AutoComplete" id="countryPlace" type="text" name="countryPlace" placeholder="Colombia">
          </div>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="birthPlace">
            Ciudad de residencia (SOLO COLOMBIA)*
          </label>
          <div class="autocomplete" style="display: grid;">
            <input class="AutoComplete" id="birtPlace" type="text" name="birtPlace" placeholder="" :readonly="isReadOnlyCiudad">
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" class="" for="gender">
            Género*
          </label>
          <div>
            <select v-model="gender" v-bind:class="generic_input_styles" id="gender" type="text" placeholder="Masculino"
              v-bind:style="input_font_color">
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="email">
            Email*
          </label>
          <input v-bind:class="generic_input_styles" id="email" type="email" placeholder="Pepito0102@eltintero.com"
            v-bind:style="input_font_color" v-model="email">
        </div>
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <FormTopics ref="topic_ref"></FormTopics>
        </div>
      </div>
      <div class="-mx-3 md:flex mt-9 md:w-full px-3 text-center">
        <button
          class="md:w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
          style="background-color: #14b8a6; color:black;" @click="register">
          Registrate
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import FormTopics from "@/components/formTopics.vue";
import AutoComplete from "@/components/AutoComplete.vue";
import snackBar from "@/components/snackBar.vue";
import DANE from "@/assets/dane.json";
import PAISES from "@/assets/paises.json";

var ciudades = DANE.map((e) => e.name+", "+e.department.name);
var paises = PAISES.map((e) => e.name_en);
export default {
  components: {
    FormTopics
  },
  data() {
    return {
      ciudades,
      paises,
      generic_input_styles: "w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1",
      generic_labels_styles: "uppercase tracking-wide text-black text-xs font-bold mb-2",
      input_font_color: "color:black; appearance: none;background-color: #def2f1;border-color: rgb(20 184 166);border-width: 1px;border-radius: 10px;padding-top: 0.5rem;padding-right: 0.75rem;padding-bottom: 0.5rem;padding-left: 0.75rem;font-size: 1rem;line-height: 1.5rem;",
      user: "",
      name: "",
      id: "",
      email: "",
      phoneNumber: "",
      password: "",
      mailingAddress: "",
      birthDate: "",
      birthPlace: "",
      countryPlace: "",
      gender: "",
      isReadOnlyCiudad: false
    };
  },
  async mounted(){
    var idAutoComplete = document.getElementById('birtPlace');
    var idPaises = document.getElementById("countryPlace");
    AutoComplete.autocomplete(idPaises,paises);
    AutoComplete.autocomplete(idAutoComplete, ciudades);
    idPaises.addEventListener('keyup', () => {

    if (idPaises.value != "Colombia") {
      this.isReadOnlyCiudad = true;
      idAutoComplete.value = "";
      if(!idAutoComplete.classList.contains('readOnly')){
        idAutoComplete.classList.toggle('readOnly');
      }
    }
    else {
      this.isReadOnlyCiudad = false;
      if(idAutoComplete.classList.contains('readOnly')){
        idAutoComplete.classList.remove('readOnly');
      }
    }

    });

    idPaises.value = "Colombia";
  },
  async created(){
    if (this.$route.params.id){
      let response = await fetch(`${this.backend_host}/user/${this.$route.params.id}`)
      if (response.status === 200 || response.status === 201) {
        const answer = await response.json();
        this.name = answer.data.name
        this.email = answer.data.email
        this.phoneNumber = answer.data.phone_number
        this.mailingAddress = answer.data.messaging_addres
        this.birthTime = answer.data.birth_date
        this.birthPlace = answer.birth_place
        this.gender = answer.gender
        console.log(answer)
      }else {
        snackBar.showSnackBar("Error cargando el perfil intenta de nuevo")
      }
    }
  },
  methods: {
    validarPais: function(e){
      console.log(e);
    },
    register: async function (e) {
      if (e) {
        e.preventDefault();
      }
      var idAutoComplete = document.getElementById('birtPlace');
      var idAutoCompletePais = document.getElementById('countryPlace');
      var pais = idAutoCompletePais.value;
      var busquedaPais = paises.find((c) => c == pais);
      if (!busquedaPais) {
        return snackBar.showSnackBar("¡Selecciona un país válida!");
      }
      var ciudad = idAutoComplete.value;
      if (pais == "Colombia") {
        var busquedaCiudad = ciudades.find((c) => c == ciudad);
        if (!busquedaCiudad) {
          return snackBar.showSnackBar("¡Selecciona una ciudad válida!");
        }
        ciudad = ", "+ciudad;
      }
      else {
        ciudad = "";
      }
      var emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i;
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (!emailRegex.test(this.email)) {
        return snackBar.showSnackBar("¡Ingresa un correo válido!");
      }
      if (new Date(this.birthDate) < new Date("1920-01-01") || new Date(this.birthDate) > new Date("2014-01-01")) {
        return snackBar.showSnackBar("¡Ingresa una fecha válida!");
      }
      if (!this.name || this.name == "") {
        return snackBar.showSnackBar("¡Ingresa un nombre válido!");
      }
      if (!passwordRegex.test(this.password)) {
        return snackBar.showSnackBar("¡Ingresa una contraseña válida!");
      }
      if (!this.usuario || this.usuario == "") {
        return snackBar.showSnackBar("¡Ingresa un nombre de usuario válido!");
      }
      if (!this.identification || this.identification == "") {
        return snackBar.showSnackBar("¡Ingresa una identificación válida!");
      }

      this.password = window.btoa(this.password);
      const payload = {
        "name": this.name,
        "last_name": "",
        "birth_date": this.birthDate,
        "gender": this.gender,
        "email": this.email,
        "user": this.user,
        "password": this.password,
        "messaging_addres": this.mailingAddress,
        "birth_place": pais+ciudad,
        "phone_number":this.phoneNumber
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
        mode: "cors",
        body: JSON.stringify(payload),
        credentials: 'include'
      };

      let data = await fetch(`${this.backend_host}/register`, requestOptions)
      if (data.status === 200 || data.status === 201){
        const answer = await data.json();
        localStorage.setItem('userInFormation', JSON.stringify(answer.data));
        snackBar.showSnackBar("¡Registro Exitoso!");
        window.location = '/';
      }
      else{
        alert("No se pudo crear el usuario intente de nuevo")
      }
    }
  }
}
</script>

<style>
.domain_checkbox {
  border-right: 1px solid rgb(20 184 166);
}

.AutoComplete {
  color: black; appearance: none; background-color: rgb(222, 242, 241); border-color: rgb(20, 184, 166); border-width: 1px; border-radius: 10px; padding: 0.5rem 0.75rem; font-size: 1rem; line-height: 1.5rem;
}

.readOnly {
  background-color:gainsboro;
}


.view-container {
  background-color: rgb(20 184 166)
}

</style>
