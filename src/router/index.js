//Configurar de nuestro sistemas de rutas
//importar nuestra capacidad de hacer rutas con vue-router
//import { createRouter, createWebHistory } from 'vue-router'; //modo HTML5
import { createRouter, createWebHashHistory } from 'vue-router';  //modo Hash
import HomeView from '../views/HomeView.vue'; 

//Habilitar el modo hash para que el proyecto soporte servidores que no estan preparados para este tipo d

//almacenamos en una variable y ejecutamos la funcion recibe un Json de configuracion de sistema de rutas
const router = createRouter({
//Le indicamos2 cosas: modo de historial de navegación rutas que va a definir para qeu exista

    //importamos createWebHistory 
    //history: createWebHistory(), //modo HTML5
    history: createWebHashHistory(), //modo Hash

    //Lista de rutas de nuestra aplicación 
    routes:[
        //nombre ruta / componente referencia
        { path: '/', name: 'home', component: HomeView, alias: ['/home'] },

        //Ruta de Redireccion por path o por name a una ruta ya existente y asi no duplicar
        //{ path: '/home', redirect: '/' },

        //Alias de redirección

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
                { 
                    path:':chatId', 
                    component: () => import('../views/ChatView.vue') ,
                    //Esto lo agregamos para que funcione el prop, toma todos los params de la url y con el mismo nombre los envia
                    /* props: true,             //Activandolo con un true como minimo */
                    /* props: { chatId : '3' }, //pasando un json */
                    
                    //para tomar decisiones, nos devuelve el objeto route y tenemos que aplicar el return para convertir lo que venga en route sea un prop
                    props: (route)  => {
                        return{
                            chatId: route.params.chatId
                        }
                    },//pasando una funcion arrow

                },
            ],
        },
        //Para crear ruta se usa una variable y la nombramos
        
    ],

});

//Configuracion para los navigations wats por funcion del objeto router
//recibe dos argumentos to y from
router.beforeEach((to, from) => {
    console.log(to, from)
    //Si viene de home nos dirija a about
    if(to.path === '/') return '/about'

    //cancelar la navegación a la ruta
    return true
})

//Hacer publica la variable router para usarla en index.Js y usarla en la aplicación
export default router 