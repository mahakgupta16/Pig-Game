// THE pig game

var score,roundscore,activeplayer,gameplaying,finalscr,winscore;
init();

//document.querySelector('#current-' + activeplayer).textContent = dice; //setter

//document.querySelector('#current-' +activeplayer).innerHTML = '<em>'+ dice + '</em>';

//var x=document.querySelector('#score-0').textContent;  //getter

//to hide the dice

document.querySelector('.btn-roll').addEventListener('click',function()
{
    if(gameplaying){

        // random number
    var dice = Math.floor(Math.random()*6) +1
    var dice2 = Math.floor(Math.random()*6) +1

    //display the result
    var diceDOM = document.querySelector('#dice-1')
   diceDOM.style.display ='block';
   diceDOM.src ='dice-' +dice + '.png';

   var diceDOM = document.querySelector('#dice-2')
   diceDOM.style.display ='block';
   diceDOM.src ='dice-' +dice2 + '.png';

   //update the round score if the rolled number is not 1
  
   if(dice > 1 && dice2 >1) // or !==
   {
        //add score
        roundscores = roundscores +dice +dice2; //roundscore =roundscore +dice
        document.querySelector('#current-' + activeplayer).textContent = roundscores; //setter

   }
   else if(dice ==6 && dice2==6){
    roundscores=0;
    document.querySelector('#current-'+activeplayer).textContent=roundscores;   
    nextplayer();
   }
   else{
        //next player
       nextplayer();
    }
}

}); 

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
//add current score to the global score
    score[activeplayer] += roundscores;

//update the ui
    document.querySelector('#score-' +activeplayer).textContent = score[activeplayer];

     //nextplayer

//check if the player won
finalscr=document.querySelector('.final-score').value;

if(finalscr){
    winscore=finalscr;
}
else{
    winscore=100;
}


if(score[activeplayer] >= winscore){
    
    document.querySelector('#name-'+activeplayer).textContent ="Winner!!";
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';

    document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');

    gameplaying=false;
}
else{

    nextplayer();
}
    }
});

function nextplayer(){

    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
//if(activeplayer == 0){activeplayer=1} else{activeplayer=0}

roundscores = 0;

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';

}

document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
    
    score=[0,0];
    activeplayer=0;
    roundscores=0;
     gameplaying= true;
    document.querySelector('.final-score').value="";
    

    document.querySelector('#dice-1').style.display= 'none';
    document.querySelector('#dice-2').style.display= 'none';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';

    

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}


