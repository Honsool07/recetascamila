app.component('footer-recipes', {
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
        <footer class="bg-dark text-white pt-5 pb-4">

            <div class="container text-left text-md-left">
                <div class="row text-left text-md-left">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 class=" mb-4 font weight-bold footer-txt main-title">Kook Book</h5>
                        <p class="md-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores modi
                            maxime
                            ullam perferendis! Quidem deserunt eaque, vero eligendi </p>

                    </div>
                    <div class="col-mmd-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 class=" footer-txt text-uppercase mb-4 font-weight-bold">Categorias</h5>
                        <p>
                            <a href="#" class="text-white" style="text-decoration:none  ;"> Almuerzo</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> Desayuno</a>
                        </p>
                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> Postres</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> BTS</a>
                        </p>

                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 class=" footer-txt text-uppercase mb-4 font-weight-bold"> Links</h5>

                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> Tu Cuenta</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> Registrarse</a>
                        </p>
                        <p>
                            <a href="#" class="text-white" style="text-decoration:none ;"> Todas las Recetas</a>
                        </p>

                        <p>
                            <a href="https://www.youtube.com/watch?v=gduuajhODOU" class="text-white"
                                style="text-decoration:none ;"> BTS</a>
                        </p>

                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class=" footer-txt text-uppercase mb-4 font-weight-bold">Contacto</h5>
                        <p>
                            <i class="fas fa-home mr-3"></i> Esparza, EP 0613, CR

                        </p>

                        <p>
                            <i class="fas fa-envelope mr-3"></i> kookie@gmail.com
                        </p>
                        <p>
                            <i class="fas fa-phone mr-3"></i> +07 144340
                        </p>

                        <p>
                            <i class="fas fa-print mr-3"></i> +13 06132013
                        </p>
                    </div>

                </div>

                <hr class="mb-4">
                <div class="row align-items-center">
                    <div class="col-md-7 col-lg-8">
                        <p>Copyright ©2022 All rights reserved by:
                            <a href="#" style="text-decoration:none">
                                <strong class="footer-txt">Kook Book</strong>

                            </a>
                        </p>
                    </div>
                    <div class="col-md-5 col-lg-4">
                        <div class="text-center text-md-right">
                            <ul class=" list-unstyled list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class=" txt-footer2 btn-floating btn-sm text-white"><i
                                            class="fab fa-facebook fa-sm"></i></a>
                                </li>

                                <li class="list-inline-item">
                                    <a href="#" class=" txt-footer2 btn-floating btn-sm text-white"><i
                                            class="fab fa-twitter fa-sm"></i></a>
                                </li>

                                <li class="list-inline-item">
                                    <a href="#" class=" txt-footer2 btn-floating btn-sm text-white"><i
                                            class="fab fa-google-plus fa-sm"></i></a>
                                </li>

                                <li class="list-inline-item">
                                    <a href="#" class="txt-footer2 btn-floating btn-sm text-white"><i
                                            class="fab fa-linkedin fa-sm"></i></a>
                                </li>

                                <li class="list-inline-item">
                                    <a href="#" class="txt-footer2 btn-floating btn-sm text-white"><i
                                            class="fab fa-youtube fa-sm"></i></a>
                                </li>




                            </ul>

                        </div>
                    </div>
                </div>

            </div>


        </footer>

        
    
`
})