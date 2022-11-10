/* Inizializza un applicativo/istanza vue */
var app = new Vue({
    el: '#root',
    data: {
        titolo: `Welcome`,
        classeDinamica : `text-blue f-50`,
        pic: `./welcome.jpeg`,
        carica:`mo carica`,
        pic2:``
    },
    methods: {
        salutaFun: function () {
            return console.log(this.carica)
        },

}});


    //     Descrizione:
    // Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
    // Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.









