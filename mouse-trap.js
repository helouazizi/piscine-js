export const setBox = () => {
    let box = document.createElement('div');
    box.classList.add('box');
    document.body.append(box);
};

export const createCircle = () => {
    document.addEventListener("click", (event) => {
        let div = document.createElement('div');
        div.classList.add('circle');
        div.style.background = "white";
        div.style.position = 'absolute'; // Added absolute positioning
        
        // Calculate position with respect to viewport
        const x = event.clientX - 25;
        const y = event.clientY - 25;
        
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        document.body.append(div);
    });
};

export const moveCircle = () => {
    document.addEventListener("mousemove", (event) => {
        //console.log("X:", event.clientX, "Y", event.clientY);
        const circles = document.getElementsByClassName('circle');
        const box = document.querySelector('.box');
        if (circles.length > 0) {
            const lastCircle = circles[circles.length - 1];
            
            // Calculate position with respect to viewport
            let x = event.clientX - 25;
            let y = event.clientY - 25;

            // Get bounding rectangles
            const circleRect = lastCircle.getBoundingClientRect();
            const boxRect = box.getBoundingClientRect();

            // Check if circle is inside box boundaries
            if (circleRect.left >= boxRect.left + 1 && 
                circleRect.right <= boxRect.right - 1 && 
                circleRect.top >= boxRect.top + 1 && 
                circleRect.bottom <= boxRect.bottom - 1) {
                
                // Circle is trapped - prevent further movement
                lastCircle.style.background = 'var(--purple)';
                
                // Store final position
                // lastCircle.dataset.trappedX = circleRect.left;
                // lastCircle.dataset.trappedY = circleRect.top;
                
                // Remove event listener to prevent further movement
                document.removeEventListener("mousemove", moveCircle);
                return;
            }

            // Only update position if circle isn't trapped
            lastCircle.style.left = `${x}px`;
            lastCircle.style.top = `${y}px`;
        }
    });
};