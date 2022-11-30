<template>
    <div>
      <NewCard/>
    </div>
</template>
<script>
import NewCard from "@/components/NewCard.vue";
export default {
    name: "NuevaTarjeta",
    components:
      {NewCard},
    data() {
        return {
            "user": JSON.parse(localStorage.getItem('userInFormation')),
        }
    },
};
</script>
