$(document).ready(function () {
    const article = $('<article>', {
        id: 'citation',
        text: "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie"
    });

    const buttonAfficher = $('<button>', {
        id: 'buttonAfficher',
        text: 'Afficher la citation'
    }).appendTo('body');

    const buttonSupprimer = $('<button>', {
        id: 'buttonSupprimer',
        text: 'Supprimer la citation',
        style: 'display: none;'
    }).appendTo('body');

    function afficherCitation() {
        $('body').append(article);
        console.log(article.text());
        buttonSupprimer.show();
    }

    function supprimerCitation() {
        article.remove();
        buttonSupprimer.hide();
    }

    buttonAfficher.on('click', afficherCitation);
    buttonSupprimer.on('click', supprimerCitation);
});
