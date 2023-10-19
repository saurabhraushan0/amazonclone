export const cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=[{image:"images/products/athletic-cotton-socks-6-pairs.jpg",name:"Black and Gray Athletic Cotton Socks - 6 Pairs",priceCents:1090,quantity:1}];
}


