//Tim Horton Roll Up the Rim Simulator 

//EVENT LISTENERS  
//Province 
document.getElementById('bc').addEventListener('click', bcProbabilities); 
document.getElementById('alberta').addEventListener('click', albertaProbabilities); 
document.getElementById('saskatchewan').addEventListener('click', saskatchewanProbabilities); 



//GLOBAL VARIABLES 
let playAgain = 0; 
let freeCoffee = 0; 
let freeDonut = 0; 
let grandPrize = 0;  



//EVENT FUNCTIONS 
//British Columbia 
function bcProbabilities () {
    //Clicked Location
    document.getElementById('alberta').style.display = 'none'; 
    document.getElementById('saskatchewan').style.display = 'none';
	document.getElementById('how-many-times').style.visibility = 'visible';
	 
	//Event Listener for the Number of Times 
	 document.getElementById('oneTime').addEventListener('click', generateOnce); 
	 document.getElementById('fiveTimes').addEventListener('click', generateFiveTimes);
	 document.getElementById('untilGrandPrize').addEventListener('click', generateUntilGrandPrize);
	 document.getElementById('until500Donuts').addEventListener('click', generateUntil500Donuts); 

    //Event Function for the Number of Times (ONCE)  
    function generateOnce () {
        //Generate Random Number 
		  let ranPrize = Math.random(); 
		  
		  if (ranPrize < 0.7) {
				playAgain += 1; 
				document.getElementById('playAgains').innerHTML = playAgain; 
		  } else if (ranPrize < 0.8) {
				freeCoffee += 1;
			  document.getElementById('freeCoffees').innerHTML = freeCoffee;
		  } else if (ranPrize < 0.9) {
			  freeDonut += 1; 
			  document.getElementById('freeDonuts').innerHTML = freeDonut; 
		  } else {
				grandPrize += 1; 
				document.getElementById('grandPrizes').innerHTML = grandPrize; 
		}
    } 
   
    //Event Function for the Number of Times (FIVE TIMES)  
    function generateFiveTimes () {
		for (n = 0; n < 5; n += 1) {
			generateOnce(); 
		}
	}

	 //Event Function for the Number of Times (UNTIL GRAND PRIZE)
	 function generateUntilGrandPrize () {
		while (grandPrize < 1) {
			generateOnce();
		}
	}

	//Event Function for the Number of Times (UNITL 500 DONUTS)
	function generateUntil500Donuts () {
		while (freeDonut < 500) {
			generateOnce(); 
		}
	}
}



//Alberta
function albertaProbabilities () {
    //Clicked Location
    document.getElementById('bc').style.display = 'none'; 
    document.getElementById('saskatchewan').style.display = 'none';
	 document.getElementById('how-many-times').style.visibility = 'visible'
	 
	 //Event Listener for the Number of Times 
	 document.getElementById('oneTime').addEventListener('click', generateOnce); 
	 document.getElementById('fiveTimes').addEventListener('click', generateFiveTimes); 
	 document.getElementById('untilGrandPrize').addEventListener('click', generateUntilGrandPrize);
	 document.getElementById('until500Donuts').addEventListener('click', generateUntil500Donuts); 

    //Event Function for the Number of Times (ONCE)  
    function generateOnce () {
        //Generate Random Number 
		  let ranPrize = Math.random(); 
		  
		  if (ranPrize < 0.15) {
				playAgain += 1; 
				document.getElementById('playAgains').innerHTML = playAgain; 
		  } else if (ranPrize < 0.55) {
				freeCoffee += 1;
			  document.getElementById('freeCoffees').innerHTML = freeCoffee;
		  } else if (ranPrize < 0.95) {
			  freeDonut += 1; 
			  document.getElementById('freeDonuts').innerHTML = freeDonut; 
		  } else {
				grandPrize += 1; 
				document.getElementById('grandPrizes').innerHTML = grandPrize; 
		}
   } 
  
    //Event Function for the Number of Times (FIVE TIMES)  
    function generateFiveTimes () { 
		for (n = 0; n < 5; n += 1) {
			generateOnce(); 
		}
	}

	//Event Function for the Number of Times (UNTIL GRAND PRIZE)
	function generateUntilGrandPrize () {
		while (grandPrize < 1) {
			generateOnce();
		}
	}
	
	//Event Function for the Number of Times (UNITL 500 DONUTS)
	function generateUntil500Donuts () {
		while (freeDonut < 500) {
			generateOnce(); 
		}
	}
}



//Saskatchewan 
function saskatchewanProbabilities () {
    //Clicked Location  
    document.getElementById('alberta').style.display = 'none'; 
    document.getElementById('bc').style.display = 'none';
	 document.getElementById('how-many-times').style.visibility = 'visible';
	 
	 //Event Listener for the Number of Times 
	 document.getElementById('oneTime').addEventListener('click', generateOnce); 
	 document.getElementById('fiveTimes').addEventListener('click', generateFiveTimes);
	 document.getElementById('untilGrandPrize').addEventListener('click', generateUntilGrandPrize);
	 document.getElementById('until500Donuts').addEventListener('click', generateUntil500Donuts); 

    //Event Function for the Number of Times (ONCE)  
    function generateOnce () {
        //Generate Random Number 
		  let ranPrize = Math.random(); 
		  
		  if (ranPrize < 0.7) {
				playAgain += 1; 
				document.getElementById('playAgains').innerHTML = playAgain; 
		  } else if (ranPrize < 0.71) {
				freeCoffee += 1;
			  document.getElementById('freeCoffees').innerHTML = freeCoffee;
		  } else if (ranPrize < 0.72) {
			  freeDonut += 1; 
			  document.getElementById('freeDonuts').innerHTML = freeDonut; 
		  } else {
				grandPrize += 1; 
				document.getElementById('grandPrizes').innerHTML = grandPrize; 
		}
   } 
	   
    //Event Function for the Number of Times (FIVE TIMES)  
    function generateFiveTimes () {
		for (n = 0; n < 5; n += 1) {
			generateOnce(); 
		}
	}

	//Event Function for the Number of Times (UNTIL GRAND PRIZE)
	function generateUntilGrandPrize () {
		while (grandPrize < 1) {
			generateOnce();
		}
	}
	
	//Event Function for the Number of Times (UNITL 500 DONUTS)
	function generateUntil500Donuts () {
		while (freeDonut < 500) {
			generateOnce();
		}
	}
}