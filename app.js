new Vue({
    "el": "#app",
    "data": {
        "title": "The VueJS Instance"
    },
    "beforeCreate": () => console.log("beforeCreate()"),
    "created": () => console.log("created()"),
    "beforeMount": () => console.log("beforeMount()"),
    "mounted": () => console.log("mounted()"),
    "beforeUpdate": () => console.log("beforeUpdate()"),
    "updated": () => console.log("updated()"),
    "beforeDestroy": () => console.log("beforeDestroy()"),
    "destroyed": () => console.log("destroyed() - now unable to change the title with the button..."),
    "methods": {
        changeTitle() {
            this.title = `Changed + ${this.randomIntFromInterval(1, 3)}`
        },
        destroy() {
            this.$destroy();
        },
        "randomIntFromInterval": (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    }
});