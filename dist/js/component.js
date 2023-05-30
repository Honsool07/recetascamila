const app = Vue.createApp({
    data(){
        return{
            searchArray: [],
            colectedRecipes:[],
            loading: true,
            selectedIndex: 0,
            all_recipes:[],
            hasRecipes: true,
            recipes:[ 
            {id: 1, image:"", name: "", category: "", time: "", level: "", likes: 18, ingredients: "", instructions: ""},],
            categories:[
            { name: 'main course' },
            { name: 'side dish' },
            { name: 'dessert' },
            { name: 'appetizer' },
            { name: 'salad' },
            { name: 'bread' },
            { name: 'breakfast' },
            { name: 'soup' },
            { name: 'beverage' },
            { name: 'sauce' },
            { name: 'marinade' },
            { name: 'fingerfood' },
            { name: 'snack' },
            { name: 'drink' }
            
        ],
        recipe:{},
        }
    },
    mounted:function(){
        this.all_recipes = this.recipes;
        this.colectedRecipes = JSON.parse(localStorage.getItem('colectedRecipes'));


        

        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=6394fa3542f342c2a57c6c183d04fc63'

        })
        .then(
            (response) => {

                let items = response.data.results;
                console.log(items);

                this.recipes = [];

                if(items.length > 0) this.loading = false;

                items.forEach(element => {
                    this.recipes.push({ 
                         id: element.id,
                         image: element.image,
                         name: element.title,
                         category: 'main course',
                         time: "20 mins",
                         level: "Easy",
                         likes: 18,
                         ingredients: "NA",
                         instructions: "NA" })
                });
              
            }
        )
        .catch(
            error => console.log(error)
        );
    },
    methods: {
        
        onClickSaveRecipe(index){
      

            console.log("recipe id - " + index);
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=6394fa3542f342c2a57c6c183d04fc63'
            })
            .then(
                (response) => {
    
                    let items = response.data;
                    console.log(items);

                        this.colectedRecipes.push({ 
                            id: items.id, 
                            image: items.image,
                            name: items.title,
                            totaltime: items.readyInMinutes + " mins",
                            level: "Easy",
                            steps: items.instructions,
                            category: items.dishTypes })
                        
                        localStorage.setItem('colectedRecipes', JSON.stringify(this.colectedRecipes));
                  
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        onClickRecipeDetails(index){
            console.log("recipe id - " + index);
            //this.selectedIndex = index;

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=6394fa3542f342c2a57c6c183d04fc63'
            })
            .then(
                (response) => {
                    //console.log(response.data.meals);
                    let item = response.data;

                    this.recipe.id = index;
                    this.recipe.image = item.image;
                    this.recipe.name = item.title;
                    //this.recipe.category = item.dishTypes;
                    this.recipe.readyInMinutes = item.readyInMinutes;
                    this.recipe.cookingMinutes = item.cookingMinutes;
                    this.recipe.preparationMinutes = item.preparationMinutes;
                    this.recipe.readyMinutes = item.readyMinutes;
                    this.recipe.level = "Easy";
                    this.recipe.likes = item.aggregateLikes;
                    this.recipe.instructions = item.instructions;

                    let ingredientsList = "";
                    for(let i = 0; i <item.extendedIngredients.length; i++){
                        ingredientsList += item.extendedIngredients[i].original + "\n";
                    }
                    this.recipe.ingredients = ingredientsList;

                }
            )
            .catch(
                error => console.log(error)
            );
        },
        searchRecipe() {

            const searchTerm = this.$refs.searchInput.value;


            axios({
                method: 'get',
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=6394fa3542f342c2a57c6c183d04fc63`
            })

                .then(
                    (response) => {
                        let items = response.data.results;
                        console.log(items);

                        items.forEach((element) => {
                            this.searchArray.push({
                                id: element.id,
                                image: element.image,
                                name: element.title,
                                preparation_time: element.preparationMinutes + "mins",
                                cook_time: element.cookingMinutes + " mins",
                                total_time: element.readyInMinutes + " mins",
                                category: element.dishTypes,
                                portions: element.servings,
                                level: "Easy",
                                occasion: element.occasions,
                                likes: element.aggregateLikes,
                                description: element.summary,
                                ingredients: element.extendedIngredients,
                                instructions: element.instructions,
                            })



                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },





        onClickSelectedCategory(category){
            
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=6394fa3542f342c2a57c6c183d04fc63'
    
            })
            .then(
                (response) => {
    
                    let items = response.data.results;
                    console.log(items);
    
                    this.recipes = [];
    
                    if(items.length > 0) this.loading = false;
    
                    items.forEach(element => {
                        this.recipes.push({ 
                             id: element.id,
                             image: element.image,
                             name: element.title,
                             category: category,
                             time: "20 mins",
                             level: "Easy",
                             likes: 18,
                             ingredients: "NA",
                             instructions: "NA" })
                    });
                  
                }
            )
            .catch(
                error => console.log(error)
            );

        },
        
    }
    
})

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 
