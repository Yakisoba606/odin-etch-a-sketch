const btn = document.getElementById('button');
const resetBtn = document.getElementById('reset-button');
const gridNumber = document.getElementById('get-grid-number');
const container = document.querySelector(".sketch-container");


btn.addEventListener('click',()=>{
    const size = parseInt(gridNumber.value);

    if(size>0 && size<=100){
        makeGrids(size);
    }else{
        alert('Please enter between 1 and 100')
    }
});

resetBtn.addEventListener('click',()=>{
    
    const allGrids = document.querySelectorAll('.sketch-items');

    allGrids.forEach( grid => {
        grid.style.backgroundColor = 'white';
    })
});

function makeGrids(size) {

  container.innerHTML = '';

  const total = size * size;

  for (let i = 1; i <= total; i++) {
    const grid = document.createElement("div");
    grid.classList.add("sketch-items");

    grid.style.width = `${100 / size}%`;
    grid.style.height = `${100 / size}%`;

    grid.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
      grid.style.backgroundColor = `rgb(${r},${g},${b})`;
    });

    container.appendChild(grid);
  }
}

makeGrids(16);
