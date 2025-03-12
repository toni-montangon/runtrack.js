document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("image-container");
    const button = document.createElement("button");
    button.textContent = "Mélanger les images";
    document.body.insertBefore(button, container);

    button.addEventListener("click", function () {
        let images = Array.from(container.children);
        images.sort(() => Math.random() - 0.5);
        container.innerHTML = "";
        images.forEach(img => container.appendChild(img));
    });
});
