<template>
    <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10 bg-white">
        <h1>Crear Tienda</h1>

        <div class="grid grid-cols-1 gap-4 ">
            <div class="grid grid-rows-4 ">
                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">NOMBRE DEL LUGAR:</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="lugar" type="text" class="w-full" v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="Español"/>
                    <span v-else>{{ lugar }}</span>
                </div>

                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">DIRECCION:</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="direccion" type="text" class="w-full" v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="Español"/>
                    <span v-else>{{ direccion }}</span>
                </div>
                
                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">CONTACTO:</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="contacto" type="text" class="w-full" v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="Español"/>
                    <span v-else>{{ contacto }}</span>
                </div>
                
                <div class="place-self-center grid grid-cols-1 px-5 w-80" style="padding-bottom:1vh;">
                    <label for="">HORARIO HABITUAL:</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" v-model="horario" type="text" class="w-full" v-bind:disabled=" !(this.user && this.user.auth_helper.includes('CREATE_STORE'))" placeholder="Español"/>
                    <span v-else>{{ horario }}</span>
                </div>
                
            </div>
        </div>
        <div class="justify-center text-center items-center content-center">
            <button v-if="(this.user && this.user.auth_helper.includes('CREATE_STORE'))" class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                style="background-color: #14b8a6; color:black;" @click="crear">Crear</button>
        </div>
        <div class="grid grid-cols-1 border border-teal-500 ">
            <div v-for="tienda in tiendas" v-bind:key="tienda.nombre" >
                <div class="lg:w-5/6 w-full lg:pr-3 mx-4 my-4 bg-gray-200 rounded-xl p-6">
                    <span>{{ tienda.nombre }}</span>
                    <button class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" style="background-color: #14b8a6; color:black;">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import snackBar from "@/components/snackBar.vue";
export default {
    components: 
        {},
    data() {
        return {
            "tiendas":[{"nombre":"tienda 1","direccion": "carrera2","horario": "lunes-marte"},{"nombre":"tienda 2","direccion": "carrera2","horario": "lunes-marte"},{"nombre":"tienda 3","direccion": "carrera2","horario": "lunes-marte"},{"nombre":"tienda 4","direccion": "carrera2","horario": "lunes-marte"}],
            "lugar": "",
            "direccion": "",
            "contacto": "",
            "horario": "",
            "id":"",
            "user": JSON.parse(localStorage.getItem('userInFormation'))
        };
    },
    
    methods: {
        crear: async function (e) {
            console.log(e);
            let data = {
                "lugar": this.lugar,
                "direccion": this.direccion,
                "contacto": this.contacto,
                "horario": this.horario,
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
                mode: "cors",
                body: JSON.stringify(data),
                credentials: 'include'
            };
            console.log("hola")
            if (this.$route.params.id){
                let response = await fetch("http://localhost:5000/store/create", requestOptions)
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