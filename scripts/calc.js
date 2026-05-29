
let res=document.querySelector('.result');
let display=document.querySelector('.result .display');

function elClicked(input) {
    display.innerText+=input;
}

function clearDisplay() {
    display.innerText=" ";
}
function ans(){
    try{
        display.innerText=eval(display.innerText);

    } catch(err){
        display.innerText="ERROR";
       
    } 
}