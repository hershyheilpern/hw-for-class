var doc= document;
const array=document.getElementsByTagName("button");

/*let arr2=['b1','b2','b3','b4','b5','b6','b7','b8','b9'];*/
let board =["", "", "", "", "", "", "", "", ""]
var drawPoint =9

/*let boardIndex =['b1','b2','b3','b4','b5','b6','b7','b8','b9']*/
;
/*let myButton = document.getElementById('b1','b2','b3','b4','b5','b6','b7','b8','b9');*/
let playerTurn= document.getElementById('turn');
for (var i=0; i <array.length;i++){
   
   console.log(array[i]);
  var boardQ =array[i];
   boardQ.addEventListener("click",testClick);
   /*boardQ.addEventListener("click",checkPlayer);*/
   

 /*var boardStick=board[i];*/
 /*boardStick.addEventListener("click",unpdateThing)*/
}

/*console.log(board);*/
console.log(array);
var player1 ="X";
var player2 ="0";


let currentPlayer= player1;
let gameOn=false;

console.log(gameOn);

console.log(currentPlayer);

console.log(playerTurn);


const winningConditon=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
startGame();

function startGame(){
   gameOn=true;
   let currTurn= document.getElementById("turn");
   currTurn.innerText = currentPlayer + "'s turn";
  
   
   }
  /*function gameIsWinAndFIn(){

  }*/

function testClick() {
   console.log("x");
   let text=board
   
   text.innerText=currentPlayer;
   
   
   /*const cell=event.target;*/
  /*document.write ("X");*/
 
  /*placeMark(cell,playerChoice)*/
  let newElement=document.getElementsByTagName("button").innerHTML= b2
   document.getElementById("div2").appendChild(newElement);
   
   var playerChoice =document.createTextNode(currentPlayer);

  
   
}
/*placeMark(cell,playerChoice);{
   cell.classList.add(playerChoice)
}

/*function add(){
   let=newElement =document.createElement("div")
   document,getElementById("div2").appendChild(newElement);*/


