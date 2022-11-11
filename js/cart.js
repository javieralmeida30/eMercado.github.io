 


function agregarEnvio(){
  let envio = document.querySelector("input[name=grupo]:checked").value
    total = subtotal+(subtotal*(envio/100))
document.getElementById("footersubtotal").innerHTML = subtotal
document.getElementById("footerenvio").innerHTML = Math.round((subtotal*(envio/100))) 
document.getElementById("footertotal").innerHTML = total

}




function multipli(productIndice){
  let inputCantidad = document.getElementById("inputCantidad").value
  let subtotalhtml = document.getElementById("subtotal")
  let costo = product.products[productIndice].cost
  console.log(product.products[productIndice].cost)
  subtotal = inputCantidad*costo
  subtotalhtml.innerHTML = subtotal
 }

let product = []
let subtotal = 0
let total = 0
getJSONData(PRODUCTS_URL2).then(function (resultObj) {
    console.log(resultObj)
    if (resultObj.status == "ok") {
          product = resultObj.data;
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
                       <input class="form-control-price" onblur="multipli(3)" id="inputCantidad" type="number";"></input>
                     </div>ㅤ

                     <div class="col-md-1" id="subtotal">
                      <b>${product.products[3].cost}</b>
                     </div>
                   
                   </div>

                 </div>
               </div>
                 `;
                 document.getElementById("product-venta-container").innerHTML = html;
             }
             
            });
   
            





