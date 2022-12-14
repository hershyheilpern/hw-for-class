
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
   const clicked = this.document.getElementById(id)
   console.log(id)
   if (clicked.textContent != "" || !gameOn) {
       return;
   }
   else {
       clicked.textContent = currentPlayer
       isWinAndFin();
       if (currentPlayer == "X") {
           currentPlayer = "O"
       }
       else { currentPlayer = "X" }
       playerturn = document.getElementById("turn").textContent = currentPlayer + "'s turn"
       //updateSpace(this,arr1);
   }
}
function checkDraw(){
   for( let bean = 0; bean<= arr1.length; bean++){
      if(bean=9){
         console.log("draw");


         return playerTurn.innerHTML = "draw";
      } 
      
      return ;
}
}
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
   
   
   

   for (var i=0;i<=winningCondition.length; i++){
      winningCondition[i];
      let winTrue =true;

      //let winTrue=true;
      console.log(winningCondition[0]);
      
     const  winAnno=playerTurn.innerHTML = currentPlayer + "'s Wins!";
      



   if(winningCondition[0]==winTrue){
      console.log("win");
      wintrue=gameWon;
      gameOn=false;


      return winAnno;
      
   }
   else if(winningCondition[1]==winTrue){
      console.log("win");

      return winAnno;
      
   }
else if(winningCondition[2]==winTrue){
   console.log("win");

   return winAnno;
      
   }
   else if(winningCondition[3]==winTrue){
      console.log("win");

      return winAnno;
      
   }
   else if(winningCondition[4]==winTrue){
      console.log("win");

      return winAnno;
      
   }
   else if(winningCondition[5]==winTrue){
      console.log("win");

      return winAnno;
      
   }
   else if(winningCondition[6]==winTrue){
      console.log("win");

      return winAnno;
      
   }
   else if(winningCondition[7]==winTrue){
      console.log("win");
      return winAnno;
      
   }
   
      
   
      //else{
         
         /*wintrue=false
      //while( let g = 0; g< board.length; g++;){
      console.log("draw")
      return playerTurn.innerHTML = "draw";}*/

   return 
   
   //}


   
}
}




function gameIsOn(){
   playerTurn.textContent= currentPlayer +" 's turn";
   //board.forEach(function (_arr1) {
   //      return board.addEventListener("click", updateSpace);
   //   });
   gameOn=true;
   checkDraw();



}
