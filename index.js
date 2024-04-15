function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "abet")
    .replace(/o/gi, "itur")
    .replace(/u/gi, "ufes");

  if (texto.value != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    imagen.src = "img/Ok-amico.png";
  } else {
    imagen.src = "img/Codereview.png";
    tituloMensaje.textContent = "Ningún mensaje encriptado";
    parrafo.textContent = "Ingresa el texto que desee encriptar o desencriptar";
    alert("Debes ingresar algun texto");
  }
}
