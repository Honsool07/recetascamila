app.component('signup-recipes', {
    props: {
        name: {
            type: String,
            default: "default name"
        }
    },
    data() {
        return {
            counter: 0
        }
    },

    template:
        /* html */

        `
        
        <div class='bold-line'></div>
        <div class='container-log'>
            <div class='window'>

                <div class='content-log'>
                    <div class='welcome'>Hola!</div>
                    <div class='sub-login'>Ya casi estamos listos. Antes de usar nuestros servicios necesitas crear
                        una
                        cuenta!</div>
                    <div class='input-fields'>
                        <input type='text' placeholder='Username' class='input-line full-width'>
                        <input type='email' placeholder='Email' class='input-line full-width'>
                        <input type='password' placeholder='Password' class='input-line full-width'>

                    </div>

                    <div class="bottom-0 p-4 text-center">
                        <a class="ms-0 login-btn full-width " href="index.html">Registrarse</a>
                    </div>
                </div>
            </div>
        </div>

        
    
`
})