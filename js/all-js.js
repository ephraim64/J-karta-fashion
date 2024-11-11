import { products } from "../js/product.js"
const relatedProducts = document.querySelector('.related_product_container')

let relatedProductHtml = ''

products.forEach((product) => {
   relatedProductHtml += `
      <div class="related_products">
         <img src=${product.image} alt="">
      </div>
   `
})

relatedProducts.innerHTML = relatedProductHtml;