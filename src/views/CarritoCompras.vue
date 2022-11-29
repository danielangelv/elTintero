<template>
    <div class="bg-white">
        <h1 class="font-serif text-2xl font-bold text-gray-800 underline underline-offset-8 place-self-center ">Carrito
            de compra</h1>
        <div class="grid grid-rows-1">
            <div
                class="grid grid-cols-5 mb-2 text-xl font-bold tracking-tight text-gray-900 underline underline-offset-8 ml-8 mt-6 ">
                <p>Producto</p>
                <p>Valor unitario</p>
                <p>Unidades</p>
                <p>VALOR TOTAL</p>
            </div>
        </div>
        <div class="grid grid-cols-1 ">
            <div class="grid grid-rows-1 divide-y divide-teal-500">
                <div v-for="compra in compras" v-bind:key="compra.fecha" class="grid grid-cols-5 ">
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ compra.producto }}</span>
                    </div>
                    <div class="bg-white  px-8 pt-6 pb-8 mb-4">
                        <span>{{ moneda.format(compra.valor_unitario) }}</span>
                    </div>
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span >{{ compra.unidades }}</span>
                    </div>
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ moneda.format(compra.valor_total) }}</span>
                    </div>
                    
                    <button class="font-bold text-red-600" @click="(e) => eliminar(e,compra.producto)">Eliminar Libro</button>
                    
                </div>
                <div>
                </div>
            </div>
        </div>
        <br/>
        <h3 class="font-bold ">TOTAL CARRITO: {{moneda.format(totalCarrito)}}</h3>
        <hr>
        <hr>
        <hr>
        <button class="bg-red-700 font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full" @click="vaciarCarrito">VACIAR CARRITO</button>
        <button class="bg-teal-500 font-bold py-2 px-4 border-b-4 hover:border-b-4 border-gray-500 hover:border-black rounded-full">COMPRAR</button>
    </div>


</template>
<script>
var carrito = localStorage.getItem("carrito");
const moneda = new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',minimumFractionDigits:2});
if(!carrito){
    carrito = []
}
else{
    carrito = JSON.parse(carrito);
}
var totalCarrito = 0;
carrito.map((item) =>{
totalCarrito+=Number(item.valor_total);
})
export default {
    data() {
        return {
            "compras": carrito,
            "moneda":moneda,
            "totalCarrito": totalCarrito

        };
    },
    methods:{
        eliminar:function(e,id){
            if(e){
                e.preventDefault();
            }
            var carrito = JSON.parse(localStorage.getItem("carrito"));
            if(!carrito){
            return;
        }
        else{
            //ACA TOCA BUSCAR EL PRODUCTO
            var index = carrito.findIndex((el) => el.producto == id);
            carrito.splice(index,1);
            carrito = JSON.stringify(carrito);
            localStorage.setItem("carrito",carrito);
            window.location = '/CarritoCompras';
        }
        },
        vaciarCarrito: function(e){
            if(e){
                e.preventDefault();
            }
            var carrito = JSON.parse(localStorage.getItem("carrito"));
        if(!carrito){
            return;
        }
        else{
            carrito = JSON.stringify([]);
            localStorage.setItem("carrito",carrito);
            window.location = '/CarritoCompras';
        }
        }
    }
    
}
</script>