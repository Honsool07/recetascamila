app.component('login-recipes', {
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
                    <div class='sub-login'>
                        Digita tus datos personales y empieza a explorar tus recetas favoritas!
                    </div>
                    <div class='input-fields'>
                        <input type='text' placeholder='Username' class='input-line full-width'>

                        <input type='password' placeholder='Password' class='input-line full-width'>
                        <a class="account-txt ms-0 mb-4 mt-2 link-info"
                            style="text-decoration: underline;color: #4400ff" href="forgotpassword.html">Olvidaste
                            tu contrasena?</a>


                    </div>

                    <div class="position-absolute top-50 start-50 translate-middle-x p-4">


                    </div>
                    <div class="bottom-0 p-4 text-center">
                        <a class="ms-0 login-btn full-width " href="index.html">Iniciar Sesion</a>
                        <p class="account-txt m-0 mt-5"
                            style="color:white;text-decoration: underline;color: #ffffff">
                            ¿Aun no tienes una cuenta? </p>
                        <a class="account-txt recipecrd-btn  text-md-left login-btn" href="signUp.html">Crear Cuenta
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    
`
})