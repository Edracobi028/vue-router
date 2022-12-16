//Configurar de nuestro sistemas de rutas
//importar nuestra capacidad de hacer rutas con vue-router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
//almacenamos en una variable y ejecutamos la funcion recibe un Json de configuracion de sistema de rutas
const router = createRouter({
//Le indicamos2 cosas: modo de historial de navegación rutas que va a definir para qeu exista

    //importamos createWebHistory
    history: createWebHistory(),

    //Lista de rutas de nuestra aplicación 
    routes:[
        //nombre ruta / componente referencia
        { path: '/', name: 'home', component: HomeView },

        //Agregar vista al sistema de rutas para que pueda visualizarse
        {   path: '/session', 
            component: () => import('../views/SessionView.vue'),
            /* Agregar los componentes que se vran en esta vista */
            children: [
                { path: '',
                  components: {

                     default: () => import ('../views/LoginView.vue'),
                     register: () => import ('../views/RegisterView.vue'),
                  }  
                }
            ]
        },
        //forma asincrona de importación para que solo al ser llamadas las descargue
        { path:'/about', name: 'about', component: () => import('../views/AboutView.vue') },
        { 
            path:'/chats', 
            component: () => import('../views/ChatsView.vue'),
            children:[
                { path:':chatId', component: () => import('../views/ChatView.vue') },
            ],
        },
        //Para crear ruta se usa una variable y la nombramos
        
    ],

});

//Hacer publica la variable router para usarla en index.Js y usarla en la aplicación
export default router 