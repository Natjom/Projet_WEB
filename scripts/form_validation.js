document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("applyForm");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const cv = document.getElementById("cv").files[0];

        if (nom === "" || prenom === "" || email === "") {
            alert("Tous les champs doivent être remplis.");
            isValid = false;
        }

        if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Veuillez entrer une adresse email valide.");
            isValid = false;
        }

        if (!cv) {
            alert("Veuillez ajouter un fichier CV.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Empêche l'envoi du formulaire si la validation échoue
        } else {
            event.preventDefault(); // Empêche l'envoi réel du formulaire
            alert("Ça a bien été envoyé !"); // Affiche le message de confirmation
            form.reset(); // Réinitialise le formulaire après l'envoi réussi
        }
    });
});
