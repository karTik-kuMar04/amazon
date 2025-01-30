import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadProducts, loadProductsfetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {

  try{
    
    await loadProductsfetch()
    await new Promise((resolve, reject)=>{  
      loadCart(()=>{
        resolve();
      });
    })

  } catch(error){
    console.log('unexpected error. please try again later.')
  }
  renderOrderSummary();
  renderPaymentSummary();
  return
}
loadPage()
/* 
Promise.all([
  loadProductsfetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then((value) => {
  console.log(value)
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    
    resolve()
  });
}).then(()=> {
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(()=>{
  
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  })
});
*/

