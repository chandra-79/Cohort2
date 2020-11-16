var isFormValid=false;

function validateUserId(e){
    console.log(e);
    // if(e.target.value==="" || e.target.value===null){
    //     e.target.nextElementSibling.innerHTML = "User id should be filled";                    
    // }
    // else{
    //     e.target.nextElementSibling.innerHTML = "";
    // }
}
document.getElementById('userid').addEventListener("blur",validateUserId)
document.getElementById('userid').addEventListener('keyup',validateUserId)