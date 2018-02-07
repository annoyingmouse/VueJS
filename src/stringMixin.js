export const stringMixin = {
    computed:{
        lettersReversed(){
            return this.text.split("").reverse().join("");
        },
        lengthString() {
            return this.text + " (" + this.text.length + ")";
        }
    }
};