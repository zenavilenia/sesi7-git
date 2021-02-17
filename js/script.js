var count = 1;
var clickcount = document.getElementById("clickcount");

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}