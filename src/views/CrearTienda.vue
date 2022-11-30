<template>
    <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 shadow-xl mb-10 bg-white">
        <h1>Crear Tienda</h1>

        <div class="grid grid-cols-1 gap-4 ">
            <div class="grid grid-rows-4 ">
                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">NOMBRE DEL LUGAR:</label>
                    <input class="w-full formulario_input" v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="lugar" type="text"  v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="El Tintero CO"/>
                    <span v-else>{{ lugar }}</span>
                </div>

                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">CIUDAD:</label>
                    <div class="autocomplete" style="display: grid;">
                      <input id="ciudadInput" class="w-full formulario_input" v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="ciudad" type="text"  v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="Pereira, Risaralda"/>
                      <span v-else>{{ ciudad }}</span>
                    </div>
                </div>

                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">DIRECCION:</label>
                    <input class="w-full formulario_input" v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="direccion" type="text"  v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="AV. SUR"/>
                    <span v-else>{{ direccion }}</span>
                </div>

                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">CONTACTO:</label>
                    <input class="w-full formulario_input" v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="contacto" type="text"  v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="333 3333"/>
                    <span v-else>{{ contacto }}</span>
                </div>

                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">HORARIO HABITUAL:</label>
                    <input class="w-full formulario_input" v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="horario" type="text"  v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="11am - 10pm"/>
                    <span v-else>{{ horario }}</span>
                </div>

            </div>
        </div>
        <div class="justify-center text-center items-center content-center">
            <button v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                style="background-color: #14b8a6; color:black;" @click="crear">Crear</button>
        </div>

    </div>

</template>
<script>
import snackBar from "@/components/snackBar.vue";
import AutoComplete from "@/components/AutoComplete.vue";
import DANE from "@/assets/dane.json";
var ciudades = DANE.map((e) => e.name+", "+e.department.name);
export default {
    components:
        {},
    data() {
        return {
            "lugar": "",
            "direccion": "",
            "contacto": "",
            "horario": "",
            "id":"",
            "user": JSON.parse(localStorage.getItem('userInFormation'))
        };
    },
    async mounted(){
      var idAutoComplete = document.getElementById('ciudadInput');
      AutoComplete.autocomplete(idAutoComplete, ciudades);
    },
    methods: {
        crear: async function (e) {
            console.log(e);
            var idAutoComplete = document.getElementById('ciudadInput');
            var ciudad = idAutoComplete.value;
            var busquedaCiudad = ciudades.find((c) => c == ciudad);
            if (!busquedaCiudad) {
              return snackBar.showSnackBar("¡Selecciona una ciudad válida!");
            }
            var direccion = this.direccion+", "+ciudad;
            let data = {
                "lugar": this.lugar,
                "direccion": direccion,
                "contacto": this.contacto,
                "horario": this.horario
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
                mode: "cors",
                body: JSON.stringify(data),
                credentials: 'include'
            };
            if (this.$route.params.id){
                let response = await fetch(`${this.backend_host}/store/create`, requestOptions)
                if (response.status === 200 || response.status === 201) {
                    await response.json();
                    //alert('libro creado existosamente');
                    snackBar.showSnackBar("Tienda creada existosamente");
                    setTimeout(function () {
                        window.location = '/';
                    }, 1000);
                }
                else {
                    snackBar.showSnackBar("No se pudo crear la tienda");
                }
            }

        }
    }
}

</script>
<style>
.formulario_input{
  color: black; appearance: none; background-color: rgb(222, 242, 241); border-color: rgb(20, 184, 166); border-width: 1px; border-radius: 10px; padding: 0.5rem 0.75rem; font-size: 1rem; line-height: 1.5rem;
}

h2
{
    font-size: 2rem;
    color: black;
    font-family: 'Abhaya Libre', serif;
}
#boxCrearLibro {
    color: black;
    background-color: white;
}

label
{
    font-family: 'Roboto Mono', monospace;
}

[type='file']{

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
