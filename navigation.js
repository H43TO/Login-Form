var x = document.getElementById("html");
var y = document.getElementById("login-form");

function changeContrast() {

    // document.getElementById("html").style.backgroundColor = "#2f313b";
    if (x.style.backgroundColor === "white") {
        changeToDark();
    } else {
        changeToLight();
    }
}

function changeToLight() {
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "rgb(90, 165, 115)";
}

function changeToDark() {
    x.style.backgroundColor = "#2f313b";
    y.style.backgroundColor = "rgb(86, 90, 90)";
}