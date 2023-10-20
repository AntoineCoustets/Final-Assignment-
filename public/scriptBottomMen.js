document.addEventListener("DOMContentLoaded", function () {
    var topsMen = document.getElementById("idTopsMen");
    var othersMen = document.getElementById("idOthersMen");
    var bottomsMen = document.getElementById("idBottomsMen");

    othersMen.addEventListener("click", function () {
        window.location.href = "othersMen.html";
    });

    topsMen.addEventListener("click", function () {
        window.location.href = "topsMen.html";
    });

    bottomsMen.addEventListener("click", function () {
        window.location.href = "bottomsMen.html";
    });
    var button = document.getElementById("idButton");

    button.addEventListener("click", function () {
        window.location.href = "Contact.html";
    });
});

listProduit.forEach(function (currentProduct) {
    var Card = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("h3");
    var description = document.createElement("p");
    var price = document.createElement("p")
    img.src = currentProduct.img;
    titre.textContent = currentProduct.titre;
    description.textContent = currentProduct.description;
    prix.textContent = currentProduct.prix + '€';
    Card.appendChild(titre);
    Card.appendChild(img);
    Card.appendChild(prix);
    Card.appendChild(description);
    var div = document.getElementById('products');
    div.appendChild(Card);
})
















