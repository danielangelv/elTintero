<template>
  <div class="home">
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Libros</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="libro in books" v-bind:key="libro.id" class="group relative">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img v-bind:src="libro.img" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    {{ libro.name }}-{{ libro.editorial }}
                  </a>
                </h3>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ libro.precio }}</p>
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
  data () {
  return {
    books: []
    }
  },
  async created(){
    let response = await fetch("http://localhost:5000/book")
    if (response.status === 200 || response.status === 201) {
      const answer = await response.json();
      this.books = answer.books
      console.log(answer)
    }
    else {
      alert("No se pudo crear el libro intente nuevamente")
    }
  }
};
</script>
<style>

#regLogo
{
  height: 200px;
}

h1
{
  text-align: center;
  font-size: 4rem;
  color: black;
  font-family: 'Abhaya Libre', serif;
  border-bottom: 2px solid rgb(20 184 166);
  margin-bottom: 2rem;
}
#boxRegisLogo
{
  width: 100%;
  background-color: rgb(20 184 166);
}

#boxRegis
{
  width: 800px;
  border: 2px solid rgb(20 184 166);
  justify-content: center;
}

.row 
{
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;
  color: black;
  
}

[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select {
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
