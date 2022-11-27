<template>
  <div class="home bg-slate-100">
    <div class="grid grid-rows-1 bg-gradient-to-r from-teal-300 to-teal-500 h-48 w-full">
      <div class="grid grid-rows-3">
        <div
          class="font-serif text-2xl font-bold text-gray-800 underline underline-offset-8 place-self-center">
          EL TINTERO</div>
        <div class="font-serif text-sm text-gray-800 mx-auto">¡Que leer sea como empezar una nueva aventura!
        </div>
        <div class="flex justify-center">
          <div class="mb-3">
            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input type="search"
                class="form-control relative flex-auto min-w-0 block w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none"
                v-model='busqueda' placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
              <button
                class="btn inline-block px-6 py-2.5 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div class="grid grid-rows-1 mt-6 gap-y-10 gap-x-6">
        <div v-for="tienda in tiendas" v-bind:key="tienda.nombre" class="block max-w-sm p-6 bg-white border border-teal-500 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
          <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span>{{ tienda.nombre }}</span>
          </div>
          <div class="font-normal text-gray-700 dark:text-gray-400">
            <span>{{ tienda.contacto }}</span>
          </div>
          <div class="font-normal text-gray-700 dark:text-gray-400">
            <span>{{ tienda.horario }}</span>
          </div>
          <div class="font-normal text-gray-700 dark:text-gray-400">
            <span>{{ tienda.direccion }}</span>
          </div>
        </div>
      </div>
      <div class="mr-10 col-span-2 mt-6 gap-y-10 gap-x-6 grid grid-cols-3">
        <div v-for="libro in books" v-bind:key="libro.id"
          class="max-w-sm bg-white border border-teal-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 scroll-mr-5">
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <router-link class="basis-1/4 box-content h-5 text-black" v-bind:to="`/Book/${libro.id}`">
              <img v-bind:src="libro.img" alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center">
            </router-link>
          </div>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 decoration-double"></div>
          <div class="mt-4">
            <div class="ml-3">
              <router-link class="basis-1/4 box-content h-5 text-black" v-bind:to="`/Book/${libro.id}`">
                <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ libro.name }}
                </div>
                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {{ libro.editorial }}
                </div>
                <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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


</template>

<script>

/*import LogoSlogan from "@/components/LogoSlogan.vue"*/

export default
  {
    components:
      {},
    data() {
      return {
        "tiendas": [{ "nombre": "tienda 1", "lugar": "lugar 1", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
        { "nombre": "tienda 2", "lugar": "lugar 2", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
        { "nombre": "tienda 3", "lugar": "lugar 3", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
        { "nombre": "tienda 4", "lugar": "lugar 4", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },],
        busqueda: '',
        books: [],
        stores: []
      }
    },
    async created() {
      let response = await fetch('http://localhost:5000/book')
      if (response.status === 200 || response.status === 201) {
        const answer = await response.json();
        this.books = answer.books
        console.log(answer)
      }
      else {
        alert("No se pudo crear, intente nuevamente")
      }
    }

  };
</script>
<style>

#regLogo {
  height: 200px;
}

h1 {
  text-align: center;
  font-size: 4rem;
  color: black;
}
</style>