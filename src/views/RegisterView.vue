<template>
  <div class="border-solid border-lime-400 border-2 m-10 bg-white">
    <h1>Registrate</h1>
    <hr />
    <div class="grid grid-cols-2 gap-4">
      <div class="grid grid-rows-2 p-2">
        <label for="Name" >Nombre Completo: </label>
        <input type="text" class="w-full" id="Name" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="Identificacion" >Identificacion</label>
        <input type="text" class="w-full" id="Identificacion" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="User" >Nombre de Usuario</label>
        <input type="text" class="w-full" id="User" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="Clave">Contraseña</label>
        <input type="password" class="w-full" id="Clave" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="Email" >Email</label>
        <input type="email" class="w-full" id="Email" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="PhoneNumber" >Numero de Telefono</label>
        <input type="text" class="w-full" id="PhoneNumber" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="MailingAddress" >Dirección de Correspondencia</label>
        <input type="text" class="w-full" id="MailingAddress" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label for="BirthDate" >Fecha de Nacimiento</label>
        <input type="date" class="w-full" id="BirthDate" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <label  for="BirthPlace">Lugar de Nacimiento</label>
        <input type="text" class="w-full" id="BirthPlace" />
      </div>
      <div class="grid grid-rows-2 p-2">
        <p for="Gender">Genero</p>
        <div class="grid grid-cols-3 p-2">
          <div>
            <input type="radio" value="masculino" id="radio-masculino" name="genero" />
            <label for="radio-masculino">Masculino</label>
          </div>
          <div>
            <input type="radio" value="femenino" id="radio-femenino" name="genero" />
            <label for="radio-femenino">Femenino</label>
          </div>
          <div>
            <input type="radio" value="otro" id="radio-otro" name="genero"/>
            <label for="radio-otro">Otro</label>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-rows-2 p-2">
      <p for="Gender">Generos literarios de su preferencia</p>
      <div class="grid grid-cols-4">
        <div>
          <input type="checkbox" value="otro" id="checkbox-1" name="genero" />
          <label for="checkbox">Otro</label>
        </div>
        <div>
          <input type="checkbox" value="otro" id="checkbox-1" name="genero" />
          <label for="checkbox">Otro</label>
        </div>
        <div>
          <input type="checkbox" value="otro" id="checkbox-1" name="genero" />
          <label for="checkbox">Otro</label>
        </div>
        <div>
          <input type="checkbox" value="otro" id="checkbox-1" name="genero" />
          <label for="checkbox">Otro</label>
        </div>
      </div>
    </div>
    <div id="btonRegis" class="text-center mt-6">
      <button
        class="text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        style="background-color: rgb(20 184 166)" @click="login">
        Registrate
      </button>
    </div>
  </div>
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

<style>
#regLogo {
  height: 9vw !important;
}

h1 {
  text-align: center;
  font-size: 2em !important;
  color: black;
  font-family: 'Abhaya Libre', serif;
  border-bottom: 2px solid rgb(20 184 166);
  margin-bottom: 2rem;
}

input [type='text'],
[type='email'],
[type='url'],
[type='password'],
[type='number'],
[type='date'],
[type='datetime-local'],
[type='month'],
[type='search'],
[type='tel'],
[type='time'],
[type='week'],
[multiple]{
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