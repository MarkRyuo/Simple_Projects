

// utils 
export const checkInput = ({id}) => {
    // get the input id 
    const idName = document.getElementById(id) ;

    // get the value of inptName, declare new variable for inptName
    const idNameValue = idName.value.trim() ; // declaring new variable named inptNameValue
    
    // Checking inptValue if have a value 
    if(!idNameValue) return false;

    // return the inptNameValue if true 
    return idNameValue ;
}


// Usage?
//{id: "inptName"}