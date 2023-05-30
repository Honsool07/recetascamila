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
    
    <button type="button" class="btn btn-primary" v-on:click="onClickCategoryButton">{{ name }}</button>
    
    
    </div>`
})
