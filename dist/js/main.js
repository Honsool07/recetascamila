const app = Vue.createApp({
    data() {
        return {
            image: "./imgs/headerpic.png",
         
            likes: 25,
            categories: [
                { id: 1, name: "Desayuno" },
                { id: 1, name: "Bebidas" },
                { id: 1, name: "Almuerzo" },
                { id: 1, name: "Postres" },
                { id: 1, name: "Sopas" },
                { id: 1, name: "Entradas" },
                { id: 1, name: "Todas" },
            ],
            all_recipes: [

            ],
            

        }
    },
    mounted: function () {
        this.all_recipes = this.recipes;
    },
    methods: {
        onClickLike(index) {
            //console.log("btn - click");
            //this.likes += 1;
            //console.log("INDEX -> "+ index)
            this.recipes[index].likes += 1;
        },
        onClickUnlike(index) {
            //console.log("btn - click");
            //if(this.likes > 0)this.likes -= 1;
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;

        },
        onClickCategory(category) {
            console.log("category -> " + category);
            if (category == "Todas") {
                this.recipes = this.all_recipes;
            } else {
                this.recipes = this.all_recipes;
                let recipesInCategory = this.recipes.filter(function (el) {
                    return el.category === category;
                });
                this.recipes = recipesInCategory;
            }
        },
        onClickViewRecipe(index) {
            this.selectedIndex = index;
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
    },
});