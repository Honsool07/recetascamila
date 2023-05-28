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
    <h2 class= "text-center subtitle" > {{ title }} </h2>
    <p class="text-center text ">{{ description }} </p>


    
    
    `
})
