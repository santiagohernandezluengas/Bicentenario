function confirmar_contrasena(a) {
    let contrasenaUsu = document.getElementsByName('contrasenaUsuario');
    let contrasenaVerificada = document.getElementsByName('confirmContrasenaUsuario');
    if (contrasenaUsu == contrasenaVerificada) {
        console.log("contraseñas iguales");
    } else {
        var a = alert("Las contraseñas no coinciden, intentalo de nuevo");
    }
    return a;
}
