document.addEventListener("DOMContentLoaded", function () {
    const article = document.createElement("article");
    article.id = "citation";
    article.textContent = "La vie a beaucoup plus d’imagination que nous";

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "Afficher la citation";
    document.body.appendChild(button);

    function citation() {
        document.body.appendChild(article);
        console.log(article.textContent);
    }

    button.addEventListener("click", citation);
});





