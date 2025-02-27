let body=document.querySelector("body");
let level=document.querySelector("h3");
let playground=document.querySelectorAll(".playground");
let box=document.querySelectorAll(".box");
let help0tn=document.querySelector(".help");


let started=false;
let memArr=[]
let useArr=[]
let levelNum=0

let num=0;
let clicks =0;
let score= 0;
playground.addEventListener('click',(event)=>{
    if(started){
        if(event.target.classname =='box'){
            console.log("clicked")
            clicks++;
            console.log(clicks)
            useArr.push(event.target.id)
            console.log(useArr);

        }
    }
})
function checker(){
    if(useArr[clicks-1]!=memArr[clicks-1]) {
        level.innerText =`You have lost the game, your score is ${score}`
started =false;
useArr=[];
memArr=[];
clicks=0;
num=0;


    }
}

body.addEventListener('keydown',() => {
    if (started==false){
        started=true ;
        selectBox();
    }
})

function selectBox(){
    level.innerText=`Level ${levelNum} `
    levelNum++;
    flashRand()
    let randVal=Math.floor((Math.random()*4))

    memArr.push(box[randVal].id)
}

function flashRand(randVal){
    box[randVal].classList.add('memFlash')


setTimeout(()=> {
    box[randVal].classList.remove('memFlash')
},[250])}