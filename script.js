const fetchSvg = (image) => {
    fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
            const span = document.createElement('span');
            span.innerHTML = response;
            const inlineSvg = span.getElementsByTagName('svg')[0];
            image.parentNode.replaceChild(inlineSvg, image);
            return true;
        })

};


var root = {
    wavecolor: {
        r: 0,
        g: 255,
        b: 0
    },
    font_size: 14,
    matrixspeed: 50
};

var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var konkani = "゠アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽヿ0123456789"
var characters = konkani.split("");
var font_size = root.font_size;
var columns = c.width / font_size;
var gradient = ctx.createLinearGradient(0, 10, 0, 200);
var drops = [];

for (var x = 0; x < columns; x++)
    drops[x] = 1;


function draw() {

    ctx.fillStyle = "rgba(0,0,0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#BBB";
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {

        ctx.fillStyle = "rgba(10,10,10, 1)";
        ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);

        var text = characters[Math.floor(Math.random() * characters.length)];

        ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';


        ctx.fillText(text, i * font_size, drops[i] * font_size);
        drops[i]++;

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
    }
}

setInterval(draw, root.matrixspeed);

