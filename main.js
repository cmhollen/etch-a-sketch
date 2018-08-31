const container = document.querySelector('.container');


function createSquares(){
    const divSquares = document.createElement('div');
    divSquares.classList.add('squares');
  
    container.appendChild(divSquares);
}
  
var num = 16;
var multiple = num * num;
for (var i = 1; i <= multiple; i++){
    createSquares();
}

var heightWidth = (30 * num) + (num * 2);

container.style.height = `${heightWidth}`;
container.style.width = `${heightWidth}`;