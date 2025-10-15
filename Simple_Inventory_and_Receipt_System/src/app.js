import listOfProduct from "../data.js";

/**
 * May list ng products (pang-practice ng arrays). 
 * Kayang mag-compute ng total, tax, discount (pang-practice ng arithmetic).
 * May customer name na lalabas sa final message (pang-practice ng strings).
 * Gumagamit ng variables, assignment, at const/let.
 * Magpapakita ng receipt gamit string concatenation at escape characters.
 */


// total, tax, discount

// sa discount mag base tayo sa age;
// discount for age of <18 = 2%, age >== 18 to 35 = 5%, age < 35 to 59 = 7%, age > 59 to up = 10%
const baseAge = (discount) => {
    const customerAge = document.getElementById("customerAge");
    const age = Number(customerAge.value) ;

    if(age < 18){
        return discount = 2 ;
    } else if(age >= 18 || age >= 35){
        return discount = 5 ;
    } else if(age < 35 || age <= 59){
        return discount = 7 ;
    } else if(age > 59){
        return discount = 10
    }
};




// Main
function computed(){
    let total ;
    const tax = 12 ; // fixed tax by 12%
    let discount;

    const customerName = document.getElementById("customerName");

}; 