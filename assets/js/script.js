function date() {
    var today = new Date();
    var day = today.getDate();
    if(day < 10) {
        day = '0'+day;
    }
    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0'+month;
    }
    var year = today.getFullYear();
    var date = year+'-'+month+'-'+day;
    document.getElementById("dob").setAttribute("max", date);
}


function CheckValidate() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementsByName('gender');
    var perecentage = document.getElementById('percentage').value;


    if(name == "") {
        document.getElementById("errorname").innerHTML = "**Please Fill the field!";
        return false;
    }
    else {
        document.getElementById("errorname").innerHTML = "";
    }

    if(!isNaN(name)) {
        document.getElementById("errorname").innerHTML = "**Only Characters are allowed!";
        return false;
    }
    else {
        document.getElementById("errorname").innerHTML = "";
    }




    if(dob == "") {
        document.getElementById("errordate").innerHTML = "**Please Fill the field!";
        return false;
    }
    else {
        document.getElementById("errordate").innerHTML = "";
    }




    if(mobile == ""){
        document.getElementById("errormobile").innerHTML = "**Please Fill the field!";
        return false;
    }
    else {
        document.getElementById("errormobile").innerHTML = "";
    }

    if(isNaN(mobile)){
        document.getElementById("errormobile").innerHTML = "**Only Digits are allowed!";
        return false;
    }
    else {
        document.getElementById("errormobile").innerHTML = "";
    }

    if((mobile.length < 10)){
        document.getElementById("errormobile").innerHTML = "**Only 10 Digits are allowed!";
        return false;
    }
    else {
        document.getElementById("errormobile").innerHTML = "";
    }


    

    if(email == ""){
        document.getElementById("erroremail").innerHTML = "**Please Fill the field!";
        return false;
    }
    else {
        document.getElementById("erroremail").innerHTML = "";
    }




    if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById("errorgender").innerHTML = "**Please select an option!";
        return false;
    }
    else {
        document.getElementById("errorgender").innerHTML = "";
    }




    if(perecentage == ""){
        document.getElementById("errorpercentage").innerHTML = "**Please Fill the field!";
        return false;
    }
    else {
        document.getElementById("errorpercentage").innerHTML = "";
    }

    if(isNaN(perecentage)){
        document.getElementById("errorpercentage").innerHTML = "**Only Digits are allowed!";
        return false;
    }
    else {
        document.getElementById("errorpercentage").innerHTML = "";
    }

    if(perecentage > 100){
        document.getElementById("errorpercentage").innerHTML = "**Invalid Percentage!";
        return false;
    }
    else {
        document.getElementById("errorpercentage").innerHTML = "";
    }
}