<template>
    <div class="flex sm:flex-row flex-col" style="place-content: center space-between; align-items: center;">
        <div style="width: -webkit-fill-available;">
            <div class="bg-gray-100 mx-auto sm:w-96 w-60 bg-white shadow-xl fluid-container">

                <div class="offcanvas-body flex-grow p-4"
                    style="text-align: center; margin-bottom: 2rem; background-color: #def2f1; border: 2px solid rgb(20 184 166);">

                    <div style="margin-bottom: 2rem; border: 2px solid rgb(20 184 166);">
                        <div class="flex items-center justify-center p-4">
                            <i class="fa-solid fa-user sm:fa-10x fa-6x justify-center py-2"
                                id="offcanvasExampleLabel"></i>
                        </div>

                        <div>
                            Pepito perez
                        </div>

                        <div v-if="user" class="offcanvas-body flex-grow p-4">{{ user.name }}</div>
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

                    <div >
                        <h1 class="sm:text-6xl text-2xl">Noticias</h1>
                    </div>

                    <h2>Libro 1</h2>
                    <h2>Libro 2</h2>

                </div>
            </div>

        </div>

    </div>
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