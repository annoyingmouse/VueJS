<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <server-status v-for="index in 5" :key="index"></server-status>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import ServerStatus from "./ServerStatus"
    export default {
        components: {
            "server-status": ServerStatus
        }
    }
</script>

<style scoped>

</style>