//Configurar de nuestro sistemas de rutas
//importar nuestra capacidad de hacer rutas con vue-router
//import { createRouter, createWebHistory } from 'vue-router'; //modo HTML5
import { createRouter, createWebHashHistory } from 'vue-router';  //modo Hash
import HomeView from '../views/HomeView.vue'; 
import NotFound from '../views/404View.vue'; 

//Llamar a la variable de .env
const stage = import.meta.env.VITE_STAGE

//Habilitar el modo hash para que el proyecto soporte servidores que no estan preparados para este tipo d

//almacenamos en una variable y ejecutamos la funcion recibe un Json de configuracion de sistema de rutas
const router = createRouter({
//Le indicamos2 cosas: modo de historial de navegación rutas que va a definir para qeu exista

    //importamos createWebHistory 
    //history: createWebHistory(), //modo HTML5
    history: createWebHashHistory(), //modo Hash

    //Lista de rutas de nuestra aplicación 
    routes:[
        { path: '/404', component: NotFound },

        //Redireccionar a 404 con expresion regular .* en todas las demas que no sean las declaradas muestra 404
        {path:'/:catchAll(.*)' , redirect: '/404' },
        //nombre ruta / componente referencia
        {   path: '/', 
            name: 'home', 
            component: HomeView, 
            alias: ['/home'],
            meta: {
                requiresAuth : false
            } 
        },

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
        {   path:'/about', 
            name: 'about', 
            component: () => import('../views/AboutView.vue') 
        },

        {   path:'/chats', 
            component: () => import('../views/ChatsView.vue'),
            meta: { requiresAuth : true, roles: ['admin'] }, 
            children:[
                {   path: ':chatId(\\d+)', //condicionar para que solamente reciba numeros
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

//Condicion para que solo muestre la pagina si estamos en modo prueba
//La ruta Se agrega  programaticamente al iniciar el proyecto
if(stage === 'test'){
    router.addRoute({
        path: '/profile',
        component: () => import('../views/ProfileView.vue')
    })
}

//Configuracion para los navigations guards por funcion del objeto router
//recibe dos argumentos to y from
router.beforeEach((to, from) => {
    console.log(to, from)

    //El signo '?' es para evitar que rompa ya que no todas tienen el valor meta 
    /* if(to.meta?.requiresAuth && to.meta.roles.includes('admin')) {
        console.log(to.path, 'requires auth')
        return '/session'
    }

    //Si viene de home nos dirija a about
    if(to.path === '/') return '/about' */

    //cancelar la navegación a la ruta
    return true
})

//Hacer publica la variable router para usarla en index.Js y usarla en la aplicación
export default router 