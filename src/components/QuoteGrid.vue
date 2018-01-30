<template>
    <dir class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </dir>
</template>

<script>
    import Quote from "./Quote.vue"
    export default {
        "name": "quote-grid",
        "props": ["quotes"],
        "components": {
            "appQuote": Quote
        },
        "methods": {
            deleteQuote(index){
                this.$emit("quoteDeleted", index);
            }
        }
    }
</script>

<style scoped>

</style>