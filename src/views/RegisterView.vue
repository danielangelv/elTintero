<template>
  <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10">
    <div class="relative rounded-xl overflow-auto p-3">
      <img src="../assets/logo.png" class="text-center rounded-lg overflow-hidden w-56 sm:w-20 mx-auto">
    </div>
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Nombre completo*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black;" id="company" type="text" placeholder="Ej: Pepito Perez Marques">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="iden">
              Identificación*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="iden" type="number" placeholder="Ej: 1088559554">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Usuario*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black;" id="company" type="text" placeholder="Ej: pepito_perez1">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Email*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="title" type="email" placeholder="Ej: pepito@eltintero.com">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="tel">
              Número de teléfono*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black;" id="tel" type="number" name="tel" min="300" placeholder="Ej: 311585984">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Dirección de correspondencia*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="title" type="text" placeholder="Ej: Carrera 11 #23-11">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="myDate">
              Fecha de nacimiento*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black;" type="date" name="myDate" min="1900-01-01" max="2030-01-01" step="7" id="myDate" placeholder="Ej: 01/01/2000">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Lugar de nacimiento*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="title" type="text" placeholder="Ej: Pereira/Risaralda">
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="myDate">
              Género*
            </label>
            <div>
              <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="title" type="text" placeholder="Ej: Masculino">
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Temas literarios de preferencia*
            </label>
            <div>
              <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1" style="color:black" id="title" type="text" placeholder="Ej: Suspenso">
                <option>Aventuras</option>
                <option>Ciencia Ficción</option>
                <option>Terror y misterio</option>
                <option>Romántica</option>
                <option>Mitología</option>
              </select>
            </div>
            <div>
              <span class="text-red-500 text-xs italic">
                Campo obligatorio.
              </span>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3 text-center">
            <button class=" md:w-full font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" style="background-color: #14b8a6; color:black;">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!--<script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
	</script>-->
</template>


<script>
export default {
  data() {
    return {
      user: "",
      name: "",
      id: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      malingAddress: "",
      birthDate: "",
      birthPlace: "",
      gender: "",
      topcis: ""
    };
  }
}
</script>
