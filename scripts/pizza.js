document.getElementById("pizza-form").onsubmit = validate;

function validate() {
    var isValid = true;

    //Clear all error messages
    var errors = document.getElementsByClassName("err");

    for (var i=0; i<errors.length; i++) {
        errors[i].style.visibility = "hidden";
    }

    var first = document.getElementById("firstName").value;
    if (first == "") {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.visibility = "visible";
        isValid = false;
    }

    var last = document.getElementById("lastName").value;
    if (last == "") {
        var errFirst = document.getElementById("err-lname");
        errFirst.style.visibility = "visible";
        isValid = false;
    }

    // var first = document.getElementById("address").value;
    // if (first == "") {
    //     var errFirst = document.getElementById("err-address");
    //     errFirst.style.visibility = "visible";
    //     isValid = false;
    // }

    var size = document.getElementById("size").value;
    if (size === "none") {
        var errSize = document.getElementById("err-size");
        errSize.style.visibility = "visible";
        isValid = false;
    }

    if(!isValid) { return false; }
}