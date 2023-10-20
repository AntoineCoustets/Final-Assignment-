class Product {
    constructor(titre, prix, description, img) {
        this.titre = titre;
        this.prix = prix;
        this.description = description;
        this.img = img;
    }
}

let listProduit = [
    { "titre": "Outline Large Fit Jacket", "prix": 2550, "description": "un tshirt", "img": "./Images/Men/Tops/Outline Large Fit Jacket.jpg", "gender": "M", "type": "Top" },
    { "titre": "Deconstructed Jacket", "prix": 3150, "description": "un pantalon", "img": "./Images/Men/Top/Deconstructed Jacket.jpg", "gender": "M", "type": "Top" },
    { "titre": "Minimal Tracksuit Jacket", "prix": 2150, "description": "un chapeau", "img": "./Images/Men/Top/Minimal Tracksuit Jacket.jpg", "gender": "M", "type": "Top" },
    { "titre": "Oversized Trench Coat", "prix": 4190, "description": "Air Force One", "img": "./Images/Men/Top/Oversized Trench Coat.jpg", "gender": "M", "type": "Top" },
    { "titre": "DIY College Light Bomber", "prix": 2950, "description": "un tshirt", "img": "./.jpg", "gender": "M", "type": "Top" },
    { "titre": "Balenciaga Back Hoodie Meduim Fit", "prix": 1150, "description": "un pantalon", "img": "./Sans titre.jpg", "gender": "M", "type": "Top" },
    { "titre": "38 Sports Icon Long Sleeve T-Shirt Oversized", "prix": 1050, "description": "un chapeau", "img": "./Sans titre.jpg", "gender": "M", "type": "Top" },
    { "titre": "Balenciaga Long Sleeve T-Shirt Oversized", "prix": 725, "description": "Air Force One", "img": "./AF1.jpg", "gender": "M", "type": "Top" },
    { "titre": "3B Sports Icon Tracksuit Pants", "prix": 1750, "description": "un tshirt", "img": "./Sans titre.jpg", "gender": "M" },
    { "titre": "Loose Fit Jeans", "prix": 1190, "description": "un pantalon", "img": "./Sans titre.jpg", "gender": "M", "type": "Pant" },
    { "titre": "Offshore Baggy Sweatpants", "prix": 1250, "description": "un chapeau", "img": "./Sans titre.jpg", "gender": "M", "type": "Pant" },
    { "titre": "Outline Baggy Sweapants", "prix": 1080, "description": "Air Force One", "img": "./AF1.jpg", "gender": "M", "type": "Pant" },
    { "titre": "Relaxed Jeans", "prix": 1350, "description": "un tshirt", "img": "./Sans titre.jpg", "gender": "M", "type": "Pant" },
    { "titre": "Triple S Mold Sneaker", "prix": 975, "description": "un pantalon", "img": "./Sans titre.jpg", "gender": "M", "type": "Other" },
    { "titre": "Balenciaga / Adidas Track Forum Low Top Sneaker", "prix": 1250, "description": "un chapeau", "img": "./Sans titre.jpg", "gender": "M", "type": "Other" },
    { "titre": "Triple S Sneaker Allover Logo", "prix": 1150, "description": "Air Force One", "img": "./AF1.jpg", "gender": "M", "type": "Other" }


]

listProduit.forEach(function (currentProduct) {
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
})


document.addEventListener("DOMContentLoaded", function () {
    var mensWear = document.getElementById("idMen");

    mensWear.addEventListener("click", function () {
        window.location.href = "mensWear.html";
    });
    var womensWear = document.getElementById("idWomen");

    womensWear.addEventListener("click", function () {
        window.location.href = "womensWear.html";
    });

    var button = document.getElementById("idButton");

    button.addEventListener("click", function () {
        window.location.href = "Contact.html";
    });
});