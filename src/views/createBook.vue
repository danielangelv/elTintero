<template>

    <form id="boxCrearLibro" class="container">
        <div>
            <h1>Crear Libro</h1>
        </div>
        <div id="interBox" class="row">
        <div class="col-md-4">
            <label for="Sinopsis" class="form-label">Escribe la sinopsis del Libro</label>
            <input type="text" placeholder="Sinopsis del libro..." class="form-control" id="Sinopsis" />
        </div>

        <h2>CARACTETISTICAS</h2>
        <div id="caracteristicas" class="col-md-5">
            <label for="AñoEdicion" class="form-label col-md-6">Ingresa el año de edición:</label>
            <input type="number" placeholder="Ej: 2022" class="form-control" id="AñoEdicion" />
        </div>
        <div id="caracteristicas" class="col-md-5">
            <label for="Tipo" class="form-label col-md-4">Ingresa el tipo:</label>
            <input type="text" placeholder="Ej: Libro" class="form-control" id="Tipo" />
        </div>
        <div id="caracteristicas" class="col-md-5">
            <label for="Autor" class="form-label col-md-4">Ingresa el autor:</label>
            <input type="text" placeholder="Ej: Joël Dicker" class="form-control" id="Autor" />
        </div>
        <div id="caracteristicas" class="col-md-6">
            <label for="ISXN" class="form-label col-md-3">Ingresa el ISXN:</label>
            <input type="text" placeholder="Ej: 9786287525573" class="form-control" id="ISXN" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="idioma" class="form-label col-md-3">Ingresa el idioma:</label>
            <input type="text" placeholder="Ej: Español" class="form-control" id="idioma" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="NumPaginas" class="form-label col-md-5">Ingresa el número de paginas:</label>
            <input type="text" placeholder="Ej: 592" class="form-control" id="NumPaginas" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="Peso" class="form-label col-md-4">Ingresa el peso (Fisico):</label>
            <input type="text" placeholder="Ej: 610" class="form-control" id="Peso" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="Tamaño" class="form-label col-md-5">Ingresa el tamaño (Fisico):</label>
            <input type="text" placeholder="Ej: 15 x 24 cm" class="form-control" id="Tamaño" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="Acabado" class="form-label col-md-5">Ingresa el acabado (Fisico):</label>
            <input type="text" placeholder="Ej: Tapa Rústica" class="form-control" id="Acabado" />
        </div>
        <div id="caracteristicas" class="col-md-7">
            <label for="Titulo" class="form-label col-md-3">Ingresa el titulo:</label>
            <input type="text" placeholder="Ej: El caso de Alaska Sanders" class="form-control" id="Titulo" />
        </div>
      </div>
    </form>



</template>

<style>

#boxCrearLibro
{
    color: black;
    background-color: white;
}

#AñoEdicion
{
    border: none;
}

h1
{
  text-align: center;
  font-size: 2em !important;
  color: black;
  font-family: 'Abhaya Libre', serif;
  border-bottom: 2px solid rgb(20 184 166);
  margin-bottom: 2rem;
}

h2
{
    padding-top: 40px;
    padding-bottom: 0px;
}

[type='text']
{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #ffffff;
    border: none;
    font-weight:1000;
}

#interBox
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
    flex-direction: column;

}

#caracteristicas
{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
}

</style>