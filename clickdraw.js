(function(parent) {
    
    const div = document.createElement("center");
    parent.appendChild(div);
    
    const width = 600;
    const height = 600;
    
    const canvas = document.createElement("canvas");
    div.appendChild(canvas);
    
    div.appendChild(document.createElement("br"));
    
    const buttonsDiv = document.createElement("div");
    div.appendChild(buttonsDiv);
    
    const toggleButton = document.createElement("button");
    buttonsDiv.appendChild(toggleButton);
    
    const clearButton = document.createElement("button");
    buttonsDiv.appendChild(clearButton);
    
    toggleButton.innerText = "Toggle";
    clearButton.innerText = "Clear";
    
    canvas.style.border = "1px solid black";
    
    canvas.width = width;
    canvas.height = height;
    
    const context = canvas.getContext("2d");
    
    let stateIndex = 0;
    
    const stateFunctions = [
        function redCircle(x, y) {
            const radius = 20;
            context.beginPath();
            context.fillStyle = "red";
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
        },
        function blueSquare(x, y) {
            const width = 40;
            const height = 40;
            context.fillStyle = "blue";
            context.fillRect(x - width * 0.5, y - height * 0.5, width, height);
        },
    ];
    
    toggleButton.addEventListener("click", e => {
        e.preventDefault();
        stateIndex = (stateIndex + 1) % stateFunctions.length;
    });
    
    clearButton.addEventListener("click", e => {
        e.preventDefault();
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
    
    canvas.addEventListener("click", e => {
        e.preventDefault();
        stateFunctions[stateIndex](e.offsetX, e.offsetY);
    });
    
})(document.body);