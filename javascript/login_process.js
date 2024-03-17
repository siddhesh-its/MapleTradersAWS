
const $ = (selector) => document.querySelector(selector);
const formlogin = document.getElementById('loginform');
const emailname = document.getElementById('emaillogin');
const passwordname = document.getElementById('passwordlogin');
var signemail;
var signpassword;
var signFirstName;

//On load this function will be called
function init() {

    //getting the values stored in localstorage in market_tax.js
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var ename = localStorage.getItem("ename");
    var password = localStorage.getItem("password");

    // Writing the value in the document
    //document.getElementById('firstname').innerHTML = fname;
    //document.getElementById('lastname').innerHTML = lname;
    //document.getElementById('email').innerHTML = ename;
    //document.getElementById('password').innerHTML = password;

    signemail = ename;
    signpassword = password;
    signFirstName = fname;


}

const validateInputs = () => {

    let isEmailValid = checkEmailLogin();
    let isFormValid = isEmailValid;
    if (isFormValid) {
        $('formlogin').submit();
    }

}

//validating the email and password field
const checkEmailLogin = () => {

    let valid = false;
    //fetching the value from user
    const emailValue = emailname.value.trim();
    const passwordValue = passwordname.value.trim();

    if (emailValue == signemail && passwordValue == signpassword) //validating if true then welcome.html will open
    {
        valid = true;
        window.location = "welcome.html";
    }
    else {
        alert("Kindly Check your email-Id & Password!!");
    }

};

//when the form is submitted email value will be set in local storage
const tosubmit = () => {
    var emaillogin = document.getElementById("emaillogin").value;

    localStorage.setItem("emaillogin", emaillogin);

    return true;

}

//work when we submit the form
formlogin.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



