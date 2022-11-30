<template>
    <div class="contenedor">
      <!-- Formulario -->
      <form @submit="recargar" id="formulario-tarjeta" class="formulario-tarjeta active">
        <div class="grupo">
          <label for="selectTarjeta">Selecciona Tu Tarjeta</label>
          <div class="grupo-select">
            <select name="selectTarjeta" id="selectTarjeta" v-for="tarjeta in tarjetas" v-bind:key="tarjeta.numero">
              <option>**** **** **** {{tarjeta.numero.substr(15,19)}}</option>
            </select>
            <i class="fas fa-angle-down"></i>
          </div>
        </div><br/>
        <div class="grupo">
          <label for="inputSaldo">$ SALDO</label>
          <input type="text" id="inputSaldo" maxlength="10">
        </div>
        <button type="submit" class="btn-enviar">RECARGAR</button><br/><br/>
          <button class="btn-enviar" @click="nuevaTarjeta">
            <span class="fa-plus"></span>
            NUEVA TARJETA
          </button>
      </form>
    </div>
</template>
<script>
  import snackBar from "@/components/snackBar.vue";
export default {
    name: "RecargarSaldo",
    components:
      {},
    methods: {
        recargar: function (e) {
          if(e){
            e.preventDefault();
          }
          var formulario = document.querySelector('#formulario-tarjeta');
          if (formulario.inputSaldo == null || formulario.inputSaldo.value == null || formulario.inputSaldo.value.length < 3) {
            return snackBar.showSnackBar("¡Ingresa un saldo válido!");
          }
          if (formulario.selectTarjeta == null || formulario.selectTarjeta.value == null || formulario.selectTarjeta.value.length < 3) {
            return snackBar.showSnackBar("¡Selecciona una tarjeta para continuar!");
          }
          var user = JSON.parse(localStorage.getItem('userInFormation'));
          var recargas = user.recargas ? user.recargas : [];
          var saldoUser = user.saldo ? Number(user.saldo) : 0;
          recargas.push({"tarjeta":formulario.selectTarjeta.value, "saldo": formulario.inputSaldo.value});
          user = {...user,['recargas']:recargas,['saldo']:saldoUser+Number(formulario.inputSaldo.value) };
          localStorage.setItem("userInFormation",JSON.stringify(user));
          snackBar.showSnackBar("¡Recarga Exitosa!");
          setTimeout(function () {
              window.location = '/ProfileView';
          }, 1000);
        },
        nuevaTarjeta:function (e){
          if(e){
            e.preventDefault();
          }
          window.location = "/NuevaTarjeta";
        }
    },
    async created() {
      var user = JSON.parse(localStorage.getItem('userInFormation'));
      if(user.tarjetas == null || user.tarjetas.length < 1){
        window.location = "/NuevaTarjeta";
      }
    },
    data() {
        var user = JSON.parse(localStorage.getItem('userInFormation'));
        return {
            "user": user,
            "tarjetas": user.tarjetas
        }
    },
};
</script>
<style>
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}

.contenedor {
width: 90%;
max-width: 1000px;
padding: 40px 20px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
}

.formulario-tarjeta {
width: 100%;
max-width: 700px;
padding: 150px 30px 30px 30px;
border-radius: 10px;
position: relative;
top: -150px;
z-index: 1;
clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
transition: clip-path .3s ease-out;
}

.formulario-tarjeta.active {
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.formulario-tarjeta label {
display: block;
color: black;
margin-bottom: 5px;
font-size: 16px;
}

.formulario-tarjeta input,
.formulario-tarjeta select,
.btn-enviar {
border: 2px solid #CED6E0;
font-size: 18px;
height: 50px;
width: 100%;
padding: 5px 12px;
transition: .3s ease all;
border-radius: 5px;
}

.formulario-tarjeta input:hover,
.formulario-tarjeta select:hover {
border: 2px solid #93BDED;
}

.formulario-tarjeta input:focus,
.formulario-tarjeta select:focus {
outline: rgb(4,4,4);
box-shadow: 1px 7px 10px -5px rgba(90,116,148,0.3);
}

.formulario-tarjeta input {
margin-bottom: 20px;
text-transform: uppercase;
}

.formulario-tarjeta .flexbox {
display: flex;
justify-content: space-between;
}

.formulario-tarjeta .expira {
width: 100%;
}

.formulario-tarjeta .ccv {
min-width: 100px;
}

.formulario-tarjeta .grupo-select {
width: 100%;
margin-right: 15px;
position: relative;
}

.formulario-tarjeta select {
-webkit-appearance: none;
}

.formulario-tarjeta .grupo-select i {
position: absolute;
color: #CED6E0;
top: 18px;
right: 15px;
transition: .3s ease all;
}

.formulario-tarjeta .grupo-select:hover i {
color: #93bfed;
}

.formulario-tarjeta .btn-enviar {
border: none;
padding: 10px;
font-size: 22px;
color: #fff;
background: #2364d2;
box-shadow: 2px 2px 10px 0px rgba(0,85,212,0.4);
cursor: pointer;
}

.formulario-tarjeta .btn-enviar:hover {
background: #1850b1;
}

  </style>
