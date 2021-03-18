function verifiPass() {
    let caracteresPass = document.querySelector('#password').value;
    if (caracteresPass.length >= 8) {
        console.log("Cantidad de caracteres buena");
    } else {
        alert("la contraseña debe de tener minimo 8 caracteres");
    }
}