import { products } from "./products.js";
import { cart } from "./cart1.js";
import { cartquantity } from "./product-html.js";
let searchedcart=[];
function  searchstring(string){
  let string1=string.toLowerCase();
  products.forEach((item)=>{
    let name=(item.name).toLowerCase();
    let result=name.includes(string1)
    if(result){
      searchedcart.push(item);
    }
  })
}

document.querySelector('.search-button').addEventListener('click',()=>{
  searchedcart=[];
  const value=document.querySelector('.search-box').value;
  searchstring(value);
  let productHTML='';
  searchedcart.forEach((product)=>{
  productHTML+=`<div class="product-container">
  <div class="image-container"><img src="${product.image}" alt="">
  </div>
  <div class="name-container">
    ${product.name}
  </div>
  <div class="ratings"><img src="rating-${product.rating.star*10}.png" alt=""> <span class="ratings-number">${product.rating.count}</span>
  </div>
  <div class="product-price">$${product.priceCents/100}</div>
  <div class="product-quantity">
    <select >
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
  <div class="spacer"></div>
  <div class="added">
    <img src="checkmark.png" alt="">
    <span>Added</span>
  </div>
  <button class="add" data-product-id="${product.id}">Add to cart </button>
</div>`;
})
document.querySelector('.main-grid').innerHTML=productHTML;
document.querySelectorAll('.add').forEach((button)=>{
  button.addEventListener('click',()=>{
    const id=button.dataset.productId;
    let product_item;
    
    let item;
    cart.forEach((items)=>{
         if(id===items.id){
          item=items;
         }
    })
    if(item){
      item.quantity++;
    }
    else{
      
      products.forEach((product)=>{
        if(id===product.id){
          product_item=product;
        }
      })
      
      let priceCent=product_item.priceCents;
      cart.push({id:id,quantity:1,image:`${product_item.image}`,name:`${product_item.name}`,price:priceCent,shippingCents:0});
     
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    cartquantity();
  })
})
})