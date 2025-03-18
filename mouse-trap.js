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
        const circlesize = 50
        let x = event.clientX - circlesize / 2
        let y = event.clientY - circlesize / 2


        if (circles.length > 0 && box) {
            /// lets get the the recdom 
            const lastCircle = circles[circles.length - 1]
            const circlerec = lastCircle.getBoundingClientRect()
            const boxrec = box.getBoundingClientRect()
            const isinside = (
                circlerec.left >= boxrec.left &&
                circlerec.right <= boxrec.right &&
                circlerec.top >= boxrec.top&&
                circlerec.bottom <= boxrec.bottom
            )

            if (isinside){
                if(x<boxrec.left) x = boxrec.left 
                if (x +circlesize> boxrec.right) x = boxrec.right-circlesize
                if(y+circlesize > boxrec.bottom) y = boxrec.bottom -circlesize
                if(y < boxrec.top) y = boxrec.top 
                lastCircle.style.background = "var(--purple)"
            }

            // Update position
            lastCircle.style.left = `${x}px`;
            lastCircle.style.top = `${y}px`;
        }
    });
};




