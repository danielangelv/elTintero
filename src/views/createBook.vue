<template>
    <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-5 px-5 lg:px-10 shadow-xl mb-10 bg-white">
        <h1>Crear Libro</h1>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="m-2">
                <h2>Sinopsis</h2>
                <textarea v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="sinopsis"
                    class="w-full"></textarea>
                <span v-else>{{ sinopsis }}</span>
                <h3 class="my-2">caracteristicas</h3>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Año de edicion</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="date" type="date"
                        max="2022/12/31" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" />
                    <span v-else>{{ date }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">ISXN</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="isxn" type="text"
                        class="w-full" v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="9786287525573" />
                    <span v-else>{{ isxn }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Idioma</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="language"
                        type="text" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="Español" />
                    <span v-else>{{ language }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Num Paginas</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="num_pag"
                        type="number" min="1" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="592" />
                    <span v-else>{{ num_pag }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1" style="padding-bottom:1vh;">
                    <label for="">Peso</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="weight"
                        type="number" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="610" />
                    <span v-else>{{ weight }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Tamaño</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="size" type="text"
                        class="w-full" v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="15 x 24 cm" />
                    <span v-else>{{ size }}</span>
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Acabado</label>
                    <input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="acabado"
                        type="text" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="Tapa Rústica" />
                    <span v-else>{{ acabado }}</span>
                </div>
                <FormTopics ref="topic_ref" v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))">
                </FormTopics>
            </div>

            <div class="m-2">
                <h2>Portada</h2>
                <input v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')" type="file"
                    id="seleccionArchivos" accept="image/*" @change="subir_img">
                <img id="imagenPrevisualizacion" style="padding-top:2vh; padding-bottom:2vh;">
            </div>

            <div class="m-2">
                <div class="grid grid-cols-2" style="padding-bottom:1vh;">
                    <label>Nombre</label><input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        v-model="nombre" class="w-full" type="text"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="El caso de Alaska Sanders" />
                    <span v-else>{{ acabado }}</span>
                </div>
                <div class="grid grid-cols-2" style="padding-bottom:1vh;">
                    <label>Autor</label><input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        v-model="autor" type="text" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="Joël Dicker" />
                    <span v-else>{{ autor}}</span>
                </div>
                <div class="grid grid-cols-2" style="padding-bottom:1vh;">
                    <label>Editorial</label><input v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        v-model="editorial" type="text" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="Penguin Random House" />
                    <span v-else>{{ editorial }}</span>
                </div>
                <div class="grid grid-cols-2" style="padding-bottom:1vh;">
                    <label>Precio en pesos</label><input
                        v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="price" type="text"
                        class="w-full" v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="79.000" />
                    <span v-else>{{ price }}</span>
                </div>
                <div class="grid grid-cols-2" style="padding-bottom:1vh" v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))">
                    <label>Ingrese la cantidad de libros disponibles:</label><input
                        v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" v-model="number"
                        type="number" min="1" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        placeholder="5" />
                    <span v-else>{{ acabado }}</span>
                </div>
                <div class="grid grid-cols-2" style="padding-bottom:1vh;" v-if="(this.user && this.user.auth_helper.includes('BUY_BOOK'))">
                    <label>Ingrese unidades a comprar:</label><input
                        v-if="(this.user && this.user.auth_helper.includes('BUY_BOOK'))" v-model="number"
                        type="number" min="1" class="w-full"
                        v-bind:disabled="!(this.user && this.user.auth_helper.includes('BUY_BOOK'))"
                        placeholder="5" />
                    <span v-else>{{ acabado }}</span>
                </div>
                <div class="justify-center text-center items-center content-center space-y-4 space-x-4">
                    <button v-if="(this.user && this.user.auth_helper.includes('BUY_BOOK'))"
                        class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black;" @click="comprar">Comprar</button>

                    <button v-if="(this.user && this.user.auth_helper.includes('BUY_BOOK'))"
                        class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #14b8a6; color:black;" @click="reservar">Reservar</button>

                    <button v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))"
                        class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                        style="background-color: #ff2d00; color:black;" @click="eliminar">Eliminar</button>
                </div>
                <div class="justify-center text-center items-center content-center space-y-4 space-x-4">
                    <input v-if="!user" class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full m-5 comprar"
                    style="background-color: #14b8a6; color:black" type="button" onclick="alert('Por favor inicia sesión o registrate para comprar')" value="Comprar">
                    <input v-if="!user" class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full m-5 comprar"
                    style="background-color: #14b8a6; color:black" type="button" onclick="alert('Por favor inicia sesión o registrate para reservar el libro')" value="Reservar">
                </div>
            </div>
        </div>
        <div v-if="(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))" class="justify-center text-center items-center content-center">
            <button v-if="$route.params.id "
                class="font-bold py-3 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                style="background-color: #14b8a6; color:black;" @click="actualizar">Actualizar</button>
            <button v-else
                class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                style="background-color: #14b8a6; color:black;" @click="crear">Crear</button>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <label for="">Idioma</label>
          <input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="language"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          />
          <span v-else>{{ language }}</span>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <label for="">Num Paginas</label>
          <input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="num_pag"
            type="number"
            min="1"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          />
          <span v-else>{{ num - pag }}</span>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <label for="">Peso</label
          ><input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="weight"
            type="number"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ weight }}</span>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <label for="">Tamaño</label>
          <input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="size"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          />
          <span v-else>{{ size }}</span>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <label for="">Acabado</label>
          <input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="acabado"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          />
          <span v-else>{{ acabado }}</span>
        </div>
        <FormTopics
          ref="topic_ref"
          v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
        ></FormTopics>
      </div>
      <div>
        <h3 v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')">
          portada
        </h3>
        <input
          v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
          type="file"
          id="seleccionArchivos"
          accept="image/*"
          @change="subir_img"
        />
        <img id="imagenPrevisualizacion" />
      </div>
      <div>
        <div class="grid grid-cols-2">
          <label>Nombre</label
          ><input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="nombre"
            class="w-full"
            type="text"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ acabado }}</span>
        </div>
        <div class="grid grid-cols-2">
          <label>Autor</label
          ><input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="autor"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ acabado }}</span>
        </div>
        <div class="grid grid-cols-2">
          <label>Editorial</label
          ><input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="editorial"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ acabado }}</span>
        </div>
        <div class="grid grid-cols-2">
          <label>Precio en pesos</label
          ><input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="price"
            type="text"
            class="w-full"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ acabado }}</span>
        </div>
        <div class="grid grid-cols-2">
          <label>Ingrese la cantidad de libros disponibles:</label>
          <input
            v-if="this.user && this.user.auth_helper.includes('CRUD_BOOKS')"
            v-model="number"
            type="number"
            min="1"
            v-bind:disabled="
              !(this.user && this.user.auth_helper.includes('CRUD_BOOKS'))
            "
          /><span v-else>{{ acabado }}</span>
        </div>
      </div>
    </div>
    <div class="text-center items-center content-center">
      <button
        v-if="$route.params.id"
        class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
        style="background-color: #14b8a6; color: black"
        @click="actualizar"
      >
        Actualizar
      </button>
      <button
        v-else
        class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
        style="background-color: #14b8a6; color: black"
        @click="crear"
      >
        Crear
      </button>
    </div>
  </div>
</template>

<script>

import snackBar from "@/components/snackBar.vue";
import FormTopics from "@/components/formTopics.vue";
export default {
    components: {
        FormTopics
    },
    data() {
        return {
            "sinopsis": "",
            "isxn": "",
            "autor": "",
            "nombre": "",
            "editorial": "",
            "date": "",
            "language": "",
            "num_pag": "",
            "size": "",
            "acabado": "",
            "number": 0,
            "price": "",
            "weight": 0,
            "id": "",
            "user": JSON.parse(localStorage.getItem('userInFormation'))
        };
    },
    async created() {
        if (this.$route.params.id) {
            let response = await fetch(`${this.backend_host}/book/${this.$route.params.id}`)
            if (response.status === 200 || response.status === 201) {
                const answer = await response.json();
                this.id = answer.book.id
                this.price = answer.book.price
                this.nombre = answer.book.name
                this.editorial = answer.book.editorial
                this.number = answer.book.quantity
                this.acabado = answer.book.acabado
                this.size = answer.book.size
                this.isxn = answer.book.isxn
                this.sinopsis = answer.book.sinopsis
                this.date = answer.book.publication_date
                this.autor = answer.book.autor
                this.num_pag = answer.book.number_pages
                this.language = answer.book.idioma
                this.weight = answer.book.weight
                console.log(answer)
                const imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
                imagenPrevisualizacion.src = answer.book.img

            }
            else {
                snackBar.showSnackBar("No se pudo crear el libro, intenta nuevamente")
            }
        }
    },
    methods: {


        subir_img: function (e) {
            console.log(e);
            const seleccionArchivos = document.querySelector("#seleccionArchivos");
            const imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
            const archivos = seleccionArchivos.files;
            if (!archivos || !archivos.length) {
                imagenPrevisualizacion.src = "";
                return;
            }
            const primerArchivo = archivos[0];
            const objectURL = URL.createObjectURL(primerArchivo);
            imagenPrevisualizacion.src = objectURL;
        },
        read_file: async function() {
            return new Promise((resolve, reject) => {
                const seleccionArchivos = document.querySelector("#seleccionArchivos");
                const reader = new FileReader();
                reader.readAsDataURL(seleccionArchivos.files[0]);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },
        crear: async function (e) {
            console.log(e);
            let data = {
                "sinopsis": this.sinopsis,
                "isxn": this.isxn,
                "autor": this.autor,
                "name": this.nombre,
                "editorial": this.editorial,
                "date": this.date,
                "language": this.language,
                "num_pag": this.num_pag,
                "size": this.size,
                "acabado": this.acabado,
                "number": this.number,
                "price": this.price.toString(),
                "topics": this.$refs.topic_ref.choseen_topics,
                "image":await this.read_file(),
                "weight":this.weight
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
                mode: "cors",
                body: JSON.stringify(data),
                credentials: 'include'
            };
            let response = await fetch(`${this.backend_host}/book/create`, requestOptions)
            if (response.status === 200 || response.status === 201) {
                await response.json();
                snackBar.showSnackBar("libro creado existosamente");
                setTimeout(function () {
                    window.location = '/';
                }, 1000);
            } else {
                snackBar.showSnackBar("No se pudo crear el libro");
            }
        },
        actualizar: async function(){
            const imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
            let data = {
                "sinopsis": this.sinopsis,
                "isxn": this.isxn,
                "autor": this.autor,
                "name": this.nombre,
                "editorial": this.editorial,
                "date": this.date,
                "language": this.language,
                "num_pag": this.num_pag,
                "size": this.size,
                "acabado": this.acabado,
                "number": this.number,
                "price": this.price.toString(),
                "topics": this.$refs.topic_ref.choseen_topics,
                "image": imagenPrevisualizacion.src,
                "weight": parseInt(this.weight),
            }
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
                mode: "cors",
                body: JSON.stringify(data),
                credentials: 'include'
            };
            let response = await fetch(`${this.backend_host}/book/update/${this.$route.params.id}`, requestOptions)
            if (response.status === 200 || response.status === 201) {
                await response.json();
                snackBar.showSnackBar("Libro actualizado existosamente");
                setTimeout(function () {
                    window.location = '/';
                }, 1000);}
            else {
                snackBar.showSnackBar("No se pudo crear el libro, intenta nuevamente");
            }
        },
        eliminar: async function(e) {
            console.log(e);
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": '*', "Access-Control-Expose-Headers": '*' },
                mode: "cors",
                credentials: 'include'
            };
            let response = await fetch(`${this.backend_host}/book/delete/${this.$route.params.id}`, requestOptions)
            if (response.status === 200 || response.status === 201) {
                await response.json();
                snackBar.showSnackBar("Libro eliminado existosamente");
                setTimeout(function () {
                    window.location = '/';
                }, 1000);}
            else {
                snackBar.showSnackBar("No se pudo eliminar el libro, intenta nuevamente");
            }
        },
        comprar: function(e){
            if(e){
                e.preventDefault();
            }
            var carrito = JSON.parse(localStorage.getItem("carrito"));
            if(!carrito){
                carrito = [];
            }
            var newItem = { "producto": this.name, "valor_unitario": this.price, "unidades": this.number, "valor_total": (this.price * this.number),"total_pago":this.price};
            carrito.push(newItem);
            localStorage.setItem("carrito",JSON.stringify(carrito));
            snackBar.showSnackBar("libro añadido al carrito de compras existosamente");
            setTimeout(function () {
                        window.location = '/CarritoCompras';
                    }, 1000);
            }
    }
}
</script>

<style>
h2 {
    font-size: 2rem;
    color: black;
    font-family: 'Abhaya Libre', serif;
}

#boxCrearLibro {
  color: black;
  background-color: white;
}

label {
    font-family: 'Roboto Mono', monospace;
}

[type='file'] {

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
