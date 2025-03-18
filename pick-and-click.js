export const pick = () => {
    let hslvalue;
    //lets create hsl div
    const hslDiv = document.createElement('div')
    hslDiv.classList.add('hsl')
    document.body.append(hslDiv)
    //lets create hue div
    const hueDiv = document.createElement('div')
    hueDiv.classList.add('hue', 'text')
    document.body.append(hueDiv)
    //lets create hue div
    const lumiDiv = document.createElement('div')
    lumiDiv.classList.add('luminosity', 'text')
    document.body.append(lumiDiv)

    /// craete lines 
    // Create the SVG container if it doesn't exist
    let svg = document.getElementById("crosshairSVG");
    if (!svg) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "crosshairSVG");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.position = "fixed";
        svg.style.top = "0";
        svg.style.left = "0";
        svg.style.pointerEvents = "none"; // Prevents interaction
        document.body.appendChild(svg);
    }

    // Create axisX if it doesn't exist
    let axisX = document.getElementById("axisX");
    if (!axisX) {
        axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
        axisX.setAttribute("id", "axisX");
        axisX.setAttribute("stroke", "black");
        axisX.setAttribute("stroke-width", "2");
        svg.appendChild(axisX);
    }
    // lets create axixY if does not exist
    let axisY = document.getElementById('axisY')
    if (!axisY) {
        axisY = document.createElementNS("http://www.w3.org/2000/svg", "line")
        axisY.setAttribute('id', 'axisY')
        axisY.setAttribute('stroke', 'black')
        axisY.setAttribute("stroke-width", "2")
        svg.appendChild(axisY)
    }

    document.addEventListener("mousemove", (event) => {
        let x = event.clientX
        let y = event.clientY
        let hue = Math.round((x / window.innerWidth) * 360)
        let lumi = Math.round((y / window.innerHeight) * 100)
        hslvalue = `hsl(${hue},${50}%,${lumi}%)`
        hslDiv.innerText = hslvalue
        hueDiv.innerText = hue
        lumiDiv.innerText = lumi
        document.body.style.background = hslvalue
        document.body.setAttribute('hsl-data', hslvalue)
        // Move crosshair lines
        axisX.setAttribute("x1", x);
        axisX.setAttribute("y1", "0");
        axisX.setAttribute("x2", x);
        axisX.setAttribute("y2", window.innerHeight);

        axisY.setAttribute("x1", "0");
        axisY.setAttribute("x2", window.innerWidth);
        axisY.setAttribute("y1", y);
        axisY.setAttribute("y2", y);

    })

    document.addEventListener('click', () => {
        let hslvalue = document.body.getAttribute('hsl-data')
        if (hslvalue) {
            navigator.clipboard.writeText(hslvalue)
        }
    })

}