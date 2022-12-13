let board=["","","","","","","","",""];
const boardIndex =['b1','b2','b3','b4','b5','b6','b7','b8','b9']
const arr1=document.querySelectorAll(".button");
let playerTurn= document.getElementById('turn');

let currentPlayer= "X";
let gameOn=false;




console.log(arr1);
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
function buttonClick(){
   const boardIndex= this.getAttribute(".button");
   if (arr1[boardIndex] = !""|| !gameOn){
      return;
   }
   else{
      updateSpace(this,arr1);
      isWinAndFin();
   }
   
}
function updateSpace(arr1, boardIndex){
   arr1[boardIndex]=currentPlayer;
   playerTurn.textContent =`${currentPlayer} 's turn`;

}
function greet(){
   console.log(winningConditon);

}
greet();
function isWinAndFin(){
   for (var i=0;i<= 9; i++){

   if(winningCondition[0]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[1]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
else if(winningCondition[2]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[3]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[4]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[5]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[6]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[7]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else if(winningCondition[8]==true){
      document.getElementbyId('turn').innerHTML = currentPlayer + "'s Wins!"
      
   }
   else{
      document.getElementbyId('turn').innerHTML = "draw"
   }
}
}

function gameIsOn(){
   playerTurn.textContent= currentPlayer +" 's turn";
   board.forEach(function (_arr1) {
         return board.addEventListener("click", updateSpace);
      });
   gameOn=true;



}

