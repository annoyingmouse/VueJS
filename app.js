const vm1Data = {
    "title": "The VueJS Instance",
    "showParagraph": false
};

const vm1 = new Vue({
    "el": "#app1",
    "data": vm1Data,
    "methods": {
        show(){
            this.showParagraph = true;
            this.updateTitle("The VueJS Instance (Updated)");
            console.log(this.$refs);
            this.$refs.myButton.innerText = "Test";
        },
        updateTitle(title){
            this.title = title;
        }
    },
    "computed":{
        lowercaseTitle(){
            return this.title.toLowerCase();
        }
    },
    "watch":{
        title(value){
            alert(`Title changed, new value: ${value}`);
        }
    }
});

console.log(vm1.$data === vm1Data);

vm1.$refs.heading.innerText = "something else";

setTimeout(() => {
    vm1.title = "Changed by timer";
    vm1.show();
    }, 3000);

const vm2 = new Vue({
    "el": "#app2",
    "data": {
        "title": "The second Instance"
    },
    "methods":{
        "onChange": () => vm1.title = "Changed"
    }
});