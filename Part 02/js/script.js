var countClick = function (e) {
    if (e.target.id == "catPic1") {
        output = output1;
    }
    else if (e.target.id == "catPic2") {
        output = output2;
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

var catPic2 = document.getElementById('catPic2');
var output2 = document.getElementById('clickCount2');

var count = 1;

if (catPic1.addEventListener) {
    catPic1.addEventListener('click', countClick, false);
}
if (catPic2.addEventListener) {
    catPic2.addEventListener('click', countClick, false);
}