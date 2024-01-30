document.addEventListener("DOMContentLoaded", function() {
    // Cette fonction sera exécutée une fois que le DOM est chargé

    // Récupérez l'élément image par son ID
    var gifImage = document.getElementById("gifImage");

    // Vérifiez si l'élément image existe
    if (gifImage) {
        // Modifiez la source de l'image pour le GIF
        gifImage.src = "animation.gif";
    }
});
