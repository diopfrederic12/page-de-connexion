
function validateAge () {
    var Age= parseInt(document.getElementById("age").value);
    if ( Age>= 18) {
        alert("vous êtes majeur");
    }
    else{
        alert("vous êtes pas majeur");
    }
}