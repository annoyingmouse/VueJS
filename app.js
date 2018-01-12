const vm1Data = {
    "title": "The VueJS Instance",
    "showParagraph": false
};

const vm1 = new Vue({
    "data": vm1Data,
    "methods": {
        show() {
            this.showParagraph = true;
            this.updateTitle("The VueJS Instance (Updated)");
            console.log(this.$refs);
            this.$refs.myButton.innerText = "Test";
        },
        updateTitle(title) {
            this.title = title;
        }
    },
    "computed": {
        lowercaseTitle() {
            return this.title.toLowerCase();
        }
    },
    "watch": {
        title(value) {
            alert(`Title changed, new value: ${value}`);
        }
    }
});
vm1.$mount("#app1"); // Mounting element in the DOM, useful if it's not there yet...

console.log(vm1.$data === vm1Data);

vm1.$refs.heading.innerText = "something else";

// setTimeout(() => {
//     vm1.title = "Changed by timer";
//     vm1.show();
// }, 3000);

const vm2 = new Vue({
    "el": "#app2",
    "data": {
        "title": "The second Instance"
    },
    "methods": {
        "onChange": () => vm1.title = "Changed"
    }
});

const vm3 = new Vue({
    "template": "<h1>Hello</h1>"
});
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);



setTimeout(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "app4");
    document.body.appendChild(div);
}, 2000);

const vm4 = new Vue({
    "template": "<h1>Delayed</h1>"
});
vm4.$mount();

setTimeout(() => document.getElementById("app4").appendChild(vm4.$el), 5000);

