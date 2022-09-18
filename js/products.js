let productsArray = '';
cantidadMinima = document.getElementById("rangoMinimo");
cantidadMaxima = document.getElementById("rangoMaximo")


function showProductsList(){
  let htmlContentToAppend = "";
  productsArray.products.map(item => {
    htmlContentToAppend += `
      <div onclick="setProductID(${item.id})" class="list-group-item list-group-item-action cursor-active">
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



  function ordenarProducts(cantidadMinima, cantidadMaxima){
    let htmlContentToAppend="";
    if(cantidadMinima.value && cantidadMaxima.value){
  const ordenLista = productsArray.products.filter((element) => {
if(element.cost <= cantidadMaxima.value && element.cost >= cantidadMinima.value){
    return element;
            }
        });
ordenLista.map((element) => {
    htmlContentToAppend+= `
    <div onclick="setCatID(${element.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row"> 
            <div class="col-3"> 
                <img src="${element.image}" alt="${element.description}" class="img-thumbnail"> 
            </div> 
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${element.name}</h4> <h4 class="mb-1">US$${element.cost}</h4>
                </div>
                <p class="mb-1">${element.description}</p> 
            </div> 
            
        </div> <p class="mb-1"> Vendidos: ${element.soldCount} </p> 
    </div>
    `;
})

    document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
}
else if(cantidadMinima.value && !cantidadMaxima.value){
        const ordenLista = productsArray.products.filter((element) => {
if(element.cost >= cantidadMinima.value){
    return element;
            }
        });
ordenLista.map((element) => {
    htmlContentToAppend+= `
    <div onclick="setCatID(${element.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row"> 
            <div class="col-3"> 
                <img src="${element.image}" alt="${element.description}" class="img-thumbnail"> 
            </div> 
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${element.name}</h4> <h4 class="mb-1">US$${element.cost}</h4>
                </div>
                <p class="mb-1">${element.description}</p> 
            </div> 
            
        </div> <p class="mb-1"> Vendidos: ${element.soldCount} </p> 
    </div>
    `;
})

    document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
}
else if(!cantidadMinima.value && cantidadMaxima.value) {
    const ordenLista = productsArray.products.filter((element) => {
        if (element.cost <= cantidadMaxima.value) {
          return element;
        }
      });
      ordenLista.map((element) => {
        htmlContentToAppend+= `
        <div onclick="setCatID(${element.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row"> 
                <div class="col-3"> 
                    <img src="${element.image}" alt="${element.description}" class="img-thumbnail"> 
                </div> 
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${element.name}</h4> <h4 class="mb-1">US$${element.cost}</h4>
                    </div>
                    <p class="mb-1">${element.description}</p> 
                </div> 
                
            </div> <p class="mb-1"> Vendidos: ${element.soldCount} </p> 
        </div>
        `;
      });
  
      document.getElementById("product-list-container").innerHTML = htmlContentToAppend;

  }
    
}

function clearFilter(cantidadMinima, cantidadMaxima){
  cantidadMinima.value = "" ;
   cantidadMaxima.value = "";
   showProductsList()
}



document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data
            showProductsList(productsArray);
        }
    });
  });
  


  function sortPorMenorR(a,b){
    return a.soldCount - b.soldCount
  }
  function sortPorMayorR(a,b){
    return b.soldCount - a.soldCount
  }
  function sortAndShow1(){
    showProductsList(productsArray.products.sort(sortPorMayorR));
  }

  function sortAndShow2(){
    showProductsList(productsArray.products.sort(sortPorMenorR));
  }
  function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}
