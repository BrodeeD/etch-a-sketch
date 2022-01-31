const cols = 10;
const cont = document.querySelector('.container');

//Make a square grid qith 16 squares/side

function mkGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const divs = document.createElement('div');
        divs.classList.add("grid");
        cont.appendChild(divs);
    }

    document.querySelectorAll('.grid').forEach(function (item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black'
        });
    });
}

mkGrid(cols);
cont.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
cont.style.gridTemplateRows = `repeat(${cols}, 1fr)`;


//Clear grid and generate a new one


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(function (item) {
        cont.removeChild(item)
    })
    totalSquares = Number(prompt("Enter size of canvas (MAX: 100)"))
    if (totalSquares < 1 || totalSquares > 100 || totalSquares % 1 > 0) {
        totalSquares = Number(prompt("Canvas size must be a whole number between 1 and 100, please enter again."))
    }

    mkGrid(totalSquares)
    cont.style.gridTemplateColumns = `repeat(${totalSquares}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${totalSquares}, 1fr)`;
});

//Add instructions
const instBtn = document.querySelector('.instructions');
instBtn.addEventListener('click', () => {
    window.alert("Hover over the sketchpad to begin your drawing. Click 'reset canvas' to make a clear sketchpad and toggle the size. Click 'Rainbow' to switch to a random color when drawing. To reset In and out, refresh the page. ");
})

//Add option for rainbow cursor


const rainbowBtn = document.querySelector('.rainbow');

rainbowBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(function (item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);;

        })
    })
});

//Add option for eraser

const eraseBtn = document.querySelector('.eraser');

eraseBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(function (item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'white'
        });
    });
})

// Add option for regular cursor

const regBtn = document.querySelector('.regular');

regBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(function (item) {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black'
        });
    });
})