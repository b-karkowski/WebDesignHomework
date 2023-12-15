var canvas = document.getElementById('myCanvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Title Text
    ctx.font = '80pt Arial';
    ctx.strokeText('BlacKkKlan', 100, 550);
    ctx.textalign(center);
}