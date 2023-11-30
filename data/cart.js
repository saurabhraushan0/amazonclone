import { cart ,checkoutquantity} from "./cart1.js";
import { radioactivate } from "./checkout.js";

export function ordersummary(){
  let itemcost=0;
  let shippingcost=0;
  let totalbeforetax1=0;
  let estimatedtax1=0;
  let ordertotal=0;
  cart.forEach((item)=>{
    itemcost=itemcost+(item.price)*item.quantity;
  })
  itemcost/=100;
  itemcost=itemcost.toFixed(2)
  document.querySelector('.total-price').innerHTML=`$${itemcost}`;

  cart.forEach((items)=>{
    shippingcost+=items.shippingCents;
  })
  shippingcost/=100;
  shippingcost=shippingcost.toFixed(2);
  document.querySelector('.shipping-price1').innerHTML=`$${shippingcost}`;

  totalbeforetax1=(itemcost*100)+(shippingcost*100);
  totalbeforetax1/=100
  totalbeforetax1=totalbeforetax1.toFixed(2);
  document.querySelector('.total-before-tax-price').innerHTML=`$${totalbeforetax1}`;

  estimatedtax1=totalbeforetax1*0.1;
  estimatedtax1=estimatedtax1.toFixed(2);
  document.querySelector('.estimated-tax').innerHTML=`$${estimatedtax1}`;
  
  ordertotal=(estimatedtax1*100)+(totalbeforetax1*100);
  ordertotal/=100;
  ordertotal=ordertotal.toFixed(2);
  document.querySelector('.order-total-price').innerHTML=`$${ordertotal}`;

}


function cartitems(){
  let cartHtml='';
  cart.forEach((items)=>{
    cartHtml+=`
    <div class="product1">
    <div class="d-date">
      Delivery date:Thursday,october 26
    </div>
    <div class="product-info js-product-info-${items.id}">
      <div class="product-image-container">
        <img src="${items.image}" alt="">
      </div>
      <div>
        <p class="product-name">${items.name}</p>
        <p class="product-price">$${(items.price/100).toFixed(2)}</p>
        <p>Quantity:${items.quantity} <span class="update" data-pid=${items.id}>Update</span><input class="quantity-input js-quantity-input-${items.id}"><span class="save-quantity-link" data-pid=${items.id}>Save</span><span class="delete" data-pid=${items.id}>Delete</span></p>
      </div>
      <div class="delivery-options">
        <div class="choose-option">Choose a delivery option:</div>
        <div class="option1">
          <input type="radio" class="radio1 js-radio" data-pid=${items.id} data-sp=0 name="${items.id}">
          <div>
            <div class="delivery-date">Thursday,October 26</div>
            <div class="shipping-price">FREE Shipping</div>
          </div>
        </div>
        <div class="option2">
          <input type="radio" class="radio2 js-radio" data-pid=${items.id} data-sp=499 name="${items.id}">
          <div>
            <div class="delivery-date">Monday,October 23</div>
            <div class="shipping-price">$4.99-Shipping</div>
          </div>
        </div>
        <div class="option3">
          <input type="radio" class="radio3 js-radio" data-pid=${items.id} data-sp=999
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
  document.querySelector('.cart-products').innerHTML=cartHtml;}
  
  cartitems();
  checkoutquantity();
 
  let deleted=()=>{
    document.querySelectorAll('.delete').forEach((link)=>{
      link.addEventListener('click',()=>{
      console.log('delete');
      let pid=link.dataset.pid;
      let cartitem;
      let index=0;
      for(let i=0;i<cart.length;i++){
          if(cart[i].id===pid){
            cartitem=cart[i];
            break;
          }else{index++;}
      }
     let cartitemquantity=cartitem.quantity;
     let quantity=0;
      cart.forEach((items)=>{
      quantity+=items.quantity;
      })
      quantity-=cartitemquantity;
      document.querySelector('.js-cart-quantity').innerHTML=quantity;
      cart.splice(index,1);
      localStorage.setItem('cart',JSON.stringify(cart));  
      cartitems();
      checkoutquantity();
      radioactivate();
      ordersummary();
      deleted();
      update();
    })
  })
  }
  deleted();
let update =()=>{
  document.querySelectorAll('.update').forEach((update)=>{
    update.addEventListener('click',()=>{
      const pid= update.dataset.pid;
      const productcontainer=document.querySelector(`.js-product-info-${pid}`);
      productcontainer.classList.add('is-editing-quantity');
    })
  })
} 
update();

let saved=()=>{
  document.querySelectorAll('.save-quantity-link').forEach((save)=>{
    save.addEventListener('click',()=>{
      console.log('save');
      const pid= save.dataset.pid;
      const productcontainer=document.querySelector(`.js-product-info-${pid}`);
      
      const value=Number(document.querySelector(`.js-quantity-input-${pid}`).value);
      let item;
      cart.forEach((items)=>{
        if(pid===items.id){item=items;}
      })
      item.quantity=value;
      localStorage.setItem('cart',JSON.stringify(cart));
      productcontainer.classList.remove('is-editing-quantity');
      cartitems();
      ordersummary();
      radioactivate();
      checkoutquantity();
      deleted();
      update();
      saved();
    })
  })
  }
saved();









