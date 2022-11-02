<template>
    <div>
        <label v-bind:class="generic_labels_styles">
            Temas literarios de preferencia*
        </label>
        <ul class="items-center w-full text-sm font-medium rounded-lg sm:flex flex-wrap"
            style="background-color: #def2f1; border: 1px solid rgb(20 184 166);">
            <li v-for="topic in allowed_topics" v-bind:key="topic"
                class=" border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 domain_checkbox">
                <div class="flex items-center p-3 w-full">
                    <input v-model="choseen_topics" v-bind:id="topic" type="checkbox" v-bind:value="topic"
                        class="text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label v-bind:for="topic" class=" w-full text-sm font-medium text-gray-900 dark:text-gray">{{
                            topic
                    }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "FormTopics",
    expose:["choseen_topics"],
    data() {
        return {
            allowed_topics: ["Mitología", "Aventuras", "Ciencia Ficción", "Terror y Misterio", "Romántica"],
            choseen_topics: []
        }
    }
}
</script>