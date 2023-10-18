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
});