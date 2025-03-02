export const compose = () => {
    document.addEventListener("keydown", (event) => {
        console.log(event.key);

        const container = document.body;

        // lets check the keys pressed
        if (/^[a-z]$/.test(event.key)) {
            let note = document.createElement('div')
            note.classList.add("note")
            note.textContent = event.key
            let color = `hsl(${Math.floor(Math.random()*360)},${20}%,${50}%)`
            console.log(color);
            
            note.style.background = color
            container.append(note)
        }

        else if (event.key === 'Backspace') {
            let notes = document.querySelectorAll('div')
            if (notes.length > 0) {
                notes[notes.length - 1].remove()
            }

        }

        else if (event.key === 'Escape'){
            let notes = container.querySelectorAll('.note')
            notes.forEach(note => {
                note.remove()
            })
        }
    });
};
