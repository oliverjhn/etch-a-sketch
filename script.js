const container = document.getElementById("container");

function spawnSquares(size) {
    for (let yIndex = 0; yIndex < size; yIndex++) {
        //Create Y divs
        const yDiv = document.createElement("div");

        yDiv.className = "yDiv";
        yDiv.id = yIndex.toString();
        container.appendChild(yDiv);

        //Create X divs
        for (let xIndex = 0; xIndex < size; xIndex++) {
            const xDiv = document.createElement("div");

            xDiv.className = "xDiv";
            xDiv.id = xIndex.toString();
            yDiv.appendChild(xDiv);
        }
    }

}

spawnSquares(2);