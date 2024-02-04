const container = document.getElementById("container");

function spawnSquares(size) {
    for (let yIndex = 0; yIndex < size; yIndex++) {
        //Create Y divs
        const yDiv = document.createElement("div");
        yDiv.className = "yDiv";
        yDiv.id = yIndex.toString();
        container.appendChild(yDiv);

        //Create X divs

    }

}

spawnSquares(2);