let costos = document.getElementById("Costos")
inputCosto = document.getElementById("inputCosto")
function multipli(){
  if(inputCosto+=2){
    return costos*2
  }
}


getJSONData(PRODUCTS_URL2).then(function (resultObj) {
    console.log(resultObj)
    if (resultObj.status == "ok") {
         let product = resultObj.data;
         let html = ''; 
         console.log(product) 
     
        
                 html += `
                 <div class="container" style="margin-left: 2%;" >

                   <div class="row">
                     <div class="col-md-1" ">
                     <img src="${product.products[3].image}" class="img-thumbnail" > 
                     </div>ㅤ
                     
                     <div class="col-md-1">
                     <b>${product.products[3].name}</b>
                    </div>

                     <div class="col-md-1">
                      <b>${product.products[3].cost}</b>
                     </div>

                     <div class="col-md-1">
                       <input class="form-control-price" onclick="multipli()" id="inputCosto" type="number";"></input>
                     </div>ㅤ

                     <div class="col-md-1" id="Costos">
                      <b>${product.products[3].cost}</b>
                     </div>
                   
                   </div>

                 </div>
               </div>
                 `;
                 document.getElementById("product-venta-container").innerHTML = html;
             }
             
            });
   
            






/* let Costos = document.getElementById("Costos")
let Cantidad = document.getElementById("Cantidad")

function sumatoria(){
   if(Cantidad +=2){
    return Costos*Cantidad
   }
   console.log(Costos)
 } */
