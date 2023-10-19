document.addEventListener("DOMContentLoaded", function () {
    var topsWomen = document.getElementById("idTopsWomen");
    var othersWomen = document.getElementById("idOthersWomen");
    var bottomsWomen = document.getElementById("idBottomsWomen");

    othersWomen.addEventListener("click", function () {
        window.location.href = "othersWomen.html";
    });

    topsWomen.addEventListener("click", function () {
        window.location.href = "topsWomen.html";
    });

    bottomsWomen.addEventListener("click", function () {
        window.location.href = "bottomsWomen.html";
    });
    var button = document.getElementById("idButton");

    button.addEventListener("click", function () {
        window.location.href = "Contact.html";
    });

});