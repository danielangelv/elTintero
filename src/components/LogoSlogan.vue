<template>
    <div class="container hidden md:block">
        <div class="text-center items-center content-center">
            <img class="max-w-200-px mx-auto" :src="logo" alt="Logo"><br />
            <h1 class="text-center font-bold">¡Que leer sea como empezar una nueva aventura!</h1>
        </div>
    </div>
</template>
<script>
import logo from "@/assets/logo.png";
export default {
    name: "LogoSlogan",
    data() {
        return {
            logo,
        }
    }
}
</script>