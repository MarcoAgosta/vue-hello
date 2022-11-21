const {createApp} = Vue;

createApp({
    data(){
        return {
            messaggio: "Messaggio di prova",
            linkImmagine: "img/immagine-random.jpg",
        }
    }
}).mount('#app')