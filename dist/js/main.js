const app = Vue.createApp({
    data() {
        return {
            image: "./imgs/headerpic.png",
            title: "KookBook Recipes!",
            description: "Everyones favorites recipes for anytime in the day",
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
            selectedIndex: 0,
            recipes: [ //si hay llaves hay objetos
                { id: 1, image: "./imgs/recipes/avena.jpg", name: "Pancakes de Avena", category: "Desayuno", time: "30 mins", level: "Easy", likes: 18, ingredients: "250 gramos de copos de avena (sin gluten),200 mililitros de leche,1 huevo,1 cucharadita de edulcorante,40 gramos de mantequilla, 1 pizca de canela en polvo, 1 cucharada postre de esencia de vainilla", instructions: "PASO 1 Antes de realizar estos pancakes de avena deliciosos, el primer paso es alistar todos los ingredientes.  PASO 2 En un procesador, añade la avena en hojuelas y tritura unos minutos hasta obtener una harina de avena como la que se muestra en la fotografía. PASO 3 En un bol, mezcla la avena, el huevo y la leche. Bate todos los ingredientes hasta obtener una mezcla homogénea. PASO 4 Agrega la esencia de vainilla, la canela en polvo al gusto y el sobre de splenda (edulcorante). Mezcla muy bien y, si consideras que la masa de los pancakes de avena queda demasiado espesa, puedes añadir un poco más de leche, siempre en pequeñas cantidades para no excederte. PASO 5 En una sartén a fuego bajo, añade unos 10 g de mantequilla y un poco de la mezcla de pancakes. Cocina las tortitas de avena durante 3 minutos por cada lado y repite este mismo procedimiento con el resto de la mezcla PASO 6 irve los pancakes de avena saludables uno sobre otro, báñalos con un poco de sirope." },

                { id: 2, image: "./imgs/recipes/banana-pancakes.jpg", name: "Pancakes de banano", category: "Postres", time: "20 mins", level: "Easy", likes: 18, ingredients: "2 plátanos o bananas maduros (unos 160 g), 240 ml de leche (1 taza), 150 g de harina de trigo (1 taza y cuarto), 10 g de levadura química o polvos de hornear (2 cucharaditas de postre rasas),1 huevo M, Una pizca de sal, 25 g de mantequilla (2 cucharadas soperas) y un poco más para la sartén, 1 cucharada sopera de azúcar (opcional, te recomiendo añadirlo solo si los plátanos que vas a utilizar no están apenas maduros o si te gustan bastante dulces las tortitas), 1/4 de cucharadita de esencia de vainilla o canela en polvo", instructions: "Pon la mantequilla en un pequeño recipiente e introdúcelo en el microondas y derrítela durante unos segundos, con 20 o 30 serán suficientes.Esta receta la puedes preparar triturándolo todo en un batidor de vaso o robot, o bien mezclando de forma manual en boles.Si prefieres preparar la mezcla de forma manual, pon los plátanos en un recipiente hondo y machácalos con un tenedor hasta que estén bastante deshechos aunque grumosos.Añade a ese bol la leche, el huevo, la mantequilla derretida y, si has optado por ello, la vainilla, y mezcla con unas varillas manuales." },

                { id: 3, image: "./imgs/recipes/bibimpap.jpg", name: "Bibimbap", category: "Almuerzo", time: "40 mins", level: "Medium", likes: 18, ingredients: "300g arroz, Verduras,2 zanahorias, 1/2 calabacín, setas shitake y judías verdes.Fuente proteica, yo he puesto 300g de ternera,2 huevos,Aceite de oliva,Salsa de soja,Sal,Pimienta negra. Para la salsa: 1cp de salsa Gochujang,1cs de azúcar,2cs de salsa de soja,2cs de vinagre blanco,2cs de aceite de sésamo,1cs de semillas de sésamo,  1 diente de ajo", instructions: "Preparar el arroz blanco, la base del bibimbap.Para hacer la salsa del bibimbap agrega en un recipiente los ingredientes de la salsa y mezcla muy bien.Corta las verduras en tiras finas y saltéalas con un pelín de aceite y sal poco tiempo para que mantengan ese toque crujiente. Con 2 o 3 minutos bastará.Corta la carne o proteína vegetal que hayas escogido en tiras finas y saltéala con un poquito de aceite y salsa de soja.Haz un par de huevos fritos o a la plancha para añadir en el centro del bibimbap.Sirve el bibimbap coreano con una base de arroz y los demás ingredientes encima y a los lados. Y, por supuesto, el huevo en el centro." },

                { id: 4, image: "./imgs/recipes/canelon.jpg", name: "Canelones", category: "Entradas", time: "50 mins", level: "Difficult", likes: 18, ingredients: "500 gramos de carne picada (mezcla de ternera y de cerdo),Una cebolla, Un pimiento verde, Salsa de tomate casera o tomate frito de bote,20 placas de pasta,Queso rallado para gratinar,Para la bechamel,100 gramos de mantequilla, 100 gramos de harina,Un chorrito de aceite de oliva, Un litro de leche,Especias al gusto, Sal", instructions: "Pochamos la cebolla y el pimiento verde a fuego lento.Una vez pochado agregamos la carne picada, salpimentamos,Agregamos la salsa de tomate casera. Dejamos cocinar unos cuatro o cinco minutos, retiramos del fuego y reservamos.Por otra parte cocemos las láminas de pasta como indique el fabricante. En este caso yo las he cocido con un chorrito de aceite para que no se peguen. Una vez que lo tengamos ya cocido la ponemos en un paño de algodón y procedemos a rellenarlos. Con el horno precalentado, colocamos en una fuente de horno todo los canelones formados y cubrimos con la salsa bechamel y con queso rallado." },

                { id: 5, image: "./imgs/recipes/crema-calabaza.jpg", name: "Crema de Calabaza", category: "Sopas", time: "50 mins", level: "Medium", likes: 18, ingredients: "400 gr de calabaza,1 patata (200 gr),2 zanahorias,1 puerro, 2 cucharadas de aceite de oliva,agua,sal", instructions: "Para preparar la crema de calabaza, pon a calentar 5 vasos de agua con 2 cucharadas de aceite de oliva en una cazuela al fuego. Mientras se calienta, prepara las verduras. Para ello, pela la calabaza y córtala en dados grandes.Retira la parte inferior y superior de las zanahorias, pélalas y córtalas en rodajas de 1 centímetro aproximadamente. Limpia el puerro bien para retirar toda la suciedad. Corta un trozo pequeño y resérvalo para decorar los platos. Corta en rodajas el resto del puerro. Por último, pela la patata y trocéala como para guisar, es decir, cáscala con ayuda de un cuchillo. Una vez estén listas las verduras, introdúcelas en la cazuela: la calabaza, las zanahorias, el puerro y la patata. Añade sal a tu gusto." },

                { id: 6, image: "./imgs/recipes/crepas.jpg", name: "Crepas Dulces", category: "Postres", time: "20 mins", level: "Difficult", likes: 18, ingredients: "1 taza de leche (240 mililitros),1 taza de harina de trigo (140 gramos),1 huevo, 1 cucharadita de azúcar,2 cucharadas soperas de esencia de vainilla, 2 cucharadas soperas de mantequilla derretida", instructions: "Bátelo todo hasta que se integren bien los ingredientes.Ahora, añade poco a poco la harina y sin dejar de batir.Luego, pon a calentar una sartén con un poco de mantequilla para que las crepas dulces no se queden pegadas. Cuando esté caliente, deja caer la cantidad de mezcla necesaria de manera que puedas mover la sartén en forma circular,Se trata de un postre que se hace muy rápido, por lo que no deberá estar en el fuego más de 2 minutos. " },

                { id: 7, image: "./imgs/recipes/lasagna.jpg", name: "Lasagna", category: "Almuerzo", time: "55 mins", level: "Difficult", likes: 18, ingredients: "3 1/2 libras de carne de res molida,2 cucharaditas de ajo en polvo Ajo en polvo, 2 cucharadas de Caldo de Carne de Res,1 cucharada de aceite vegetal,1/3 taza de cebolla cortada finamente,3 dientes de ajo cortados finamente, 1/2 taza de apio cortado finamente,1 sobre de Salsa De Tomate Bolognesa,3/4 taza de agua,4 hojas de laurel,3/4 libra de pasta para lasaña cocida Pasta de lasaña precocida, 2 tazas de queso mozzarella rallado,Sal y pimienta al gusto, 1 taza de queso parmesano", instructions: "1.  En un tazón, colocar la carne, el ajo en polvo, el Caldo de Carne de Res MAGGI® 2, la pimienta molida y marinar por 5 minutos.2.  En una cacerola grande, colocar el aceite, la cebolla, el ajo, el apio y sofreír por 2 minutos.4.  Cuando la carne adquiera una tonalidad gris clara, añadir la Salsa de Tomate estilo Boloñesa, el agua, las hojas de laurel, la sal y pimienta y cocinar a fuego medio por 15 minutos. 5.  Armado de la lasaña: Al momento de montar la lasaña, untar con un poco de aceite un recipiente refractario o la bandeja que utilice." },


                { id: 8, image: "./imgs/recipes/panetone.jpg", name: "Crepas Dulces", category: "Postres", time: "50 mins", level: "Difficult", likes: 18, ingredients: "500 g de harina de fuerza 10 g de levadura de panadero en polvo (o 30 gr de levadura fresca prensada),120 g de azúcar, 250 g de frutas confitadas (en la foto, naranjas confitadas),100 gr de pasas sin 180 g de mantequilla blanda sin sal (+ mantequilla fundida para pintar el pastel) 1 huevo + 3 yemas,120 ml de leche entera, 1 pizca de sal", instructions: "Desleímos la levadura en la leche con una cucharadita de azúcar y dejamos reposar 5 minutos para que suba un poco. Mezclamos con el resto de ingredientes (menos frutas y pasas) integrando todo bien. Puedes usar un robot de cocina y se hace en un momento. Debe quedar una masa húmeda y pegajosa (mira la foto superior). Añadimos la fruta confitadas y las pasas, lo integramos bien y ponemos en un bol en lugar fresco y seco para que la masa doble su tamaño (un par de horas).Pasado este tiempo desgasificamos la masa amasando ligeramente con las manos. Dividimos en dos, dejamos reposar de nuevo una media hora y ponemos en los moldes. Si uses un molde desmontable tradicional hondo, recuerda que tiene que estar bien forrado con papel de horno.  En cualquier caso la masa no debe superar más de la mitad del molde.Mientras tanto precalentamos el horno  a 200º C." },

                { id: 9, image: "./imgs/recipes/camaron.jpg", name: "Camarones con Ajo", category: "Almuerzo", time: "50 mins", level: "Difficult", likes: 18, ingredients: "(680 g.) 1 ½ libra de camarones limpios(10 g.) 1 sobre de Sazonador de Camarón(30 g.) 2 cucharadas de mantequilla (80 g.) 2/3 taza de ajo cortado finamente (15 g.) ½ taza de perejil cortado finamente", instructions: "Bátelo todo hasta que se integren bien los ingredientes.Ahora, añade poco a poco la harina y sin dejar de batir.Luego, pon a calentar una sartén con un poco de mantequilla para que las crepas dulces no se queden pegadas. Cuando esté caliente, deja caer la cantidad de mezcla necesaria de manera que puedas mover la sartén en forma circular,Se trata de un postre que se hace muy rápido, por lo que no deberá estar en el fuego más de 2 minutos. " },

                { id: 10, image: "./imgs/recipes/pizza.jpg", name: "Pizza con Rugula", category: "Entradas", time: "50 mins", level: "Difficult", likes: 18, ingredients: "1 Pieza Pechuga de pollo milanesa, 150 g, 60 Gramos Queso de cabra rollo de pollo,1 Sobre Jugoso al Sartén MAGGI® Tomate y Especias,3 Piezas Pan pita para pizza,200 Gramos Queso Mozzarella Nestlé, 15 Rodajas Pepperoni pizza, rodajas, 75 g,15 Hojas Albahaca fresca pizza, hojas, desinfectadas, 3 g", instructions: " Rellena la milanesa con el queso de cabra y enrolla cuidadosamente para evitar que se salga el relleno. Abre una hoja de Jugoso al Sartén MAGGI® Tomate y Especias, coloca el rollo, cierra y presiona ligeramente para que se impregnen las especias.Colócalo en una sartén sin aceite, precalentada a fuego bajo durante 1 minuto; tapa y cocina a fuego bajo de 7 a 8 minutos por cada lado." },



            ]


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