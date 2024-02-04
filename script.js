const container = document.getElementById("container");

function spawnSquares(size) {
    for (let yIndex = 0; yIndex < size; yIndex++) {
        //Create Y divs
        const yDiv = document.createElement("div");

        yDiv.className = "drawDiv yDiv";
        yDiv.id = yIndex.toString();
        container.appendChild(yDiv);

        if (yIndex === size - 1) {
            yDiv.style.cssText = "border-bottom: 0.5px solid";
        }
        
        //Create X divs
        for (let xIndex = 0; xIndex < size; xIndex++) {
            const xDiv = document.createElement("div");

            xDiv.className = "drawDiv xDiv";
            xDiv.id = xIndex.toString();
            // if (xIndex === size - 1) {
            //     xDiv.style.cssText = "border-right: 0.5px solid";
            // }
            yDiv.appendChild(xDiv);
        }
    }

}

function colorSquare(params) {

}

spawnSquares(16);