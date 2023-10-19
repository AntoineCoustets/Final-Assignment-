document.addEventListener("DOMContentLoaded", function () {
    var mensWear = document.getElementById("idMen");

    mensWear.addEventListener("click", function () {
        window.location.href = "mensWear.html";
    });
    var womensWear = document.getElementById("idWomen");

    womensWear.addEventListener("click", function () {
        window.location.href = "womensWear.html";
    });
});

class Product {
    constructor(titre, prix, description, img, gender, type) {
        this.titre = titre;
        this.prix = prix;
        this.description = description;
        this.img = img;
        this.gender = gender;
        this.type = type;
    }
}

let listProduit = [
    { "titre": "tshirt", "prix": 12, "description": "un tshirt", "img": "./Sans titre.jpg", "type": "top" },
    { "titre": "pantalon", "prix": 30, "description": "un pantalon", "img": "./Sans titre.jpg", "type": "bottom" },
    { "titre": "chapeau", "prix": 21, "description": "un chapeau", "img": "./Sans titre.jpg", "type": "other" },
    { "titre": "Air Force 1", "prix": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "titre": "tshirt", "prix": 12, "description": "un tshirt", "img": "./Sans titre.jpg", "type": "top" },
    { "titre": "pantalon", "prix": 30, "description": "un pantalon", "img": "./Sans titre.jpg", "type": "bottom" },
    { "titre": "chapeau", "prix": 21, "description": "un chapeau", "img": "./Sans titre.jpg", "type": "other" },
    { "titre": "Air Force 1", "prix": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "titre": "tshirt", "prix": 12, "description": "un tshirt", "img": "./Sans titre.jpg", "type": "top" },
    { "titre": "pantalon", "prix": 30, "description": "un pantalon", "img": "./Sans titre.jpg", "type": "bottom" },
    { "titre": "chapeau", "prix": 21, "description": "un chapeau", "img": "./Sans titre.jpg", "type": "other" },
    { "titre": "Air Force 1", "prix": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "titre": "tshirt", "prix": 12, "description": "un tshirt", "img": "./Sans titre.jpg", "type": "top" },
    { "titre": "pantalon", "prix": 30, "description": "un pantalon", "img": "./Sans titre.jpg", "type": "bottom" },
    { "titre": "chapeau", "prix": 21, "description": "un chapeau", "img": "./Sans titre.jpg", "type": "other" },
    { "titre": "Air Force 1", "prix": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" }


]

listProduit.forEach(function (currentProduct) {
    if (currentProduct.type == "top") {
        var Card = document.createElement("div");
        var img = document.createElement("img");
        var titre = document.createElement("h3");
        var description = document.createElement("p");
        var prix = document.createElement("p")
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
    }
})

