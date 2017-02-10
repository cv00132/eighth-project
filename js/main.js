//  var productName = orangeRose.results.map(function(item) {
//   return item.Images;
// }).map(function(x) {
//   return x.title;
// });

// var productImg = function pictures(){
//  for (i=0; i < orangeRose.results.length; i++){
//      $(".productGrid").append(`<div class="product"><img src = "${orangeRose.results[i].Images[0].url_170x135}"/></div>`);
//    }
//  }
//
//  var productPrice = function pictures(){
//   for (i=0; i < orangeRose.results.length; i++){
//       $(".productGrid").append(`<div "${orangeRose.results[i].price}"</div>`);
//     }
//   }

function getResults () {
 for (i=0; i < orangeRose.results.length; i++){
    var image = orangeRose.results[i].Images[0].url_170x135;
    var title = orangeRose.results[i].title;
    var shop = orangeRose.results[i].Shop.shop_name;
    var price = orangeRose.results[i].price;
    var link = orangeRose.results[i].url;

    var itemResult = `<div class="product">

    <div class="image"><a href="link" ><img src="${image}"/></a></div>
    <div class="title"><a href="#">${title}</a></div>
    <div class="shop"><a href="#">${shop}</a>
     <span class="price">${price}</span></div>

    </div>`

    $(".productGrid").append(itemResult);
  }
}

getResults();

// var productPrice = $(orangeRose.map(function(item) {
//   return item.price;
// }))

// var productCreation = $(orangeRose.map(function(item){
// return item.original_creation_tsz}));
