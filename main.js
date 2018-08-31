var container = document.querySelector('.container');

var resetButton = document.querySelector('.reset');
var num = 16;

function createSquares(){
    var createDivSquares = document.createElement('div');
    createDivSquares.classList.add('squares');
  
    container.appendChild(createDivSquares);
}
  

var multiple = num * num;
for (var i = 1; i <= multiple; i++){
    createSquares();
}


var divSquares = document.querySelectorAll('.squares');
var heightWidth = ((512/num) - 2);

  divSquares.forEach((square) => {
    square.style.height = `${heightWidth}`;
    square.style.width = `${heightWidth}`;
  });


divSquares.forEach((square) => {
  square.addEventListener('mouseover', () => {
      square.className += ' ' + 'colorchange';

  });
});

divSquares.forEach((square) => {
    resetButton.addEventListener('click', () => {
        square.className = 'squares';
  });
});