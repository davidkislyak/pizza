document.getElementById("pizza-form").onsubmit = validate;

function validate() {
    var isValid = true;

    //Clear all error messages
    var errors = document.getElementsByClassName("err");

    for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    var first = document.getElementById("firstName").value;
    if (first == "") {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.display = "block";
        isValid = false;
    }

    var last = document.getElementById("lastName").value;
    if (last == "") {
        var errFirst = document.getElementById("err-lname");
        errFirst.style.display = "block";
        isValid = false;
    }

    var size = document.getElementById("size").value;
    if (size === "none") {
        var errSize = document.getElementById("err-size");
        errSize.style.display = "block";
        isValid = false;
    }

    //Check pickup or delivery
    var method = document.getElementsByName("method");
    var methodValue = "";
    for (var i = 0; i < method.length; i++) {
        if (method[i].checked) {
            methodValue = method[i].value;
        }
    }
    if (methodValue == "") {
        var errMethod = document.getElementById("err-method");
        errMethod.style.display = "block";
        isValid = false;
    }

    //Check address if delivery method is selected
    if (methodValue == "delivery") {
        var address = document.getElementById("address").value;
        if (address == "") {
            var errAddress = document.getElementById("err-address");
            errAddress.style.display = "block";
            isValid = false;
        }
    }

    //Check if Toppings are checked
    var toppings = document.getElementsByName("toppings[]");
    var toppingsChecked = 0;
    for (i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingsChecked++;
        }
    }
    if (toppingsChecked <= 0) {
        isValid = false;
    }
    console.log(toppingsChecked);

    return isValid;
}