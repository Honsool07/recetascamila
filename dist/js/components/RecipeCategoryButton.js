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
    
    `<div class="container">
    <button class="btn btn-dark mt-3 ms-3" v-on:click="onClickCategoryButton">{{ name }}</button>
    </div>`
})
