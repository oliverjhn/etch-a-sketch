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

// function hexToRgbA(hex) {
//     var c;
//     if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//         c = hex.substring(1).split('');
//         if (c.length == 3) {
//             c = [c[0], c[0], c[1], c[1], c[2], c[2]];
//         }
//         c = '0x' + c.join('');
//         return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
//     }
//     throw new Error('Bad Hex');
// }

function hexToRgbA(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function colorSquare(event) {
    let target = event.target;
    if (!target.classList.contains("hasColor")) {
        target.classList.add("hasColor");
        let currentColor = target.style.backgroundColor;
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        target.style.backgroundColor = hexToRgbA("#" + randomColor);

        let rgbaValues = currentColor.match(/\d+/g);
        // rgbaValues[2] = 0.1;

    }
    // console.log(target.style.opacity);
    // console.log(target.style.opacity + 0.1)
    // target.style.opacity = target.style.opacity + 0.1;
    // console.log(target.style.opacity);
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