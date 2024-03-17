function init() {
    // Retrieving the text input's value which was stored into localStorage
    var emaillogin = localStorage.getItem("emaillogin");
    var name = emaillogin.indexOf("@");
    var user_name = emaillogin.slice(0, name);

    document.getElementById('welcome-text').innerHTML = user_name;
}