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
        const circles = document.getElementsByClassName('circle');
        const box = document.querySelector('.box');

        if (circles.length > 0 && box) {
            const lastCircle = circles[circles.length - 1];
            // Get bounding rectangles
            const boxRect = box.getBoundingClientRect();
            const circleSize = 50; // Assuming each circle is 50px
            let x = event.clientX - circleSize / 2;
            let y = event.clientY - circleSize / 2;

            // Check if the circle is already inside the box
            const circleRect = lastCircle.getBoundingClientRect();
            const isInsideBox =
                circleRect.left >= boxRect.left &&
                circleRect.right <= boxRect.right &&
                circleRect.top >= boxRect.top &&
                circleRect.bottom <= boxRect.bottom

            if (isInsideBox) {
                // Prevent movement outside once inside
                if (x < boxRect.left) x = boxRect.left;
                if (x + circleSize > boxRect.right) x = boxRect.right - circleSize;
                if (y < boxRect.top) y = boxRect.top;
                if (y + circleSize > boxRect.bottom) y = boxRect.bottom - circleSize;

                lastCircle.style.background = "var(--purple)";
            }

            // Update position
            lastCircle.style.left = `${x}px`;
            lastCircle.style.top = `${y}px`;
        }
    });
};




