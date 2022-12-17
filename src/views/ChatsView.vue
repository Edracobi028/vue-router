<template>
    <div>
        <aside>
            <!-- Que nos dirija dinamicamente con una variable -->
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">
                    {{ chat.name }}
                </router-link>
            </div>
        </aside>
        <article>
            <router-view></router-view>
        </article>
    </div>
</template>

<script>
export default{
    data(){
        return{
            chats: [
                
            ]
        }
    },

    //Escuchar los cambios en las rutas con watcher  clave =  variable a seguir valor = funcion()
    /* watch: {
        '$route.params': (val) => {
            console.log('update params', val )
        }
    }, */
    //Otra forma de escribir un watch con created()
    created(){
        this.$watch(
            () => this.$route.params,
            (val) => {
                console.log('update params', val)
                this.chats = [
                    {id: 1, name: 'Ximena' },
                    {id: 2, name: 'Daniel' },
                    {id: 3, name: 'Miguel' },
                ]
            },
            { immediate: true } //Ejecutara desde la 1ra vez que tiene un valor  el watch
        )
        
    },

};
</script>