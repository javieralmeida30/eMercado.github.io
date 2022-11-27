
let boton = document.getElementById("guardarCambios")
let form = document.getElementById("guardarDatos")
let primerNombre = document.getElementById("nombrePerfil")
let segundoNombre = document.getElementById("segundoNombre")
let primerApellido = document.getElementById("apellidoPerfil")
let segundoApellido = document.getElementById("segundoApellido")
let guardarEmail = document.getElementById("guardarEmail")
let guardarTelefono = document.getElementById("guardarTelefono")
let formStorage = localStorage.getItem("user")
let picture = document.getElementById("picture")
let user = []

  ? JSON.parse(localStorage.getItem("user") )
  : [];

  window.addEventListener("load", function(event) {  
    console.log("'Todos los recursos terminaron de cargar!");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if (localStorage.getItem("user") =6 ){
     console.log("estoy lleno compa")
    }
    else {
    formStorage.push(primerNombre.value);
    formStorage.push(segundoNombre.value);
    formStorage.push(primerApellido.value);
    formStorage.push(segundoApellido.value);
    formStorage.push(guardarEmail.value);
    formStorage.push(guardarTelefono.value);
    localStorage.setItem("user", JSON.stringify(formStorage));
    localStorage.setItem("nombre1", primerNombre.value)
    localStorage.setItem("nombre2", segundoNombre.value)
    localStorage.setItem("nombre3", primerApellido.value)
    localStorage.setItem("nombre4", segundoApellido.value)
    localStorage.setItem("nombre5", guardarEmail.value)
    localStorage.setItem("nombre6", guardarTelefono.value)
  }});

function showForm(){
localStorage.setItem("nombre1", form)
}

function saveForm(form){
localStorage.setItem("user", form)
console.log("Llamada")
}

function load(){   
    boton.addEventListener("click", saveForm(form))
}

(function (){
  let file = document.getElementById("guardarDatos")
  file.addEventListener("Change", function(){

  })
})

function borrarDatos(){
     localStorage.removeItem('user');
     localStorage.setItem("nombre1", primerNombre.value)
     localStorage.setItem("nombre2", segundoNombre.value)
     localStorage.setItem("nombre3", primerApellido.value)
     localStorage.setItem("nombre4", segundoApellido.value)
     localStorage.setItem("nombre5", guardarEmail.value)
     localStorage.setItem("nombre6", guardarTelefono.value)
}

document.getElementById('nombrePerfil').value = localStorage.getItem("nombre1")
document.getElementById('segundoNombre').value = localStorage.getItem("nombre2")
document.getElementById('apellidoPerfil').value = localStorage.getItem("nombre3")
document.getElementById('segundoApellido').value = localStorage.getItem("nombre4")
document.getElementById('guardarEmail').value = localStorage.getItem("nombre5")
document.getElementById('guardarTelefono').value = localStorage.getItem("nombre6")


function mostrarImagen(event){
  var imagenSource = event.target.result;
  var previewImage = document.getElementById('imagenPerfil');

  previewImage.src = imagenSource;
}

function procesarArchivo(event){
   var imagen = event.target.files[0];

   var lector = new FileReader();

   lector.addEventListener('load', mostrarImagen, false);

   lector.readAsDataURL(imagen);
   localStorage.setItem('imagenPerfil', imagen)
}

document.getElementById('picture')
  .addEventListener('change', procesarArchivo, false)
