function cargarSubmit(event){
  event.preventDefault();
  const usuario=document.getElementById("usuarioPrincipal").value;
  const constrasena= document.getElementById("contrasena").value;
  if (usuario !='' && constrasena !='') {
    window.open("https://javieralmeida30.github.io/comjap.github.io/cover", "_self")
  }
}
function goog(){
 
  window.open("https://javieralmeida30.github.io/comjap.github.io/cover", "_self")
}
