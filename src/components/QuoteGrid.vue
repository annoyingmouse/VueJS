<template>
    <dir class="row">
        <app-quote v-for="quote in quotes">{{quote}}</app-quote>
    </dir>
</template>

<script>
    import Quote from "./Quote.vue"
    export default {
        "name": "quote-grid",
        "props": ["quotes"],
        components: {
            "appQuote": Quote
        }
    }
</script>

<style scoped>

</style>