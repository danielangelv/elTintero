<template>
    <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10 bg-white">
        <div class="grid grid-cols-2 bg-gray-100 bg-white gap-3" >
            <img src="../assets/logo.png" class="bg-center h-45 mr-10 sm:h-45" alt="Flowbite Logo" />
            <div class="grid grid-rows-4 px-5 border border-teal-500">
                <div class="place-self-center text-xl block uppercase text-blueGray-600 font-bold mb-2 ">
                    <label>¿OLVIDASTE TU CONTRASEÑA?</label>
                </div>
                <div class="grid grid-cols-1 px-5 w-80 place-self-center">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">EMAIL: </label>
                    <input type="text"><hr>
                </div>
                <button class="place-self-center w-48 h-16 font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" style="background-color: #14b8a6; color:black;">Recuperar contraseña</button>
                <RouterLink to="/Login" class="place-self-center text-black w-40 text-center">
                    <small>Olvidalo. La he encontrado</small>
                </RouterLink>
            </div>
        </div>
    </div>
</template>