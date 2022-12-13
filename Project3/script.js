
let board=["","","","","","","","",""];
const boardIndex =['b1','b2','b3','b4','b5','b6','b7','b8','b9']
const arr1=document.querySelectorAll(".button");
let playerTurn= document.getElementById('turn');

let currentPlayer= "X";
let gameOn=false;




console.log(arr1);
console.log(playerTurn);


const winningCondition = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
gameIsOn();
function buttonClick(id){
   const clicked = this.document.getElementById(id)
    console.log(id)
   if (clicked.textContent != "" || !gameOn){
      return;
   }
   else{
      clicked.textContent = currentPlayer
       if (currentPlayer == "X") {
            currentPlayer = "O"
       }
       else {currentPlayer = "X"}
       playerturn=document.getElementById("turn").textContent = currentPlayer + "'s turn"
      //updateSpace(this,arr1);
      isWinAndFin();
   }
}
function greet(){
   console.log(winningCondition);

}
greet();
function isWinAndFin(){
   let gameWon=false;

   for (let i=0;i<winningCondition.length;i++){
      const win=winningCondition[i];
     /* const clickA= board[win[0]];
      const clickB=board[ win[1]];
      const clickC =board[win[2]];
      
     
     /* if(clickA=="" ||clickB=="" ||clickC=="" ){
         continue;
      }
      if(clickA== clickB== clickB == clickC){
         gameWon=true;
         break;
      }
   }
   if(gameWon){
      playerTurn.innerText = currentPlayer + " won";
      gameIsOn=false;
   }*/

  // for (var i=0;i<= 9; i++){

   if(winningCondition[0]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[1]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
else if(winningCondition[2]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[3]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[4]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[5]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[6]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[7]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[8]==true){
      this.document.getElementById('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   //else{
   //   this.document.getElementById('turn').innerHTML = "draw"
   //}
}

}


function gameIsOn(){
   playerTurn.textContent= currentPlayer +" 's turn";
   //board.forEach(function (_arr1) {
   //      return board.addEventListener("click", updateSpace);
   //   });
   gameOn=true;



}

