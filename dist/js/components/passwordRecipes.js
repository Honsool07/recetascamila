app.component('password-recipes', {
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
                        <div class='welcome'>Olvidaste tu contrasena?!</div>
                        <div class='sub-login'>
                            Digite su e-mail y se le enviara un link para reestablecer la contraseña
                        </div>
                        <div class='input-fields'>
                            <input type='email' placeholder='Email' class='input-line full-width'>



                        </div>

                        <div>
                            <a class="ms-0 login-btn full-width" href="index.html">Enviar Link de recuperacion</a>

                        </div>
                    </div>
                </div>
            </div>
        
    
`
})