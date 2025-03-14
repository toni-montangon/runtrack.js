// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", function() {
    // Créer le bouton
    let button = document.createElement("button");
    button.textContent = "Charger le texte";

    // Ajouter le bouton au body (avant le <pre>)
    document.body.insertBefore(button, document.getElementById("contenu"));

    // Ajouter un événement pour charger le fichier texte au clic
    button.addEventListener("click", function() {
        fetch("expression.txt") // Assurez-vous que le fichier est au bon endroit
            .then(response => response.text()) // Convertit la réponse en texte
            .then(data => {
                document.getElementById("contenu").textContent = data; // Affiche le texte
            })
            .catch(error => console.error("Erreur de chargement du fichier :", error));
    });
});

