app.component('recipe-category-button',{
    props:{
        name:{
            type: String
        }
    },
    data(){
        return{
            counter: 0
        }
    },
    methods: {
        onClickCategoryButton(){
            console.log(this.name);
            this.$emit('selectedcategory', this.name);
        }
    },
    template:
    /*html*/
    `<button class="btn btn-dark mt-5 ms-5" v-on:click="onClickCategoryButton">{{ name }}</button>`
})
