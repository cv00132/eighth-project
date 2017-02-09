//  var productName = orangeRose.results.map(function(item) {
//   return item.Images;
// }).map(function(x) {
//   return x.title;
// });

var productImg = function pictures(){
 for (i=0; i < orangeRose.results.length; i++){
     $(".productGrid").append(`<div class="product"><img src = "${orangeRose.results[i].Images[0].url_170x135}"/></div>`);
   }
 }
 productImg();

 // var productPrice = function pictures(){
 //  for (i=0; i < orangeRose.results.length; i++){
 //      $(".productGrid").html(`<div "${orangeRose.results[i].price}"</div>`);
 //    }
 //  }
 //  productPrice();

// var productPrice = $(orangeRose.map(function(item) {
//   return item.price;
// }))

// var productCreation = $(orangeRose.map(function(item){
// return item.original_creation_tsz}));
