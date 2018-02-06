<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p v-once.click="'Hello World'">Hello World</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            "once":{
                bind(el, binding, vnode){
                    if(binding.modifiers["click"]){
                        el.addEventListener("click", function(){
                            console.log(binding.value);
                        });
                    }
                }
            }
        }
    }
</script>

<style>

</style>
