document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const mensaje = document.getElementById("mensaje-enviado");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const data = new FormData(form);

    console.log("JS cargado correctamente");


    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        mensaje.style.display = "block";
      } else {
        mensaje.textContent = "Hubo un problema. Intentá más tarde 😥";
        mensaje.style.display = "block";
      }
    });
  });
});
