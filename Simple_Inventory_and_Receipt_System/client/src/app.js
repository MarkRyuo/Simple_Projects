import { prices, products } from "../data.js";

/**
 * May list ng products (pang-practice ng arrays).
 * Kayang mag-compute ng total, tax, discount (pang-practice ng arithmetic).
 * May customer name na lalabas sa final message (pang-practice ng strings).
 * Gumagamit ng variables, assignment, at const/let.
 * Magpapakita ng receipt gamit string concatenation at escape characters.
 */

// total, tax, discount

function compute() {
  let subTotal = 0;
  for (let i = 0; i < prices.length; i++) {
    subTotal += prices[i];
  }

  console.log(subTotal);
  // What is your name:  ?
  const customerName = document.getElementById("customerName");
  const value = customerName.value.trim();

  // Get the tax ;
  const tax = 0.12;

  // Get the discount
  const discount = 0.1;

  // compute

  const salesTaxAmount = (tax / 100) * subTotal;
  const totalDiscount = discount * 100;
  const total = subTotal + salesTaxAmount - totalDiscount;

  const receipt = document.getElementById("receipt");

  let arrProduct = "";

  receipt.textContent = `
    Hello Customer!
    Name: ${value} 
    Products = ${products.join(arrProduct)}
    Total: ${total}
    tax: VAT ${tax}
    discount: ${discount.toFixed(2)}%

`;

  console.log(receipt);
}

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", () => compute());
