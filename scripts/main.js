console.log("Hola mundo.");

function getData(form){
    console.log("Consiguiendo datos de formCat...");
    // Conseguir los datos del formulario
    var formData = new FormData(form);
    // Formatear los datos a objeto JS
    var data = Object.fromEntries(formData);

    // Mostrar en la consola los datos
    console.log(data)
    console.log(JSON.stringify(data, null, 4));

    return data;
}

document.getElementById("formCat").addEventListener("submit", function(e) {
    e.preventDefault();
    const data = getData(e.target);

    var validCard = true;
    // Borrar errores anteriores
    document.getElementById("errorDiv").innerHTML = "";

    if (data.email == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Correo no válido.</p>`;
        validCard = false;
    }
    if (data.addr == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Dirección no válida.</p>`;
        validCard = false;
    }
    if (data.cardNum == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Número de tarjeta no válido.</p>`;
        validCard = false;
    }
    if (data.expDate == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Fecha de expiración no válida.</p>`;
        validCard = false;
    }
    if (data.cvv == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Código de verificación no válido.</p>`;
        validCard = false;
    }
    if (data.cardPsw == "") {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="errorForm">Clave no válida.</p>`;
        validCard = false;
    }

    if (validCard == true) {
        document.getElementById("errorDiv").innerHTML +=
        `<p id ="validForm">Tarjeta válida. ¡Gracias por su compra!</p>`;
        document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
    }

});