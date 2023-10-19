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
    constructor(title, price, description, img, gender, type) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.img = img;
        this.gender = gender;
        this.type = type;
    }
}

let listProduit = [
    { "title": "tshirt", "price": 12, "description": "un tshirt", "img": "./Sans title.jpg", "type": "top" },
    { "title": "pantalon", "price": 30, "description": "un pantalon", "img": "./Sans title.jpg", "type": "bottom" },
    { "title": "chapeau", "price": 21, "description": "un chapeau", "img": "./Sans title.jpg", "type": "other" },
    { "title": "Air Force 1", "price": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "title": "tshirt", "price": 12, "description": "un tshirt", "img": "./Sans title.jpg", "type": "top" },
    { "title": "pantalon", "price": 30, "description": "un pantalon", "img": "./Sans title.jpg", "type": "bottom" },
    { "title": "chapeau", "price": 21, "description": "un chapeau", "img": "./Sans title.jpg", "type": "other" },
    { "title": "Air Force 1", "price": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "title": "tshirt", "price": 12, "description": "un tshirt", "img": "./Sans title.jpg", "type": "top" },
    { "title": "pantalon", "price": 30, "description": "un pantalon", "img": "./Sans title.jpg", "type": "bottom" },
    { "title": "chapeau", "price": 21, "description": "un chapeau", "img": "./Sans title.jpg", "type": "other" },
    { "title": "Air Force 1", "price": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" },
    { "title": "tshirt", "price": 12, "description": "un tshirt", "img": "./Sans title.jpg", "type": "top" },
    { "title": "pantalon", "price": 30, "description": "un pantalon", "img": "./Sans title.jpg", "type": "bottom" },
    { "title": "chapeau", "price": 21, "description": "un chapeau", "img": "./Sans title.jpg", "type": "other" },
    { "title": "Air Force 1", "price": 90, "description": "Air Force One", "img": "./AF1.jpg", "type": "other" }


]

listProduit.forEach(function (currentProduct) {
    if (currentProduct.type == "top") {
        var Card = document.createElement("div");
        var img = document.createElement("img");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        var price = document.createElement("p")
        img.src = currentProduct.img;
        title.textContent = currentProduct.title;
        description.textContent = currentProduct.description;
        price.textContent = currentProduct.price + '€';
        Card.appendChild(title);
        Card.appendChild(img);
        Card.appendChild(price);
        Card.appendChild(description);
        var div = document.getElementById('products');
        div.appendChild(Card);
    }
})

