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
            <!-- vue-router nos brinda 2 objetos json: router y route (con info a la cual puedes acceder) -->
            {{ this.$router }}
            <br>
            {{ this.$route.params.chatId }}
        </article>
    </div>
</template>

<script>
export default{
    data(){
        return{
            chats:[
                {id: 1, name: 'Ximena' },
                {id: 2, name: 'Daniel' },
                {id: 3, name: 'Miguel' },
            ]
        }
    }
};
</script>