<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="firstName">First name</label>
                <input
                        type="text"
                        id="firstName"
                        class="form-control"
                        v-model="userData.fullName">
            </div>
            <div class="form-group">
                <label for="lastName">Last name</label>
                <input
                        type="text"
                        id="lastName"
                        class="form-control"
                        v-model="userData.fullName">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "full-name",
        props: ["value"],
    }
</script>

<style scoped>

</style>