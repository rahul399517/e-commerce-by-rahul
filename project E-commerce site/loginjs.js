function loginpage()
{
    var tx11=String(document.getElementById('emaillogin').value);
    var tx22=String(document.getElementById('passwordlogin').value);
    if(tx11==="admin@admin.com"&& tx22==="123456")
    {
        document.getElementById('message').value = "Login Successfull";
        document.querySelector("#message").style.color="green";
        document.querySelector("#message").style.border="1px solid green";
}
else{
    document.getElementById('message').value = "Incorrect E-mail/Password";
    document.querySelector("#message").style.color="red";
    document.querySelector("#message").style.border="1px solid red";
}
   
}
function loginpagetablet()
{
    var tx11=String(document.getElementById('emaillogintablet').value);
    var tx22=String(document.getElementById('passwordlogintablet').value);
    if(tx11==="admin@admin.com"&& tx22==="123456")
    {
        document.getElementById('messagetablet').value = "Login Successfull";
        document.querySelector("#messagetablet").style.color="green";
        document.querySelector("#messagetablet").style.border="1px solid green";
}
else{
    document.getElementById('messagetablet').value = "Incorrect E-mail/Password";
    document.querySelector("#messagetablet").style.color="red";
    document.querySelector("#messagetablet").style.border="1px solid red";
}
   
}

function loginpagemobile()
{
    var tx11=String(document.getElementById('emailloginmobile').value);
    var tx22=String(document.getElementById('passwordloginmobile').value);
    if(tx11==="admin@admin.com"&& tx22==="123456")
    {
        document.getElementById('messagemobile').value = "Login Successfull";
        document.querySelector("#messagemobile").style.color="green";
        document.querySelector("#messagemobile").style.border="1px solid green";
}
else{
    document.getElementById('messagemobile').value = "Incorrect E-mail/Password";
    document.querySelector("#messagemobile").style.color="red";
    document.querySelector("#messagemobile").style.border="1px solid red";
}
   
}