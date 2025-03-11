document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "Cliquez ici";
    
    const compteur = document.createElement("p");
    compteur.id = "compteur";
    compteur.textContent = "0";

    document.body.appendChild(button);
    document.body.appendChild(compteur);

    let count = 0;

    function incrementerCompteur() {
        count++; 
        compteur.textContent = count;
    }

    button.addEventListener("click", incrementerCompteur);
});







