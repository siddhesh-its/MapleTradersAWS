const $ = (selector) => document.querySelector(selector);
const form = document.getElementById('myform');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const emailname = document.getElementById('ename');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const phone = document.getElementById('phone');
const stock = document.getElementById('stock');

//work when we submit the form
form.addEventListener('submit', e => {
    e.preventDefault(); //prevent form being submitted

    validateInputs();
});

//Setting the error into the error div 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//success message
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//Function for validating
const validateInputs = () => {


    let isFirstNameValid = checkFirstname(),
        isLastNameValid = checkLastname(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhoneNumber(),
        isStockValid = checkStockPreference(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isFirstNameValid && isLastNameValid &&
        isEmailValid && isPhoneValid && isStockValid && isPasswordValid && isConfirmPasswordValid;

    if (isFormValid) {
        $('form').submit();
    }


}

//validating first name
const checkFirstname = () => {

    let valid = false;

    const min = 3,
        max = 20;

    const firstnameValue = firstname.value.trim();

    if (!isBlank(firstnameValue)) {
        setError(firstname, 'First name cannot be blank.');
    } else if (!isBetween(firstnameValue.length, min, max)) {
        setError(firstname, `First name must be between ${min} and ${max} characters.`)
    } else {
        setSuccess(firstname);
        valid = true;
    }
    return valid;
};

//validating last name
const checkLastname = () => {

    let valid = false;

    const min = 3,
        max = 20;

    const lastnameValue = lastname.value.trim();

    if (!isBlank(lastnameValue)) {
        setError(lastname, 'Last name cannot be blank.');
    } else if (!isBetween(lastnameValue.length, min, max)) {
        setError(lastname, `Last name must be between ${min} and ${max} characters.`)
    } else {
        setSuccess(lastname);
        valid = true;
    }
    return valid;
};

//validating email
const checkEmail = () => {
    let valid = false;

    const emailValue = emailname.value.trim();
    if (!isBlank(emailValue)) {
        setError(emailname, 'Email cannot be blank.');
    } else if (!isEmailValid(emailValue)) {
        setError(emailname, 'Email is not valid.')
    } else {
        setSuccess(emailname);
        valid = true;
    }
    return valid;
};

//validating password
const checkPassword = () => {
    let valid = false;


    const passwordValue = password.value.trim();

    if (!isBlank(passwordValue)) {
        setError(password, 'Password cannot be blank.');
    } else if (!isPasswordSecure(passwordValue)) {
        setError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        setSuccess(password);
        valid = true;
    }

    return valid;
};

//validating confirm password
const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmpasswordValue = confirmpassword.value.trim();
    const passwordValue = password.value.trim();

    if (!isBlank(confirmpasswordValue)) {
        setError(confirmpassword, 'Please enter the password again');
    } else if (passwordValue !== confirmpasswordValue) {
        setError(confirmpassword, 'The password does not match');
    } else {
        setSuccess(confirmpassword);
        valid = true;
    }

    return valid;
};

//validating phone number
const checkPhoneNumber = () => {

    let valid = false;

    const max = 10;

    const phoneValue = phone.value.trim();

    if (!isBlank(phoneValue)) {
        setError(phone, 'Phone number cannot be blank.');
    } else if (!isPhoneLength(phoneValue.length, max)) {
        setError(phone, `Phone number must be ${max} digits.`)
    } else {
        setSuccess(phone);
        valid = true;
    }
    return valid;
};

//validating stock field
const checkStockPreference = () => {

    let valid = false;

    const stockValue = stock.value.trim();

    if (!isBlank(stockValue)) {
        setError(stock, 'Stock Preference cannot be blank.');
    }
    else {
        setSuccess(stock);
        valid = true;
    }
    return valid;
};

//checking the email pattern
const isEmailValid = (emailname) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailname);
};

//checking if field is blank or not
const isBlank = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isPhoneLength = (length, max) => length != max ? false : true;

//checking password pattern
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

//when the form is submitted email, password,firstname, lastname these values
//will be set in local storage
const tosubmit = () => {


    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var ename = document.getElementById("ename").value;
    var password = document.getElementById("password").value;


    // Storing the value above into localStorage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("ename", ename);
    localStorage.setItem("password", password);

    return true;
}
