<template>

    <div id="boxCrearLibro" class="container_crearLibro">

        <div class="crear_libro">
            <h1>Crear Libro</h1>

        </div>

        <div class="row  pl-3">

            <div>
                <label for="Sinopsis" class="form-label">Sinopsis: </label><br>
                <input type="text" placeholder="Sinopsis del libro..." class="text-xs" id="Sinopsis" />
                <div>
                </div>
                <h2>CARACTETISTICAS</h2>

                <div id="caracteristicas">
                    <label for="AñoEdicion">Ingresa el año de edición:</label>
                    <input type="number" placeholder="Ej: 2022" class="text-xs" id="AñoEdicion" />
                </div>

                <div id="caracteristicas">
                    <label for="Tipo">Ingresa el tipo:</label>
                    <input type="text" placeholder="Ej: Libro" class="text-xs" id="Tipo" />
                </div>

                <div id="caracteristicas">
                    <label for="Autor">Ingresa el autor:</label>
                    <input type="text" placeholder="Ej: Joël Dicker" class="text-xs" id="Autor" />
                </div>

                <div id="caracteristicas">
                    <label for="ISXN">Ingresa el ISXN:</label>
                    <input type="text" placeholder="Ej: 9786287525573" class="text-xs" id="ISXN" />
                </div>

                <div id="caracteristicas">
                    <label for="idioma">Ingresa el idioma:</label>
                    <input type="text" placeholder="Ej: Español" class="text-xs" id="idioma" />
                </div>

                <div id="caracteristicas">
                    <label for="NumPaginas">Ingresa el número de paginas:</label>
                    <input type="text" placeholder="Ej: 592" class="text-xs" id="NumPaginas" />
                </div>

                <div id="caracteristicas">
                    <label for="Peso">Ingresa el peso (Fisico):</label>
                    <input type="text" placeholder="Ej: 610" class="text-xs" id="Peso" />
                </div>

                <div id="caracteristicas">
                    <label for="Tamaño">Ingresa el tamaño (Fisico):</label>
                    <input type="text" placeholder="Ej: 15 x 24 cm" class="text-xs" id="Tamaño" />
                </div>

                <div id="caracteristicas">
                    <label for="Acabado">Ingresa el acabado (Fisico):</label>
                    <input type="text" placeholder="Ej: Tapa Rústica" class="text-xs" id="Acabado" />
                </div>

                <div id="caracteristicas">
                    <label for="Titulo">Ingresa el titulo:</label>
                    <input type="text" placeholder="Ej: El caso de Alaska Sanders" class="text-xs" id="Titulo" />
                </div>

            </div>

        </div>

        <div class="subir_img  pl-5">
            <label for="Sinopsis" class="form-label">Portada: </label><br><br>
            <input type="file" id="seleccionArchivos" accept="image/*" @change="subir_img">
            <br><br>
            <img id="imagenPrevisualizacion">

        </div>

        <div class="row_end  pl-5">
            <div>
                <label for="Titulo">Titulo:</label>
                <input type="text" class="form-control" id="Titulo" />
            </div>
            <br><br>
            <div>
                <label for="Editorial">Editorial:</label>
                <input type="text" class="form-control" id="Editorial" /><br>
            </div>
            <br><br>
            <div>
                <label for="Autor">Ingresa el autor:</label>
                <input type="text" placeholder="Ej: Joël Dicker" class="form-control" id="Autor" /><br>
            </div>
            <br><br>
            <div>
                <form action="/action_page.php">
                    <label for="quantity">Ingresa la cantidad de libros disponibles: </label><br>
                    <input type="number" id="quantity" name="quantity" min="0" max="20">
                </form>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    methods: {
        subir_img: function (e) {
            console.log (e);
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
        }
    }
}

</script>

<style>
#boxCrearLibro {
    color: black;
    background-color: white;
}

.container_crearLibro {
    display: grid;

}

.container_crearLibro div {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
}

.crear_libro {
    grid-column: 1 / span 3;
}

.row {
    grid-column: 1 / span 1;
    grid-row: 2 / span 2;
}

.ubir_img {
    grid-column: 2 / span 1;
    grid-row: 2 / span 2;
}

.row_end {
    grid-column: 3 / span 1;
    grid-row: 2 / span 2;
}

/*#boxCrearLibro {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}*/
</style>