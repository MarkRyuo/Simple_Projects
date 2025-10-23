


export function btnClickUtils({id, funcName}){
    
    const idName = document.getElementById(id);

    idName.addEventListener("click", () => {
        funcName() ;
    })
}


export function keyEnterUtils({keyEvent,idAdEvent, idClick }){

    const idAdEventListener = document.getElementById(idAdEvent);
    const idbyClick = document.getElementById(idClick)

    idAdEventListener.addEventListener(keyEvent, (e) => {
        if(e.key === "Enter"){
            e.preventDefault()
            idbyClick.click();
        }
    })
}