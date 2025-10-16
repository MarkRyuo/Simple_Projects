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

const inputAge = () => {
    const customerAge = document.getElementById("customerAge");
    const ageValue = Number(customerAge.value) ;

    return ageValue ;
}


// discount for age of <18 = 2%, age >== 18 to 35 = 5%, age < 35 to 59 = 7%, age > 59 to up = 10%
const baseAge = (age) => {
    let discount ;

    if(age < 18){
        console.log("Your less 18")
        return discount = 2 ;
    } else if(age >= 18 || age >= 35){
        console.log("Your 18 above")
        return discount = 5 ;
    } else if(age < 35 || age <= 59){
        console.log("Your 35 above")
        return discount = 7 ;
    } else if(age > 59){
        console.log("Your 60 above")
        return discount = 10
    }
};

const displayProducts = () => {
    

}




// Main
function computed(){
    let total ;
    const tax = 12 ; // fixed tax by 12%

    const customerName = document.getElementById("customerName");
    const listOfBeefLoof = document.getElementById("listOfBeefLoof");
    const listOfTuna = document.getElementById("listOfTuna");

    const beefLoof = listOfProduct[0].beefLoof ;
    const tuna = listOfProduct[0].tuna;

    beefLoof.forEach((items) => {
        const li = document.createElement("li");
        li.textContent = `${items.item} - ₱${items.price.toFixed(2)}`
        listOfBeefLoof.appendChild(li)
    })

    tuna.forEach((tuna) => {
        const li = document.createElement("li");
        li.textContent = `${tuna.item} - ₱${tuna.price.toFixed(2)}`;
        listOfTuna.appendChild(li);
    })

    const inputAges = inputAge();


}; 

computed()