export let cart=JSON.parse(localStorage.getItem('cart'));
export function checkoutquantity(){
  let quantity=0;
  cart.forEach((items)=>{
  quantity+=items.quantity;
  })
  const document1=document.querySelectorAll('.checkout-product-quantity');
  document1.forEach((document)=>{document.innerHTML=quantity})
 
}

if(!cart){
  cart=[{image:"images/products/athletic-cotton-socks-6-pairs.jpg",id:'teyre45', name:"Black and Gray Athletic Cotton Socks - 6 Pairs",priceCents:1090,quantity:1}];
}


