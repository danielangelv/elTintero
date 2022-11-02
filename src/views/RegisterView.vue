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
            v-bind:style="input_font_color">
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
          <input v-model="birthDate" v-bind:class="generic_input_styles" type="date" min="1900-01-01" max="2030-01-01"
            id="birthDate" placeholder="01/01/2000" v-bind:style="input_font_color">
        </div>
        <div class="md:w-1/2 px-3">
          <label v-bind:class="generic_labels_styles" for="birthPlace">
            Lugar de nacimiento*
          </label>
          <input v-model="birthPlace" v-bind:class="generic_input_styles" id="birthPlace" type="text"
            placeholder="Pereira/Risaralda" v-bind:style="input_font_color">
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
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
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label v-bind:class="generic_labels_styles" for="email">
            Email*
          </label>
          <input v-bind:class="generic_input_styles" id="email" type="email" placeholder="Pepito0102@eltintero.com"
            v-bind:style="input_font_color" v-model="email">
        </div>
      </div>
      <FormTopics ref="topic_ref"></FormTopics>
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
export default {
  components: {
    FormTopics
  },
  data() {
    return {
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
      gender: "",
    };
  },
  methods: {
    register: async function (e) {
      console.log(e);
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
        "birth_place": this.birtPlace
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
        mode: "cors",
        body: JSON.stringify(payload),
        credentials: 'include'
      };
      
      let data = await fetch("http://localhost:5000/register", requestOptions)
      if (data.status === 200 || data.status === 201){
        const answer = await data.json();
        localStorage.setItem('userInFormation', JSON.stringify(answer.data));
        alert('¡Inicio de Sesión Exitoso!');
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


.view-container {
  background-color: rgb(20 184 166)
}

</style>
