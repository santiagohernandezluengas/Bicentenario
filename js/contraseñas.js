function confirmar_contraseña() {
    let contraseñaUsu = document.getElementsByName('contraseñaUsuario');
    let contraseñaVerificada = document.getElementsByName('confirmContraseñaUsuario');
    if (contraseñaUsu == contraseñaVerificada) {
        console.log("contraseñas iguales");
    } else {
        alert("Las contraseñas no coinciden, intentalo de nuevo");
    }
}
