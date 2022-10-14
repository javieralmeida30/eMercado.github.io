
function cargarSubmit(event){
  event.preventDefault();
  const contrasena=document.getElementById("contraseña").value;
  const correo=document.getElementById("usuarioPrincipal").value;
  if (contrasena != "" && correo != "") {
    window.open("https://javieralmeida30.github.io/eMercado.github.io/cover", "_self")
    localStorage.usuario = correo
  }
  else if (contrasena != "") {
      alert("Campos vacíos:\n e-mail");
  }
  else if (correo != ""){
      alert("Campos vacíos:\n contraseña");
  }
  else {
      alert("Campos vacíos:\n e-mail \ncontraseña")
  }
}
