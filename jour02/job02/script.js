document.addEventListener("DOMContentLoaded", function () {
    const article = document.createElement("article");
    article.id = "citation";
    article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "Afficher la citation";
    document.body.appendChild(button);
    document.body.appendChild(article);

    function toggleCitation() {
        if (article.style.display === "none") {
            article.style.display = "block";
            setTimeout(() => (article.style.opacity = "1"), 10);
        } else {
            article.style.opacity = "0";
            setTimeout(() => (article.style.display = "none"), 500);
        }
    }

    button.addEventListener("click", toggleCitation);
});






