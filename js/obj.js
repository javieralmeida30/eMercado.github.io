/*/var date={};
let miCallback = datos =>{
    console.log(datos)
    date.vehiculos=datos;
    var html=''
    html+= <h2>Autos</h2>
    date.vehiculos.map(vehiculo=> {
        html+='<img src="' + vehiculo.image+'"></image>'
    })
document.getElementById("autos").innerHTML = html;
}
