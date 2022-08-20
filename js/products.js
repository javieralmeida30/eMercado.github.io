
function userAction(){
  const response = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json%27');
  const myJson = await response.json(); 
obj = JSON.parse(myJson)
         obj.catID //101
    obj.catName //"Autos"
    productList = obj.products //Lista de productos...

    for (i=0; i<productList.length; i++){
        id = productList[i].id
        nombre= productList[i].nombre
        description= productList[i].description
        cost= productList[i].cost
        currency= productList[i].currency
        soldCount= productList[i].soldCount
        image = productList[i].image
        console.log("product" + description)
        console.log("products" + productList[i])
        
}
}

