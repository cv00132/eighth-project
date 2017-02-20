function getResults () {
 for (i=0; i < orangeRose.results.length; i++){
    var image = orangeRose.results[i].Images[0].url_170x135;
    var title = orangeRose.results[i].title;
    var shop = orangeRose.results[i].Shop.shop_name;
    var price = orangeRose.results[i].price;
    var link = orangeRose.results[i].url;

    var itemResult = `<div class="product">

    <div class="image">
    <a href="${link}">
    <img src="${image}"/>
    <div class="sprite"></div>
    </a>
    </div>
    <div class="title">
    <a href="#">${title}</a>
    </div>
    <div class="shop">
    <a href="https://www.etsy.com/shop/${shop}">${shop}</a>
     <span class="price">$${price}</span>
     </div>

    </div>`

    $(".productGrid").append(itemResult);
  }
}

getResults();

$("#ad-copy").html("Get top trends and fresh editors' picks in your inbox with Etsy Finds.")
$("#number-results").html("(" + orangeRose.count + " Results)");
// var productPrice = $(orangeRose.map(function(item) {
//   return item.price;
// }))

// var productCreation = $(orangeRose.map(function(item){
// return item.original_creation_tsz}));
