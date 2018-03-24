var countClick = function (e) {
    if (e.target.id == "catPic") {
        output = output1;
    }
    if (output.textContent) {
        output.textContent = parseInt(output.textContent) + count;
    }
    else {
        output.textContent = count;
    }
}
var e = document.getElementById('catPic');
var output1 = document.getElementById('clickCount');

var count = 1;

if (e.addEventListener) {
    e.addEventListener('click', countClick, false);
}