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
    `
        <div class='card-row card shadow p-0.5 mb-5 bg-body rounded'>
            <img v-bind:src="image" class="card-img rounded float-start" alt="featured recipe">
            <div class="card-body p-0">
                <p class="mt-2 ms-2 badge bg-secondary">{{ category }}</p><a
                    href="userPage.html">
                    <i class="m-guardar fa-solid fa-bookmark fa-lg"></i>
                </a>
    
                <h5 class="ms-2 card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <p class="ms-2 data-card">{{ time }}</p>
                <p class="ms-2 data-card">{{ level }}</p>
                <p class="ms-2 data-card">{{ likes }}</p>
                <button class="btn like-btn">Like</button>
                <button class="btn unlike-btn">Unlike</button>
                <button class="btn recipecrd-btn" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Ver
                    Receta</button>
    
    
            </div>
        </div>
   `
})
