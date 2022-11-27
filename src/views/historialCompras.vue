<template>
    <div class="bg-white">
        <h1 class="font-serif text-2xl font-bold text-gray-800 underline underline-offset-8 place-self-center ">Historial de Compras</h1>
        <div class="grid grid-rows-1">
            <div class="grid grid-cols-5 mb-2 text-xl font-bold tracking-tight text-gray-900 underline underline-offset-8 ml-8 mt-6 ">
                <p>Fecha</p>
                <p>Nombre del libro</p>
                <p>Estado</p>
                <p>Novedades</p>
                <p>Valor</p>
            </div>
        </div>
        <div class="grid grid-cols-1 ">
            <div class="grid grid-rows-1 divide-y divide-teal-500">
                <div v-for="historial in historiales" v-bind:key="historial.fecha" class="grid grid-cols-5 ">
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ historial.fecha }}</span>
                    </div>
                    <div class="bg-white  px-8 pt-6 pb-8 mb-4">
                        <span>{{ historial.nombre }}</span>
                    </div>
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ historial.Estado }}</span>
                    </div>
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ historial.Novedades }}</span>
                    </div>
                    <div class="bg-white px-8 pt-6 pb-8 mb-4">
                        <span>{{ historial.Valor }}</span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            "historiales": [{ "fecha": "11/10/2022", "nombre": "El caso de Alaska Sanders", "Estado": "Comprado", "Novedades": "cambio", "Valor": "75.000" },
            { "fecha": "11/10/2022", "nombre": "Cien años de Soledad", "Estado": "Comprado", "Novedades": "ninguna", "Valor": "75.000" }],

        };
    },
}
</script>