const container = document.querySelector('#container');
const images = document.querySelector('.imgCont');

images.lastElementChild.addEventListener('click', pickChartSize)

defaultGrid(); 
function defaultGrid(){
    for(let i=0; i<10; i++){
        for (let q=0; q<10; q++){
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            container.appendChild(gridSquare);
        }
    }

    container.style.gridTemplateColumns = `repeat(10, 1fr)`;
    container.style.gridTemplateRows = `repeat(10, 1fr)`;
}

function pickChartSize(){
    document.querySelectorAll('.gridSquare').forEach(function(e){
        e.remove();
    });
    let chartSize = prompt('Pick a size: ');
    if (chartSize > 100){
        alert("100 is the max size")
        pickChartSize();
    }
    else if (chartSize == undefined || chartSize <= 0){
        alert("Please pick a valid size.")
        pickChartSize();
    }
    else{
        for(let i=0; i<chartSize; i++){
            for (let q=0; q<chartSize; q++){
                let gridSquare = document.createElement('div');
                gridSquare.classList.add('gridSquare');
                container.appendChild(gridSquare);
            }
        }
        container.style.gridTemplateColumns = `repeat(${chartSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${chartSize}, 1fr)`;
    }
}

container.addEventListener('click', loopClick);
images.firstElementChild.addEventListener('click', clearAll);

// Stops tracing
function removeFunc(){
    container.removeEventListener('mouseover', tracePen);
}

// Allows user to sketch along with mouse movement
function tracePen(ev){
    if (ev.target.classList == "gridSquare"){
        ev.target.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
    }
}

// Allows you to continue tracing on command
function loopClick(){
    container.addEventListener('mouseover', tracePen);
    container.addEventListener('click', removeFunc, {once: true});
}

// Clears the entire board
function clearAll(){
    document.querySelectorAll('.gridSquare').forEach(function(e){ 
        e.style.background = 'white';
    });
}
