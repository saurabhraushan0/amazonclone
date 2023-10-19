import { cart } from "./cart1.js";


function cartitems(){
  let cartHtml='';
  cart.forEach((items)=>{
    cartHtml+=`
    <div class="product1">
    <div class="d-date">
      Delivery date:Thursday,october 26
    </div>
    <div class="product-info">
      <div class="product-image-container">
        <img src="${items.image}" alt="">
      </div>
      <div>
        <p class="product-name">${items.name}</p>
        <p class="product-price">$${(items.priceCents/100).toFixed(2)}</p>
        <p>Quantity:${items.quantity} <span class="update">Update</span><span class="delete" >Delete</span></p>
      </div>
      <div class="delivery-options">
        <div class="choose-option">Choose a delivery option:</div>
        <div class="option1">
          <input type="radio" name="${items.id}">
          <div>
            <div class="delivery-date">Thursday,October 26</div>
            <div class="shipping-price">FREE Shipping</div>
          </div>
        </div>
        <div class="option2">
          <input type="radio" name="${items.id}">
          <div>
            <div class="delivery-date">Monday,October 23</div>
            <div class="shipping-price">$4.99-Shipping</div>
          </div>
        </div>
        <div class="option3">
          <input type="radio"
          name="${items.id}">
          <div>
            <div class="delivery-date">Thursdau,October 19</div>
            <div class="shipping-price">$9.99-Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })
  document.querySelector('.cart-products').innerHTML=cartHtml;
}

cartitems();