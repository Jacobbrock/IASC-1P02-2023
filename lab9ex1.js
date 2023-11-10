var start;
function startTime() {
    start = new Date();
}

function stopTime() {
    var stop = new Date();
    var elapsed = stop.getTime() - start.getTime();
    var seconds = elapsed / 1000;
    alert("You have been on the page for: " + seconds + " seconds");
}
