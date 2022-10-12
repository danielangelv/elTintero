<template>
  <div>
    
    <div id="boxRegisLogo">
      <img id="regLogo" class="mx-auto" src="../assets/logo.png" alt="Logo"><br/>
    </div>
    
    <form id="boxRegis" class="container">
      <div>
        <h1>Registrate</h1>
      </div>
      <div class="row">
        <div class="col">
          <label for="Name" class="form-label">Nombre Completo</label>
          <input type="text" class="form-control" id="Name" />
        </div>

        <div class="col">
          <label for="Identificacion" class="form-label">Identificacion</label>
          <input type="text" class="form-control" id="Identificacion" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="User" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="User" />
        </div>
        <div class="col">
          <label for="Email" class="form-label">Email</label>
          <input type="email" class="form-control" id="Email" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="PhoneNumber" class="form-label">Numero de Telefono</label>
          <input type="text" class="form-control" id="PhoneNumber" />
        </div>

        <div class="col">
          <label for="MailingAddress" class="form-label">Dirección de Correspondencia</label>
          <input type="text" class="form-control" id="MailingAddress" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="BirthDate" class="form-label">Fecha de Nacimiento</label>
          <input type="date" class="form-control" id="BirthDate" />
        </div>

        <div class="col">
          <label class="form-check-label" for="BirthPlace">Lugar de Nacimiento</label
          >
          <input type="text" class="form-control" id="BirthPlace"/>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label class="form-check-label" for="Gender">Genero</label>
          <input type="text" class="form-control" id="Gender" />
        </div>
        <div class="col">
          <label class="form-check-label" for="Topics">Temas literarios de preferencia</label>
          <input type="text" class="form-control" id="Topics" />
        </div>
      </div>
      <div id="btonRegis" class="text-center mt-6">
        <button class="text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style="background-color: rgb(20 184 166)" @click="login">
          Registrate
        </button>
      </div>
    </form>

  </div><br><br><br>
</template>

<script>
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
  border-bottom: 2px solid #3aafa9;
  margin-bottom: 2rem;
}
#boxRegisLogo
{
  width: 100%;
  background-color: #3aafa9;
}

#boxRegis
{
  width: 800px;
  border: 2px solid #3aafa9;
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
    border-color: #3aafa9;
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