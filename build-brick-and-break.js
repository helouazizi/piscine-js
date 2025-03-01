let intervalid;
let brickount = 1;

export const build = (nb) => {
    if (intervalid) return // if alredy set

    // let set interval
    intervalid = setInterval(() => {
        if (brickount > nb) {  // Stop when reaching `nb`
            clearInterval(intervalid);
            intervalid = null;
            return;
        }
        let x = document.createElement(`div`);
        x.id = `brick-${brickount}`;
        x.innerHTML = "hassan";
        if (brickount % 3 === 2) {
            x.setAttribute("data-foundation", "true")
            console.log("set")
        }
        document.body.append(x);
        brickount++;  // Increment count
    }, 100)




};

export const repair = (...ids) => {
    ids.forEach(id => {
        let brick = document.getElementById(`brick-${id}`)
        if (brick){
            if(brick.hasAttribute("data-foundation")){
                brick.setAttribute("data-repaired", "in progress")
            } else {
                brick.setAttribute("data-repaired", "true");
            }
        }

    })
};

export const destroy = () => {
    if (brickount > 0) {
        let lastBrick = document.getElementById(`brick-${brickount}`);
        if (lastBrick) {
            lastBrick.remove();
            brickount--;
        }
    }
};
