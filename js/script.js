let count = 1;
let clickcount = document.getElementById("clickcount");
let btnAddClickCount = document.getElementById("btnAddClickCount");
let dataDiri = document.getElementById("dataDiri");

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}

let changeBackgroundColor = (colour) => {
    btnAddClickCount.style.backgroundColor = colour;
}

let hideForm = () => {
    dataDiri.style.display = "none";
}

let showForm = () => {
    dataDiri.style.display = "block";
}