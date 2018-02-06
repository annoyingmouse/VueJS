<template>
    <div>
        <h1>Filters &amp; Mixins</h1>
        <hr>
        <input v-model="filterText" type="text">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from "./FruitMixin.js";
    export default {
        mixins:[fruitMixin]
    }
</script>

<style>

</style>
