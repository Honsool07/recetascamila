const app = Vue.createApp({
    data() {
        return {
            pruebaArray: [],
            colectedRecipes:[],
            title: "KookBook Recipes!",
            description: "Everyones favorites recipes for anytime in the day",
            image: "./imgs/headerpic.png",
            loading: true,
            selectedIndex: 0,
            all_recipes: [],
            hasRecipes: true,
            recipes: [
                { id: 1, image: "", name: "", category: "", time: "", level: "", likes: "", ingredients: "", instructions: "" },],
            categories: [
                { name: 'Main course' },
                { name: 'Side dish' },
                { name: 'Dessert' },
                { name: 'Appetizer' },
                { name: 'Salad' },
                { name: 'Bread' },
                { name: 'Breakfast' },
                { name: 'Soup' },
                { name: 'Beverage' },
                { name: 'Sauce' },
                { name: 'Marinade' },
                { name: 'Fingerfood' },
                { name: 'Snack' },
                { name: 'Drink' }

            ],
            recipe: [],
        }
    },
    mounted: function () {

        this.all_recipes = this.recipes;
        this.colectedRecipes = JSON.parse(localStorage.getItem('colectedRecipes'));


        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=name&apiKey=f6d3edc5965a417d9bfb283f6002d70d'

        })
            .then(
                (response) => {

                    let items = response.data.results;
                    console.log(items);

                    this.recipes = [];

                    items.forEach(items => {
                        this.recipes.push({
                            id: items.id,
                            image: items.image,
                            name: items.title,
                            category:items.category,
                            time: "20 mins",
                            level: "Easyss",
                            likes: 18,
                            ingredients: "NA",
                            instructions: "NA"
                        })
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
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=f6d3edc5965a417d9bfb283f6002d70d'
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




        onClickRecipeDetails(index) {
            console.log("recipe id - " + index);
            //this.selectedIndex = index;

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/' + index + '/information?includeNutrition=false&apiKey=f6d3edc5965a417d9bfb283f6002d70d'
            })
                .then(
                    (response) => {

                        let item = response.data;

                        this.recipe.id = index;
                        this.recipe.image = item.image;
                        this.recipe.name = item.title;
                        this.recipe.category = "";
                        this.recipe.category = item.category;
                        //this.recipe.time = item.readyInMinutes + " mins";
                        this.recipe.cookingMinutes = item.cookingMinutes;
                        this.recipe.preparationMinutes = item.preparationMinutes;
                        this.recipe.readyMinutes = item.readyMinutes;
                        this.recipe.level = "";
                        this.recipe.likes = item.aggregateLikes;
                        this.recipe.instructions = item.instructions;

                        let ingredientsList = "";
                        for (let i = 0; i < item.extendedIngredients.length; i++) {
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
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=f6d3edc5965a417d9bfb283f6002d70d`
            })

                .then(
                    (response) => {
                        let items = response.data.results;
                        console.log(items);

                        items.forEach((element) => {
                            this.pruebaArray.push({
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

        onClickSelectedCategory(category) {

            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?type=' + category + '&apiKey=f6d3edc5965a417d9bfb283f6002d70d'

            })
                .then(
                    (response) => {

                        let items = response.data.results;
                        console.log(items);

                        this.recipes = [];

                        if (items.length > 0) this.loading = false;

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                image: element.image,
                                name: element.title,
                                category: category,
                                category: element.category,
                                time: "20 mins",
                                level: "Easy",
                                likes: 18,
                                ingredients: "NA",
                                instructions: "NA"
                            })
                        });

                    }
                )
                .catch(
                    error => console.log(error)
                );

        },
        onClickPrev() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.recipes.length - 1;;
            }
        },
        onClickNext() {
            this.selectedIndex++;
            if (this.selectedIndex >= this.recipes.length) {
                this.selectedIndex = 0;
            }
        }
    }

})

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 


