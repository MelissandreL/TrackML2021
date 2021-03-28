function Login(){
    var pseudo=document.login.pseudo.value;
    var username=pseudo.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (pseudo=="4dm1n" && password=="unmotdepasserandom") {
        alert("Password accepté, vous pouvez valider le challenge avec ce mot de passe.");
    } else { 
        alert("Mauvais mot de passe."); 
    }
}
