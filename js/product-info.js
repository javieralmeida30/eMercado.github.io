let prodId= localStorage.getItem("productID")
console.log(prodId)

getJSONData(PRODUCT_INFO_URL + prodId + EXT_TYPE).then(function (resultObj) {
    console.log(resultObj)
    if (resultObj.status == "ok") {
         let product = resultObj.data;
         let html = '';  
                 html += `
                 <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                 <div class="row"> 
                     <div class="col-3"> 
                         <img src="${product.images[0]}" alt="${product.description}" class="img-thumbnail"> 
                     </div> 
                     <div class="col">
                         <div class="d-flex w-100 justify-content-between">
                             <h4 class="mb-1">${product.name}</h4> <h4 class="mb-1">US$${product.cost}</h4>
                         </div>
                         <p class="mb-1">${product.description}</p> 
                     </div> 
                     
                 </div> <p class="mb-1"> Vendidos: ${product.soldCount} </p> 
             </div>
                 `;
                 document.getElementById("product-info-container").innerHTML = html;
             }
             
            });
         
getJSONData(PRODUCT_INFO_COMMENTS_URL + prodId + EXT_TYPE).then(function (resultObj) {
   console.log(resultObj)
   if (resultObj.status == "ok") {
        let comments = resultObj.data;
        let html = '';
        if (comments.length > 0) {
            comments.forEach(function (comment) {
                let productScore = comment.score;
                let score = ''
                for (let i = 1; i <= productScore; i++) {
                    score += '<i class="far fa-star checked"></i>';
                }
                for (let i = productScore + 1; i <= 5; i++) {
                    score += '<i class="far fa-star"></i>'
                }
                html += `
                <li class= "media border list-group-item">
                    <div class="media-body">
                        <label class= "mt-0"><strong>${comment.user}</strong>
                        <span class="mute"> - ${comment.dateTime}</span>
                        <span> - ${score}</span>
                        </label>
                        <br>
                        <label class="small">${comment.description}</label>
                </div>
                </li>
                `;
            });
            document.getElementById("product-comment-container").innerHTML = html;
        }
    }
})
function guardarComentario(){
let comentarioTexto = document.getElementById("comentarioTexto").value
let comentarioScore = document.getElementById("comentarioScore").value
let fecha = new Date()
let usuarioPrincipal = localStorage.usuario
console.log(comentarioTexto,comentarioScore,usuarioPrincipal)
let productScore = comentarioScore;
let score = ''
for (let i = 1; i <= productScore; i++) {
    score += '<i class="far fa-star checked"></i>';
}
for (let i = productScore + 1; i <= 5; i++) {
    score += '<i class="far fa-star"></i>'
}
let html =document.getElementById("product-comment-container").innerHTML
html+=`
<li class= "media border list-group-item">
    <div class="media-body">
        <label class= "mt-0"><strong>${usuarioPrincipal}</strong>
        <span class="mute"> - ${fecha.getDay()} ${fecha.getMonth()} ${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()} </span>
        <span> - ${score}</span>
        </label>
        <br>
        <label class="small">${comentarioTexto}</label>
</div>
</li>
`;
document.getElementById("product-comment-container").innerHTML = html
}
