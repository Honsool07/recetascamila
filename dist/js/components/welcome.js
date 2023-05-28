app.component('welcome', {
    props: {
        title: {
            type: String,
            default: "default title"
        },
        description: {
            type: String,
            default: "default description"
        }
    },
    data() {
        return {
            counter: 0
        }
    },


    template:
        /*html*/
        `
    <h2 class= "text-center subtitle" >  Thanks for visiting KookBook recipes! </h2>
    <p class="text-center text "> The KookBook is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what were all about.  </p>
   
           

    
    
    `
})
