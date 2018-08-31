const container = document.querySelector('.container');


function createSquares(){
    const createDivSquares = document.createElement('div');
    createDivSquares.classList.add('squares');
  
    container.appendChild(createDivSquares);
}
  
var num = 16;
var multiple = num * num;
for (var i = 1; i <= multiple; i++){
    createSquares();
}

var heightWidth = (30 * num) + (num * 2);

container.style.height = `${heightWidth}`;
container.style.width = `${heightWidth}`;

const divSquares = document.querySelectorAll('.squares');

divSquares.forEach((square) => {
  square.addEventListener('mouseover', () => {
      square.className += ' ' + 'colorchange'
  });
});

