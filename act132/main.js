function getData(form){
    // Conseguir los datos del formulario
    var formData = new FormData(form);
    // Formatear los datos a objeto JS
    var data = Object.fromEntries(formData);

    // Mostrar en la consola los datos
    console.log(data)
    console.log(JSON.stringify(data, null, 4));

    return data;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const datos = getData(e.target);

    if (datos.age < 18) {
        document.getElementById("output").innerHTML =
            `<p>¡Hola, ${datos.name}! Eres menor de edad.</p>`;
    } else if (65 >= datos.age && datos.age >= 18) {
        document.getElementById("output").innerHTML =
            `<p>¡Hola, ${datos.name}! Eres mayor de edad.</p>`;
    } else if (65 < datos.age) {
        document.getElementById("output").innerHTML =
            `<p>¡Hola, ${datos.name}! Eres de edad avanzada.</p>`;
    } else {
        document.getElementById("output").innerHTML =
        `<p>¡Por favor ingresa una edad válida!</p>`
    }
});;