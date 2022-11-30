<template>
  <div class="contenedor">
    <!-- Tarjeta -->
    <section class="tarjeta" id="tarjeta">
      <div class="delantera">
        <div style="align-self: self-end;" class="logo-marca" id="logo-marca">
          <!-- <img src="img/logos/visa.png" alt=""> -->
        </div>
        <div style="display:flex;">
          <img :src="imgChip" class="chip" alt="">
          <img :src="imgContacless" class="chip" alt="">
        </div>
        <div class="datos">
          <div class="grupo" id="numero">
            <p class="label">Número</p>
            <p class="numero">#### #### #### ####</p>
          </div>
          <div class="flexbox">
            <div class="grupo" id="nombre">
              <p class="label">Nombre</p>
              <p class="nombre">Jhon Doe</p>
            </div>

            <div class="grupo" id="expiracion">
              <p class="label">Vencimiento</p>
              <p class="expiracion"><span class="mes">MM</span> / <span class="year">AA</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="trasera">
        <div class="barra-magnetica"></div>
        <div class="datos">
          <div class="grupo" id="firma">
            <p class="label">Firma</p>
            <div class="firma"><p></p></div>
          </div>
          <div class="grupo" id="ccv">
            <p class="label">CCV</p>
            <p class="ccv"></p>
          </div>
        </div>
        <p class="leyenda">Al ingresar mi información en este formulario, autorizo que mi información sea tratada de acuerdo a las politicas de privacidad de la página.</p>
        <a href="#" class="link-banco">eltintero.co</a>
      </div>
    </section>
    <br/>
    <!-- Formulario -->
    <form @submit="nuevaTarjeta" id="formulario-tarjeta" class="formulario-tarjeta active">
      <div class="grupo">
        <label for="inputNumero">Número Tarjeta</label>
        <input type="text" id="inputNumero" maxlength="19" autocomplete="off">
      </div>
      <div class="grupo">
        <label for="inputNombre">Nombre</label>
        <input type="text" id="inputNombre" maxlength="19" autocomplete="off">
      </div>
      <div class="flexbox">
        <div class="grupo expira">
          <label for="selectMes">Vencimiento</label>
          <div class="flexbox">
            <div class="grupo-select">
              <select name="mes" id="selectMes">
                <option disabled selected>Mes</option>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
            <div class="grupo-select">
              <select name="year" id="selectYear">
                <option disabled selected>Año</option>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
          </div>
        </div>

        <div class="grupo ccv">
          <label for="inputCCV">CCV</label>
          <input type="text" id="inputCCV" maxlength="3">
        </div>
      </div>
      <button type="submit" class="btn-enviar">Adicionar</button>
    </form>
  </div>
</template>

<script>
  import imgChip from '@/assets/chip-tarjeta.png';
  import imgContacless from '@/assets/contacless-tarjeta.png';
  import imgVisa from '@/assets/visa.png';
  import imgMastercard from '@/assets/mastercard.png';
  import snackBar from "@/components/snackBar.vue";
  var tarjeta = null,
  formulario = null,
  numeroTarjeta = null,
  nombreTarjeta = null,
  logoMarca = null,
  firma = null,
  mesExpiracion = null,
  yearExpiracion = null,
  ccv = null;
export default {
    name: "NewCard",
    methods: {
        mostrarFrente: function (tarjeta){
          if(tarjeta.classList.contains('active')){
            tarjeta.classList.remove('active');
          }
        },
        nuevaTarjeta: async function (e) {
          if (e) {
            e.preventDefault();
          }
          var user = JSON.parse(localStorage.getItem('userInFormation'));
          var formulario = document.querySelector('#formulario-tarjeta');
          if (formulario != null) {
            console.log(formulario);
            if(formulario.inputNumero == null || formulario.inputNumero.value == null || formulario.inputNumero.value.length != 19 ){
              return snackBar.showSnackBar("¡Ingresa un número de tarjeta válido!");
            }
            if(formulario.inputNombre == null || formulario.inputNombre.value == null || formulario.inputNombre.value.length < 1 ){
              return snackBar.showSnackBar("¡Ingresa un nombre válido!");
            }
            if(formulario.selectMes == null || formulario.selectMes.value == null){
              return snackBar.showSnackBar("¡Ingresa un mes de tarjeta válido!");
            }
            if(formulario.selectYear == null || formulario.selectYear.value == null){
              return snackBar.showSnackBar("¡Ingresa un año de tarjeta válido!");
            }
            if(formulario.inputCCV == null || formulario.inputCCV.value == null || formulario.inputCCV.value.length != 3 ){
              return snackBar.showSnackBar("¡Ingresa un CCV válido!");
            }
            var tarjeta = {
              "nombre":formulario.inputNombre.value,
              "numero":formulario.inputNumero.value,
              "ccv":formulario.inputCCV.value,
              "mes":formulario.selectMes.value,
              "anio":formulario.selectYear.value,
            }
            var tarjetas = user.tarjetas ? user.tarjetas : [];
            tarjetas.push(tarjeta);
            user = {...user,['tarjetas']:tarjetas};
            localStorage.setItem("userInFormation",JSON.stringify(user));
          }
          else {
            snackBar.showSnackBar("¡Ingresa la información!")
            return;
          }
          snackBar.showSnackBar("¡Tarjeta Adicionada!")
          setTimeout(function () {
              window.location = '/RecargarSaldo';
          }, 1000);
        }
    },
    async mounted() {
        tarjeta = document.querySelector('#tarjeta'),
        formulario = document.querySelector('#formulario-tarjeta'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector('#tarjeta .firma p'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccv = document.querySelector('#tarjeta .ccv');

      // * Volteamos la tarjeta para mostrar el frente.

      // * Rotacion de la tarjeta
      tarjeta.addEventListener('click', () => {
      tarjeta.classList.toggle('active');
      });


      // * Select del mes generado dinamicamente.
      for(let i = 1; i <= 12; i++){
      let opcion = document.createElement('option');
      opcion.value = i;
      opcion.innerText = i;
      formulario.selectMes.appendChild(opcion);
      }

      // * Select del año generado dinamicamente.
      const yearActual = new Date().getFullYear();
      for(let i = yearActual; i <= yearActual + 8; i++){
      let opcion = document.createElement('option');
      opcion.value = i;
      opcion.innerText = i;
      formulario.selectYear.appendChild(opcion);
      }

      // * Input numero de tarjeta
      formulario.inputNumero.addEventListener('keyup', (e) => {
      let valorInput = e.target.value;

      formulario.inputNumero.value = valorInput
      // Eliminamos espacios en blanco
      .replace(/\s/g, '')
      // Eliminar las letras
      .replace(/\D/g, '')
      // Ponemos espacio cada cuatro numeros
      .replace(/([0-9]{4})/g, '$1 ')
      // Elimina el ultimo espaciado
      .trim();

      numeroTarjeta.textContent = valorInput;

      if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
      }

      if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = imgVisa;
        logoMarca.appendChild(imagen);
      } else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = imgMastercard;
        logoMarca.appendChild(imagen);
      }

      // Volteamos la tarjeta para que el usuario vea el frente.
      this.mostrarFrente(tarjeta);
      });

      // * Input nombre de tarjeta
      formulario.inputNombre.addEventListener('keyup', (e) => {
      let valorInput = e.target.value;

      formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
      nombreTarjeta.textContent = valorInput;
      firma.textContent = valorInput;

      if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
      }

      this.mostrarFrente(tarjeta);
      });

      // * Select mes
      formulario.selectMes.addEventListener('change', (e) => {
      mesExpiracion.textContent = e.target.value;
      this.mostrarFrente(tarjeta);
      });

      // * Select Año
      formulario.selectYear.addEventListener('change', (e) => {
      yearExpiracion.textContent = e.target.value.slice(2);
      this.mostrarFrente(tarjeta);
      });

      // * CCV
      formulario.inputCCV.addEventListener('keyup', () => {

      if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
      }

      formulario.inputCCV.value = formulario.inputCCV.value
      // Eliminar los espacios
      .replace(/\s/g, '')
      // Eliminar las letras
      .replace(/\D/g, '');

      ccv.textContent = formulario.inputCCV.value;
      });
    },
    data() {
        return {
          imgChip,
          imgContacless,
            "user": JSON.parse(localStorage.getItem('userInFormation')),
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

/* ---------- Estilos Generales de las Tarjetas ----------*/
.tarjeta {
	width: 100%;
	max-width: 550px;
	position: relative;
	color: #fff;
	transition: .3s ease all;
	transform: rotateY(0deg);
	transform-style: preserve-3d;
	cursor: pointer;
	z-index: 2;
}

.tarjeta.active {
	transform: rotateY(180deg);
}

.tarjeta > div {
	padding: 30px;
	border-radius: 15px;
	min-height: 315px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 10px 10px 0 rgba(90,116,148,0.3);
}

/* ---------- Tarjeta Delantera ----------*/

.tarjeta .delantera {
	width: 100%;
	background: url(@/assets/bg-tarjeta-06.jpg);
  filter: drop-shadow(2px 4px 6px black);
	background-size: cover;
}

.delantera .logo-marca {
	text-align: right;
	min-height: 50px;
  filter: drop-shadow(2px 4px 6px black);
}

.delantera .logo-marca img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	max-width: 80px;
}

.delantera .chip {
	width: 100%;
	max-width: 50px;
	margin-bottom: 20px;
}

.delantera .grupo .label {
	font-size: 16px;
	color: grey;
	margin-bottom: 5px;
}

.delantera .grupo .numero,
.delantera .grupo .nombre,
.delantera .grupo .expiracion {
	color: white;
	font-size: 22px;
	text-transform: uppercase;
}

.delantera .flexbox {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}

/* ---------- Tarjeta Trasera ----------*/
.trasera {
	background: url(@/assets/bg-tarjeta-04.jpg);
  filter: drop-shadow(2px 4px 6px black);
	background-size: cover;
	position: absolute;
	top: 0;
	transform: rotateY(180deg);
	backface-visibility: hidden;
}

.trasera .barra-magnetica {
	height: 40px;
	background: #000;
	width: 100%;
	position: absolute;
	top: 30px;
	left: 0;
}

.trasera .datos {
	margin-top: 60px;
	display: flex;
	justify-content: space-between;
}

.trasera .datos p {
	margin-bottom: 5px;
}

.trasera .datos #firma {
	width: 70%;
  color: black
}

.trasera .datos #firma .firma {
	height: 40px;
	background: repeating-linear-gradient(lightgreen 0, lightgreen 5px, orange 5px, orange 10px);
}

.trasera .datos #firma .firma p {
	line-height: 40px;
	font-family: 'Liu Jian Mao Cao', cursive;
	color: #000;
	font-size: 30px;
	padding: 0 10px;
	text-transform: capitalize;
}

.trasera .datos #ccv {
	width: 20%;
  color: black;
}

.trasera .datos #ccv .ccv {
	background: #fff;
	height: 40px;
	color: #000;
	padding: 10px;
	text-align: center;
}

.trasera .leyenda {
	font-size: 14px;
	line-height: 24px;
  color: black
}

.trasera .link-banco {
	font-size: 14px;
	color: gray;
}

/* ---------- Contenedor Boton ----------*/
.contenedor-btn .btn-abrir-formulario {
	width: 50px;
	height: 50px;
	font-size: 20px;
	line-height: 20px;
	background: #2364d2;
	color: #fff;
	position: relative;
	top: -25px;
	z-index: 3;
	border-radius: 100%;
	box-shadow: -5px 4px 8px rgba(24,56,182,0.4);
	padding: 5px;
	transition: all .2s ease;
	border: none;
	cursor: pointer;
}

.contenedor-btn .btn-abrir-formulario:hover {
	background: #1850b1;
}

.contenedor-btn .btn-abrir-formulario.active {
	transform: rotate(45deg);
}

/* ---------- Formulario Tarjeta ----------*/
.formulario-tarjeta {
	background: #fff;
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
	color: #7d8994;
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
