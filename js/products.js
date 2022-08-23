let productsArray = [];
function showProductsList(){
  let htmlContentToAppend = "";
  productsArray.products.map(item => {
    htmlContentToAppend += `
      <div onclick="setCatID(${item.id})" class="list-group-item list-group-item-action cursor-active">
          <div class="row"> 
              <div class="col-3"> 
                  <img src="${item.image}" alt="${item.description}" class="img-thumbnail"> 
              </div> 
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${item.name}</h4> <h4 class="mb-1">US$${item.cost}</h4>
                  </div>
                  <p class="mb-1">${item.description}</p> 
              </div> 
              
          </div> <p class="mb-1"> Vendidos: ${item.soldCount} </p> 
      </div>
      `
  })
 
      document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
  }
document.addEventListener("DOMContentLoaded", function(){
  getJSONData(PRODUCTS_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          productsArray = resultObj.data
          showProductsList()
      }
  });

});
