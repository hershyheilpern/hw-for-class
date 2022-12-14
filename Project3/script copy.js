
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
function buttonClick(id) {
   const clicked = this.document.getElementById("b"+id)
   
   console.log(id)
   if (clicked.textContent != "" || !gameOn) {
       return;
   }
   else {
      board[id] = currentPlayer
       clicked.textContent = currentPlayer
       isWinAndFin();
       if (currentPlayer == "X") {
           currentPlayer = "O"
       }
       else { currentPlayer = "X" }
       if(gameOn){
       playerturn = document.getElementById("turn").textContent = currentPlayer + "'s turn"
       }
       //updateSpace(this,arr1);
   }
}
/*function checkDraw(){
   for( let bean = 0; bean<= arr1.length; bean++){
      if(bean=9){
         console.log("draw");


         return playerTurn.innerHTML = "draw";
      } 
      
      return ;
}
}*/
function greet(){
   console.log(winningCondition);


}
greet();
/*function isWin() {
   return winningCondition.some(
   (condition) => {
   let line = condition.map((idx)=>document.getElementById(boardIndex[idx]).textContent);
   return (line[0] != "" && line.every((x)=>x==line[0]))
   }
   )
   }*/
   /*let gameWon=false;
   if (!gameWon){
      isWinAndFin(false);
   }*/
   function isWinAndFin(){
      let gameWon = false;
      let draw = false;
      winningCondition.map(condition=>{
         console.log(board,condition)
          if (board[condition[0]] == board[condition[1]] && board[condition[1]] == board[condition[2]] && board[condition[0]] != ""){
              gameWon = true;
              gameOn = false;
              console.log("win");
              document.getElementById("turn").innerHTML = currentPlayer + "'s Wins!"
          }else if (board.every((x)=>x!="")){
              draw = true;
              gameOn = false;
              console.log("draw");
              document.getElementById("turn").innerHTML = "draw"

          }
      })
      return [gameWon,draw];
  }



function gameIsOn(){
   playerTurn.textContent= currentPlayer +" 's turn";
   //board.forEach(function (_arr1) {
   //      return board.addEventListener("click", updateSpace);
   //   });
   gameOn=true;
   //checkDraw();



}
