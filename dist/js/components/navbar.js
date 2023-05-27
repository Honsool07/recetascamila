app.component('navbar', {

    props:{
        title:{
            type:String,
            default: "default title"
        },
        subtitle:{
            type:String,
            default: "default subtitle"
        },
        description:{
            type:String,
            default: "default description"
        },
        table:{
            table:String,
            default: "default table"
        },
        menu:{
            type:String,
            default: "default menu"
        },
        activity:{
            type:String,
            default: "default activity"
        },
        time:{
            type:String,
            default: "default time"
        },
        image:{
            type: String
        },
    
        
    },
    
    data(){
        return{
            counter: 0
        }
    },
    
    
        template:
            /* html */
    
            `



/*<nav class="row justify-content-around navbar navbar-white navbar-expand-lg ">

                    <div class="container-fluid">
                        <a class="navbar-brand main-title col-2" href="index.html">
                            <img src="./imgs/logo.png " alt="Logo" width="150" height="144">

                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown ">
                                    <a class=" nav-txt nav-link dropdown-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="nav-txt dropdown-item" href="#">Desayuno</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Bebidas</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Almuerzos</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Postres</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Sopas</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Entradas</a></li>
                                        <li><a class=" nav-txt dropdown-item" href="#">Todas</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-txt nav-link dropdown-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Ocasiones
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="nav-txt dropdown-item" href="#">Cumpleaños</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Dia del Padre</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Dia de la Madre</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Dia del Niño</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Navidad</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Verano</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Todas</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-txt nav-link dropdown-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Dificultades
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="nav-txt dropdown-item" href="#">Facil</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Intermedio</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Dicil</a></li>
                                        <li><a class="nav-txt dropdown-item" href="#">Todas</a></li>

                                    </ul>
                                </li>
                            </ul>

                            <ul class="navbar-nav ms-auto">
                                <form class="me-2">
                                    <a href="login.html" class="btn btn-outline-success me-2">Iniciar Sesión</a>
                                    <a href="signUp.html" class="btn btn-sm btn-outline-secondary">Registrarse</a>

                                </form>

                                <li class="list-inline-item ">
                                    <a href="#"><i class="fa-solid fa-magnifying-glass  m-2 "></i></a>
                                    <a href="userPage.html"><i class="fa-solid fa-user fa-2xl m-2"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav> */