let root = document.documentElement;
let borderSize = getComputedStyle(root).getPropertyValue('--border-size');
const container = document.getElementById("container");
const numberInput = document.getElementById("number-input");
const refresh = document.getElementById("refresh");

function spawnSquares(size) {
    if (borderSize == '0px solid') {
        container.style.border = "1px solid";
    }
    for (let yIndex = 0; yIndex < size; yIndex++) {
        //Create Y divs
        const yDiv = document.createElement("div");

        yDiv.className = "drawDiv yDiv";
        yDiv.id = yIndex.toString();
        container.appendChild(yDiv);

        if (yIndex === size - 1) {
            root = document.documentElement;
            borderSize = getComputedStyle(root).getPropertyValue('--border-size');
            yDiv.style.borderBottom = borderSize;
        }

        //Create X divs
        for (let xIndex = 0; xIndex < size; xIndex++) {
            const xDiv = document.createElement("div");

            xDiv.className = "drawDiv xDiv";
            xDiv.id = xIndex.toString();
            xDiv.addEventListener("mouseover", colorSquare);
            yDiv.appendChild(xDiv);
        }
    }

}

function colorSquare(event) {
    let target = event.target;
    target.style.backgroundColor = "black";
}

numberInput.addEventListener("input", (e) => {
    if (e.target.value > 100) {
        e.target.value = 100;
    }
    if (e.target.value < 1) {
        e.target.value = 1
    }
    container.replaceChildren();
    spawnSquares(e.target.value);
});

refresh.addEventListener("click", (e) => {
    container.replaceChildren();
    spawnSquares(numberInput.value);
});


spawnSquares(16);
numberInput.value = 16;