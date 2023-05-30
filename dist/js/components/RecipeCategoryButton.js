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
    
    `
    
    <button type="button" class="btn filter-button filter-style"  v-on:click="onClickCategoryButton">{{ name }}</button>
    
    
    `
})
