const app = Vue.createApp({
    data(){
        return{
            loading: true,
            selectedIndex: 0,
            all_recipes:[],
            hasRecipes: true,
            recipes:[ //si hay llaves hay objetos
            {id: 1, image:"./images/recipes/sushi.jpg", name: "", category: "", time: "", level: "", likes: 18, ingredients: "", instructions: ""},],
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

        

        //connect to API
        /*axios({
            method:'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
        .then(
            (response) => {
                console.log(response.data.meals);
                //this.categories = response.data.meals;
                let items = response.data.meals;
                items.forEach( (element, index) => {
                    this.categories.push({ id: index, name: element.strCategory });
                });
                console.log(this.categories);
            }
        )
        .catch(
            error => console.log(error)
        );*/

        //connect to API to get deffault category
        /*axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

        })
        .then(
            (response) => {

                let items = response.data.meals;
                console.log(items);

                this.recipes = [];

                if(items.length > 0) this.loading = false;

                items.forEach(element => {
                    this.recipes.push({ 
                         id: element.idMeal,
                         image: element.strMealThumb,
                         name: element.strMeal,
                         category: 'Seafood',
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
        );*/
        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=3262608b5ca0447299783d90b86cbf50'

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
        onClickRecipeLike(index){
            this.recipes[index].likes +=1;
        },
        onClickRecipeUnlike(index){
            if(this.recipes[index].likes > 0)this.recipes[index].likes -= 1;
        },
        onClickRecipeDetails(index){
            console.log("recipe id - " + index);
            //this.selectedIndex = index;

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=3262608b5ca0447299783d90b86cbf50'
            })
            .then(
                (response) => {
                    //console.log(response.data.meals);
                    let item = response.data;

                    this.recipe.id = index;
                    this.recipe.image = item.image;
                    this.recipe.name = item.title;
                    this.recipe.category = "";
                    this.recipe.time = item.readyInMinutes + " mins";
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
        onClickSelectedCategory(category){
            /*if(category == "All"){
                this.hasRecipes = true;
                this.recipes = this.all_recipes;
            }else{
                this.recipes = this.all_recipes;
                let recipesInCategory = this.recipes.filter(function(el){
                    return el.category === category;
                });
                //console.log(recipesInCategory.length);
                if(recipesInCategory.length > 0) {
                    this.hasRecipes = true;
                    this.recipes = recipesInCategory;
                }else{
                    this.hasRecipes = false;
                }
            }*/
            /*axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category
    
            })
            .then(
                (response) => {
                    console.log(response.data.meals);

                   this.recipes = [];
                    let items = response.data.meals;
                    items.forEach(element => {
                        this.recipes.push({ 
                             id: element.idMeal,
                             image: element.strMealThumb,
                             name: element.strMeal,
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
            );*/

            //get recipe category from new API
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=3262608b5ca0447299783d90b86cbf50'
    
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
        onClickPrev(){
            this.selectedIndex--;
            if(this.selectedIndex < 0){
                this.selectedIndex = this.recipes.length - 1;;
            }
        },
        onClickNext(){
            this.selectedIndex++;
            if(this.selectedIndex >= this.recipes.length){
                this.selectedIndex = 0;
            }
        }
    }
    
})

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 
