import { products } from "./product.js";
const shopProducts = document.querySelector('.shop_display')

console.log(products);


let shopDisplay = '';

products.forEach((product) => {
   shopDisplay += `
    <div class="single_product">
         <a href="" class="image_id"><img src=${product.image} alt=""></a>
         <div class="single_product_detail">
            <p><small>Name</small>: ${product.name}</sp>
            <p><small>Price</small>: ${product.price}</p>
         </div>
      </div>
   `
})

shopProducts.innerHTML = shopDisplay;

