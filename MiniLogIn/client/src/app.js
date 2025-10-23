import { checkInput } from "./utils/checkUser.utils.js";
import { keyEnterUtils, btnClickUtils } from "./utils/button.utils.js";

// Create a main function for button login
let attempt = 5 ;

function logInHandler(){

    const chkUser = checkInput({id: 'inptName'}) 
    const fakeName = "moda"

    // Create security add Attempt value of 5 
    // loop it, if return false decrement the variablle Attempt

    
    // True
    if(chkUser === fakeName){
        console.log("Hello Admin")
        attempt = 5;
        return;
    }

    attempt--
    console.log(`Attempt Remaining: ${attempt}`)
    
    
    // Check if Attempt has == 0 
    if(attempt <= 0){
        const inptName = document.getElementById("inptName");
        inptName.disabled = true;
        inptName.value = ""
        inptName.placeholder = 'Locked';
        console.log("Account Lock")
    }
    
    
}


btnClickUtils({id:'btnLogIn', funcName: logInHandler })
keyEnterUtils({keyEvent: "keydown" ,idAdEvent: 'inptName', idClick: 'btnLogIn'})