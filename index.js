const par = document.querySelector('#container');
const sixteen = document.querySelector('#six');
const thirty = document.querySelector('#thirty');
const range = document.querySelector('#range');
const rangeValue = document.querySelector('#rangevalue');
const clear = document.querySelector("#clear");
const color = document.querySelector("#color")

range.addEventListener('input', () => {
  rangeValue.textContent = `${range.value} x ${range.value}`;
});

par.innerHTML = '';
let allChilds = [];


range.addEventListener('input', function addDivs() {
    
    par.innerHTML = '';
    let allChilds = [];

    const ranger = range.value;
    const divNum = ranger * ranger
    
    for (let i = 0; i < divNum; i++) {
   
    let div = document.createElement('div');
   
    div.style.backgroundColor = 'white';
    div.style.height ='100%';
    div.style.width = '100%';
    div.style.boxShadow = '0 0 2px 0'
    
    par.style.display = 'grid';
    par.style.gridTemplateRows = `repeat(${ranger}, 1fr)`;
    par.style.gridTemplateColumns = `repeat(${ranger}, 1fr)`;
    
    par.appendChild(div);
    allChilds.push(div);
    
    const colors = color.value;
    
      div.addEventListener(("mouseover"), () => {
        div.style.backgroundColor = color.value;
      });

       clear.addEventListener(("click"), () => {
        div.style.backgroundColor = null;
    })  

   }
  });




  
