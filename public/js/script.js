class Product {
    constructor(titre, prix, description, img) {
    this.titre = titre;
    this.prix = prix;
    this.description = description;
    this.img = img;
  }
}

let listProduit = [
    {"titre" : "tshirt","prix": 12,"description" : "un tshirt", "img" :"../img/Sans titre.jpg" },
    {"titre" : "pantalon", "prix":30, "description":"un pantalon", "img" :"../img/Sans titre.jpg"},
    {"titre" : "chapeau", "prix": 21, "description" : "un chapeau", "img": "../img/Sans titre.jpg"},
    {"titre" : "Air Force 1", "prix" : 90, "description" : "Air Force One", "img" : "../img/AF1.jpg"},
    {"titre" : "tshirt","prix": 12,"description" : "un tshirt", "img" :"../img/Sans titre.jpg" },
    {"titre" : "pantalon", "prix":30, "description":"un pantalon", "img" :"../img/Sans titre.jpg"},
    {"titre" : "chapeau", "prix": 21, "description" : "un chapeau", "img": "../img/Sans titre.jpg"},
    {"titre" : "Air Force 1", "prix" : 90, "description" : "Air Force One", "img" : "../img/AF1.jpg"},
    {"titre" : "tshirt","prix": 12,"description" : "un tshirt", "img" :"../img/Sans titre.jpg" },
    {"titre" : "pantalon", "prix":30, "description":"un pantalon", "img" :"../img/Sans titre.jpg"},
    {"titre" : "chapeau", "prix": 21, "description" : "un chapeau", "img": "../img/Sans titre.jpg"},
    {"titre" : "Air Force 1", "prix" : 90, "description" : "Air Force One", "img" : "../img/AF1.jpg"},
    {"titre" : "tshirt","prix": 12,"description" : "un tshirt", "img" :"../img/Sans titre.jpg" },
    {"titre" : "pantalon", "prix":30, "description":"un pantalon", "img" :"../img/Sans titre.jpg"},
    {"titre" : "chapeau", "prix": 21, "description" : "un chapeau", "img": "../img/Sans titre.jpg"},
    {"titre" : "Air Force 1", "prix" : 90, "description" : "Air Force One", "img" : "../img/AF1.jpg"}
    

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