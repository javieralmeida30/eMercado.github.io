function cargarSubmit(event){
  event.preventDefault();
  const usuario=document.getElementById("usuario").value;
  const constrasena= document.getElementById("contrasena").value;
  if (usuario !='' && constrasena !='') {
    window.open("/cover.html", "_self")
  }
}
function goog(){
 
  window.open("/workspace-inicial/cover.html", "_self")
}
