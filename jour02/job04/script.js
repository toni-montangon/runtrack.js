document.addEventListener('keydown', function(event) {
    let textarea = document.getElementById('keylogger');
    let key = event.key;
    
    if (/^[a-z]$/.test(key)) { // Vérifie si c'est une lettre entre a et z
        if (document.activeElement === textarea) {
            textarea.value += key + key; // Ajoute la lettre deux fois si le focus est dans le textarea
        } else {
            textarea.value += key; // Ajoute la lettre une seule fois sinon
        }
    }
});







