var countClick = function (e) {
    if (e.target.id == "catPic1") {
        output = output1;
    }
    if (output.textContent) {
        output.textContent = parseInt(output.textContent) + count;
    }
    else {
        output.textContent = count;
    }
}
var catPic1 = document.getElementById('catPic1');
var output1 = document.getElementById('clickCount1');

var count = 1;

if (catPic1.addEventListener) {
    catPic1.addEventListener('click', countClick, false);
}