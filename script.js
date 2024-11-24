menu.onclick = function () {
    var x = document.getElementById("myHeaderNav");
    if (x.className === "header__nav") {
        x.className += "container";
    } else {
        x.className = "header__nav";
    }
}