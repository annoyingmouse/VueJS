<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/shared/Header";
    import Footer from "./components/shared/Footer";
    import Servers from "./components/Server/Servers";
    import ServerDetails from "./components/Server/ServerDetails";

    export default {
        components: {
            appHeader: Header, // VueJS will automatically convert appHeader to app-header
            Servers, // As long as we use the same name we can do it like this too - ES6 makes this a key:value pair in the background
            "app-server-details": ServerDetails,
            "app-footer": Footer
        }
    }
</script>

<style>

</style>


