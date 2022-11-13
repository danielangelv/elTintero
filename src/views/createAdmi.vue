<template>
    <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10 bg-white">
        <h1>Administradores</h1>
        <div class="grid grid-cols-2 bg-gray-100 bg-white gap-3" >
            <div class="grid grid-rows-3 px-5 border border-teal-500">
                <div class="place-self-center text-xl">
                    <label>NUEVO ADMINISTRADOR</label>
                </div>
                <div>
                    <div class="grid grid-cols-1 px-5">
                        <label>Email: </label>
                        <input type="text"><hr>
                    </div>
                    
                    <div class="grid grid-cols-auto px-5">
                        <label>Nombre: </label>
                        <input type="text"><hr>
                    </div>
                </div>
                <button class="place-self-center w-24 h-12 font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" style="background-color: #14b8a6; color:black;">enviar</button>
            </div>

            <div class="grid grid-cols-1 border border-teal-500 ">
                <div v-for="admin in admins" v-bind:key="admin.name" >
                    <div class="lg:w-5/6 w-full lg:pr-3 mx-4 my-4 bg-gray-200 rounded-xl p-6">
                        <span>{{ admin.name }}</span>
                        <button class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" style="background-color: #14b8a6; color:black;">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            "admins":[{"name":"admin1"},{"name":"admin3"},{"name":"admin2"}],
            "user": JSON.parse(localStorage.getItem('userInFormation'))
        };
    },}
</script>