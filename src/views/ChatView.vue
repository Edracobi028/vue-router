<template>
    <div v-for="msg in messagesFiltered" :key="msg.id">
        {{ msg.text }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            messages: [
                { id: 1, text:'Mensaje 1', author: 1 },
                { id: 2, text:'Mensaje 2', author: 2 },
                { id: 3, text:'Mensaje 3', author: 3 },
            ]
        }
        
    },

    //variable computada para leer la variable que evnga en la url por medio de los parametros y filtramos los mensajes para que se muestre solo los del id seleccionado
    computed:{
        messagesFiltered(){
            //que devuelva por cada elemento solo aquellos que coincidan
            //cada mensaje de la lista lo recibimos como parametro
            return this.messages.filter((msg) => {
                //el id lo transformamos a string
                return `${msg.author}` === this.$route.params.chatId
            })
        }
    }
}
</script>