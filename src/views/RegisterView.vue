<template>
  <div>
    <LogoSlogan/>
    <h1>Registrate</h1>
    <form clas="container">
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
          <label for="MailingAddress" class="form-label"
            >Dirección de Correspondencia</label
          >
          <input type="text" class="form-control" id="MailingAddress" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="BirthDate" class="form-label">Fecha de Nacimiento</label>
          <input type="date" class="form-control" id="BirthDate" />
        </div>
        <div class="col">
          <label class="form-check-label" for="BirthPlace"
            >Lugar de Nacimiento</label
          >
          <input type="text" class="form-control" id="BirthPlace" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-check-label" for="Gender">Genero</label>
          <input type="text" class="form-control" id="Gender" />
        </div>
        <div class="col">
          <label class="form-check-label" for="Topics"
            >Temas literarios de preferencia</label
          >
          <input type="text" class="form-control" id="Topics" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
// @ is an alias to /src
import LogoSlogan from "@/components/LogoSlogan.vue"

export default {
  components: {
    LogoSlogan
  },
};
</script>