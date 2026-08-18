function enviarWhatsApp(){

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let destino = document.getElementById("destino").value;
    let consulta = document.getElementById("consulta").value;

    if(nombre == "" || correo == "" || telefono == "" || destino == "Seleccione un destino" || consulta == ""){

        alert("Por favor complete todos los campos.");

        return;

    }

    let mensaje =
    "Hola, PLATINIUM TRAVEL.%0A%0A" +
    "Mi nombre es: " + nombre + "%0A" +
    "Correo: " + correo + "%0A" +
    "Teléfono: " + telefono + "%0A" +
    "Destino: " + destino + "%0A%0A" +
    "Consulta:%0A" + consulta;

    window.open(
        "https://wa.me/51986345640?text=" + mensaje,
        "_blank"
    );

}