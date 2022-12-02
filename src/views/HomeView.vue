<template>
  <div class="home bg-slate-100">
    <div class="grid grid-rows-1 bg-gradient-to-r from-teal-300 to-teal-500 h-48 w-full">
      <div class="grid grid-rows-3">
        <div
          class="font-serif text-2xl font-bold text-gray-800 underline underline-offset-8 place-self-center">
          EL TINTERO</div>
        <div class="font-serif text-sm text-gray-800 mx-auto">¡Que leer sea como empezar una nueva aventura!
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6">
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
          </div><br/>
          <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" v-bind:src="`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${encodeURIComponent(tienda.direccion)}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"></iframe>
        </div>
      </div>
      <div class="mr-10 col-span-2 mt-6 gap-y-10 gap-x-6 grid grid-cols-3">
        <div v-for="libro in books" v-bind:key="libro.id"
          class="max-w-sm bg-white border border-teal-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 scroll-mr-5">
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
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
        "tiendas": [{ "nombre": "El Tintero CO", "lugar": "", "direccion": "Pereira, Risaralda - Carrera 7 # 17 20", "contacto": "333 3333", "horario": "lunes-sábado 10am - 11pm" },
        { "nombre": "tienda 2", "lugar": "lugar 2", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
        { "nombre": "tienda 3", "lugar": "lugar 3", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },
        { "nombre": "tienda 4", "lugar": "lugar 4", "direccion": "carrera2", "contacto": "1234", "horario": "lunes-marte" },],
        busqueda: '',
        books: [],
        stores: []
      }
    },
    async created() {
      var user = JSON.parse(localStorage.getItem('userInFormation'));
      if(!user || (user && !user.auth_helper.includes('CREATE_ADMIN_USER'))){
        let response = await fetch(`${this.backend_host}/book`)
        if (response.status === 200 || response.status === 201) {
          const answer = await response.json();
          this.books = answer.books
          console.log(answer)
        }
        else {
          alert("No se pudo crear, intente nuevamente")
        }
      }
      else{
        window.location = "/createAdmi"
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
