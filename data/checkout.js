import { cart ,checkoutquantity} from "./cart1.js";
import { ordersummary } from "./cart.js";
 

checkoutquantity();
export function radioactivate(){
  document.querySelectorAll('.js-radio').forEach((radio)=>{
    radio.addEventListener('click',()=>{
      let pid1=radio.dataset.pid;
      let sp1=Number(radio.dataset.sp);
      let cartitem1;
      cart.forEach((item)=>{
        if(pid1===item.id){cartitem1=item;}
      })
      cartitem1.shippingCents=sp1;
      ordersummary();
    })
  })
}
radioactivate();