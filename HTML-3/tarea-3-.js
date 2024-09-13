// Escucha el evento 'submit' en el formulario con ID 'clientForm'
document.getElementById('clientForm').addEventListener('submit', function(event) {
    // Previene el envío tradicional del formulario
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    const cedula = document.getElementById('cedula').value; // Valor del campo de cédula
    const apellidos = document.getElementById('apellidos').value; // Valor del campo de apellidos
    const nombres = document.getElementById('nombres').value; // Valor del campo de nombres
    const direccion = document.getElementById('direccion').value; // Valor del campo de dirección
    const telefono = document.getElementById('telefono').value; // Valor del campo de teléfono

    // Obtiene el correo electrónico completo concatenando el nombre de usuario y el dominio
    const correoUsername = document.getElementById('correo-username').value; // Parte del usuario del correo
    const correoDomain = document.getElementById('correo-domain').value; // Dominio del correo
    const correo = `${correoUsername}@${correoDomain}`; // Construye la dirección de correo completa

    const ciudad = document.getElementById('ciudad').value; // Valor del campo de ciudad

    // Muestra los datos en la consola del navegador
    console.log(`Cédula: ${cedula}`);
    console.log(`Apellidos: ${apellidos}`);
    console.log(`Nombres: ${nombres}`);
    console.log(`Dirección: ${direccion}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Correo Electrónico: ${correo}`);
    console.log(`Ciudad/Cantón: ${ciudad}`);

    // Muestra un mensaje de confirmación al usuario
    alert(`📬 ¡Datos enviados exitosamente!\n\nCédula: ${cedula}\nApellidos: ${apellidos}\nNombres: ${nombres}`);

    // Limpia los campos del formulario después de enviar los datos
    document.getElementById('clientForm').reset();
});
