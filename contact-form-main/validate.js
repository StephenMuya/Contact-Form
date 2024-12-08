
function validateForm(event) {
    
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const terms = document.getElementById("terms");
    const query = document.querySelector('input[name="query"]:checked');
    
    const errorOne = document.getElementById("firsterror");
    const errorLast = document.getElementById("lasterror");
    const errorEmail = document.getElementById("emailerror");
    const errorMessage = document.getElementById("messageerror");
    const errorTerms = document.getElementById("termserror");
    const errorQuery = document.getElementById("queryerror");
    const submissionAlert = document.getElementsByClassName("alert")[0];


    let checkIfFormIsValid = true;

    
    if (firstName.value === "") {
        errorOne.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorOne.style.display = "none";
    }

    if (lastName.value === "") {
        errorLast.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorLast.style.display = "none";
    }

    if (email.value === "" || !email.validity.valid) {
        errorEmail.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorEmail.style.display = "none";
    }

    if (!query) {
        errorQuery.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorQuery.style.display = "none";
    }

    if (message.value === "") {
        errorMessage.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorMessage.style.display = "none";
    }

    if (!terms.checked) {
        errorTerms.style.display = "inline";
        checkIfFormIsValid = false;
    } else {
        errorTerms.style.display = "none";
    }

    function submitForm(checkIfFormIsValid){
        if (checkIfFormIsValid){
            submissionAlert.style.display = "block";
            setTimeout(() => {
                submissionAlert.style.display = "none";
            }, 800);
        } else{
            submissionAlert.style.display = "none";
        }
    }

    if(checkIfFormIsValid) {
        const form = document.getElementById("container");
        form.reset();
    } 
    
    submitForm(checkIfFormIsValid);

} 









