<template>
    <div class="flex sm:flex-row flex-col" style="place-content: center space-between; align-items: center;">
        <div style="width: -webkit-fill-available;">
            <div class="bg-gray-100 mx-auto sm:w-96 w-60 bg-white shadow-xl fluid-container">

                <div class="offcanvas-body flex-grow p-4"
                    style="text-align: center; margin-bottom: 2rem; background-color: #def2f1; border: 2px solid rgb(20 184 166);">
                    <h2>  <span style="color:goldenrod;">SALDO: </span> {{user.saldo ? moneda.format(user.saldo) : '$ 0'}}</h2>
                    <div style="margin-bottom: 2rem; border: 2px solid rgb(20 184 166);">
                        <div class="flex items-center justify-center p-4">
                            <i class="fa-solid fa-user sm:fa-10x fa-6x justify-center py-2"
                                id="offcanvasExampleLabel"></i>
                        </div>

                        <div v-if="user" class="offcanvas-body flex-grow p-4">{{ user.name }}</div>
                    </div>

                    <div class="flex-grow w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black; margin-top: 5px;">
                        <router-link v-if="user" to="/RecargarSaldo">Recargar Saldo
                        </router-link>
                    </div>
                    <div class="flex-grow w-full md:bg-black font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black; margin-top: 5px;">
                        <router-link v-if="user" to="/historialCompras">Ver Historial
                        </router-link>
                    </div>

                    <div class="flex-grow w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black; margin-top: 5px;">
                        <router-link v-if="user" to="/cambiarContrasena">Cambiar Contraseña
                        </router-link>
                    </div>

                    <button v-if="user"
                        class="flex-grow md:w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black; margin-top: 5px;" @click="logout">
                        Eliminar Cuenta
                    </button>

                </div>
            </div>

        </div>

        <div style="width: -webkit-fill-available;">
            <div class="bg-gray-100 mx-auto sm:w-96 w-60 bg-white shadow-xl fluid-container">

                <div class="offcanvas-body flex-grow p-4"
                    style="text-align: center; margin-bottom: 2rem; background-color: #def2f1; border: 2px solid rgb(20 184 166);">

                    <div>
                        <h1 class="sm:text-6xl text-2xl">Noticias</h1>
                    </div>

                    <div class="mr-10 col-span-2 mt-6 gap-y-10 gap-x-6 grid grid-rows-3">
                        <div v-for="libro in books" v-bind:key="libro.id"
                            class="max-w-sm bg-white border border-teal-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 scroll-mr-5">
                            <div
                                class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <router-link class="basis-1/4 box-content h-5 text-black"
                                    v-bind:to="`/Book/${libro.id}`">
                                    <img v-bind:src="libro.img" alt="Front of men&#039;s Basic Tee in black."
                                        class="h-full w-full object-cover object-center">
                                </router-link>
                            </div>
                            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 decoration-double"></div>
                            <div class="mt-4">
                                <div class="ml-3">
                                    <router-link class="basis-1/4 box-content h-5 text-black"
                                        v-bind:to="`/Book/${libro.id}`">
                                        <div
                                            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {{ libro.name }}
                                        </div>
                                        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {{ libro.editorial }}
                                        </div>
                                        <div
                                            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {{ libro.price }}
                                        </div>

                                    </router-link>
                                </div>
                                <p class="text-sm font-medium text-gray-900">{{ libro.precio }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import snackBar from "@/components/snackBar.vue";
const moneda = new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',minimumFractionDigits:0});
export default {
    name: "navBar",
    components:
      {},
    methods: {
        logout: async function (e) {
            console.log(e);
            const request = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                mode: "cors",
                credentials: 'include'
            };
            var data = await fetch("https://api.eltintero.co/loggout", request)

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
            "moneda":moneda,
            "tiendas": [{ "nombre": "tienda 1", "lugar": "lugar 1", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
            { "nombre": "tienda 2", "lugar": "lugar 2", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
            { "nombre": "tienda 3", "lugar": "lugar 3", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
            { "nombre": "tienda 4", "lugar": "lugar 4", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },],
            busqueda: '',
            books: [],
            stores: []
        }
    },
};
</script>
