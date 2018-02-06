<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text<strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight="'red'">Colour This</p>
                <p v-highlight:background.dalayed="'red'">Or Colour This</p>
                <p v-local-highlight:background.dalayed.blink="'red'">Colour This, Too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            "local-highlight":{
                bind(el, binding, vnode){
                    let delay = 0;
                    if(binding.modifiers["dalayed"]){
                        delay = 3000;
                    }
                    if(binding.modifiers["blink"]){
                        let mainColour = binding.value;
                        let secondColour = "blue";
                        let currentColour = mainColour;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColour === secondColour ? currentColour = mainColour: currentColour = secondColour;
                                if(binding.arg === "background"){
                                    el.style.backgroundColor = currentColour;
                                }else{
                                    el.style.color = currentColour;
                                }
                            }, 1000);

                        }, delay);
                    } else {
                        setTimeout(() => {
                            if(binding.arg === "background"){
                                el.style.backgroundColor = binding.value;
                            }else{
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
