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
            default: "20 min"
        },
        level:{
            type: String,
            default: "Easy"
        },
        likes:{
            type: Number,
            default: 0
        },
        index:{
            type: Number
        }
    },
    mounted(){
      this.$test.on('foo', function(data){
        console.log(data)
      })  
    },
    data() {
        return {
          localLikes: 0,
          
        };
        
    },
    methods:{

        onClickSaveRecipe(){
            console.log("VIEW");
            this.$emit('saverecipes', this.index);
        },
       
        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
        },

        onClickRecipeLike(){
            
            this.localLikes += 1;
            //this.$emit(recipelike, this.index);
        },

        onClickRecipeUnlike(){
            
            this.localLikes -= 1;
            //this.$emit(recipelike, this.index);
        },
    },
    template:
    /*html*/
    `
        <div class='card-row card shadow p-0.5 mb-5 bg-body rounded'>
            <img v-bind:src="image" class="card-img rounded float-start" alt="featured recipe">
            <div class="card-body p-0">
                <p class="mt-2 ms-2 badge bg-secondary">{{ category }}</p>
               
                <button  class="btn like-btn" v-on:click="onClickSaveRecipe()">Guardar</button>
                
    
                <h5 class="ms-2 card-title">{{ name }}</h5>
                <p class="ms-2 data-card">{{ time }}</p>
                <p class="ms-2 data-card">{{ level }}</p>
                <p class="ms-2 data-card">{{ localLikes }}</p>

               

                <button  class="btn like-btn" v-on:click="onClickRecipeLike()" >Like</button>
                <button  class="btn unlike-btn"  v-on:click="onClickRecipeUnlike()">Unlike</button>
                <button v-on:click="onClickViewRecipe()" class="btn recipecrd-btn" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Ver Receta</button>
    
    
            </div>
        </div>
   `
})


