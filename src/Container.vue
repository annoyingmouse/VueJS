<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-content></app-content>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./Header"
    import Content from "./Content"
    import Footer from "./Footer"
    export default {
        components: {
            "app-header": Header,
            "app-content": Content,
            "app-footer": Footer
        }
    }
</script>

<style scoped>

</style>