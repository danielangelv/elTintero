<template>
    <div class="bg-white">
        <h1>Crear Libro</h1>
        <div class="grid grid-cols-3 gap-4">
            <div>
                <h3>Sinopsis</h3>
                <textarea v-model="sinopsis" class="w-full"></textarea>
                <h3 class="my-2">caracteristicas</h3>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Año de edicion</label>
                    <input v-model="date" type="date" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Tipo</label>
                    <input v-model="type" type="text" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">ISXN</label>
                    <input v-model="isxn" type="text" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Idioma</label>
                    <input v-model="language" type="text" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Num Paginas</label>
                    <input v-model="num_pag" type="number" min="1" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1"><label for="">Peso</label><input type="text" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Tamaño</label>
                    <input v-model="size" type="text" class="w-full" />
                </div>
                <div class="grid grid-cols-2 gap-1">
                    <label for="">Acabado</label>
                    <input v-model="acabado" type="text" class="w-full" />
                </div>
                <FormTopics></FormTopics>
            </div>
            <div>
                <h3>portada</h3>
                <input type="file" id="seleccionArchivos" accept="image/*" @change="subir_img">
                <img id="imagenPrevisualizacion">
            </div>
            <div>
                <div class="grid grid-cols-2">
                    <label>Nombre</label><input v-model="nombre" class ="w-full" type="text" />
                </div>
                <div class="grid grid-cols-2">
                    <label>Autor</label><input v-model="autor" type="text" class ="w-full"/>
                </div>
                <div class="grid grid-cols-2">
                    <label>Editorial</label><input v-model="editorial" type="text" class ="w-full"/>
                </div>
                <div class="grid grid-cols-2">
                    <label>Precio en pesos</label><input v-model="price" type="text" class ="w-full" />
                </div>
                <div class="grid grid-cols-4">
                    <label>Ingrese la cantidad de libros disponibles:</label>
                    <button @click="sum">+</button>
                    <input v-model="number" type="number" min="1">
                    <button @click="sum">-</button>
                </div>
            </div>
        </div>
        <div class="text-center items-center content-center">
            <button
                class="font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full"
                style="background-color: #14b8a6; color:black;">Crear</button>
        </div>

    </div>
</template>

<script>
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
            "price": ""
        };
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
        sum: function (e) {
            console.log(e)
            this.number = this.number + 1
        },
        minus: function (e) {
            console.log(e)
            this.number = this.number - 1
        },
        crear: function (e) {
            console.log(e)
        }
    }
}

</script>

<style>
#boxCrearLibro {
    color: black;
    background-color: white;
}
</style>