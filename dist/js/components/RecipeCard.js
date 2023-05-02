app.component('recipe-card',{
    props:{
        image:{
            type: String
        },
        category:{
            type: String,
            default: "default category"
        },
        name:{
            type: String,
            default: "default name"
        },
        description:{
            type: String,
            default: "default description"
        },
        time:{
            type: String,
            default: "default time"
        },
        level:{
            type: String,
            default: "default level"
        },
        likes:{
            type: Number,
            default: 1
        },
        index:{
            type: Number
        }
    },
    mounted(){
        this.recipe_likes = this.likes;
    },
    methods:{
        onClickLike(){
            console.log("LIKE");
            this.$emit('recipelike', this.index);
        },
        onClickUnlike(){
            console.log("UNLIKE");
            this.$emit('recipeunlike', this.index);
        },
        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
        }
    },
    template:
    /*html*/
    `<div class="card p-3">
        <img v-bind:src="image" class="card-img-top rounded" alt="featured recipe">
            <div class="card-body p-0">
                <p class="mt-2">{{ category }}</p>
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <p>{{ time }}</p>
                <p>{{ level }}</p>
                <p>{{ likes }}</p>
                <button class="btn btn-danger" v-on:click="onClickLike()">Like</button>
                <button class="btn btn-success" v-on:click="onClickUnlike()">Unlike</button>
                <button class="btn btn-primary" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
            </div>
    </div>`
})