<template>
    <div>
        <h1>Server status: {{ status }}</h1>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        "data": () => ({"status": "Critical"}),
        "methods": {
            changeStatus(){
                this.status = "Normal"
            }
        }
    }
</script>

<style scoped>

</style>