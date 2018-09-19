var container = document.querySelector('.container');
var divSquares = document.querySelectorAll('.squares');
var resetButton = document.querySelector('.reset');
var num = 16;
var rainbow = document.querySelector('.rainbow');
var mode = false;

function createSquares(){
    var createDivSquares = document.createElement('div');
    createDivSquares.classList.add('squares');
  
    container.appendChild(createDivSquares);
}


function createGrid(num) {
    var multiple = num * num;
    for (var i = 1; i <= multiple; i++){
      createSquares();
    }
    
  document.querySelectorAll('.squares').forEach((square) => {
    var heightWidth = ((512/num) - 2);
    square.style.height = `${heightWidth}px`;
    square.style.width = `${heightWidth}px`;
  });
  
  getColor();
}

rainbow.addEventListener('click', () => {
            mode = true;
            
        getColor();
      });



function getColor(){
    if (mode === true) {
        document.querySelectorAll('.squares').forEach((square) => {
            square.addEventListener('mouseover', () => {
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                var rainbowColor = `rgb(${r}, ${g}, ${b})`;
                square.style.backgroundColor = rainbowColor;
          
            });
          });
    } else {
        document.querySelectorAll('.squares').forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.className += ' ' + 'colorchange';
          
            });
          });
    }
}


    createGrid(num);

    resetButton.addEventListener('click', () => {
        container.innerHTML = ' ';
        num = prompt('How many squares per side do you want the grid? Max 64')
        createGrid(num);
        
            mode = false;
            
      
    });
    

   




