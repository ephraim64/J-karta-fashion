import { products } from "./product.js";
const displayProducts = document.querySelector('.product_display')

console.log(products);


let productDisplay = '';

products.forEach((product) => {
   productDisplay += `
   <div class="single_product">
        <a href="" class="image_id"><img src=${product.image} alt=""></a>
        <small>${product.name}</small>
    </div>
   `
})

displayProducts.innerHTML = productDisplay;

