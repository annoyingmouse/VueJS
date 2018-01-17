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
            appHeader: Header,
            Servers,
            appServerDetails: ServerDetails,
            appFooter: Footer
        }
    }
</script>

<style>

</style>


