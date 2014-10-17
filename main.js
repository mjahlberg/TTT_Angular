
var TTTApp = angular.module('TTTApp', ["firebase"]); //attaching firebase dependency injection within square brackets

TTTApp.controller('TTTcontroller', function($scope,$firebase) { //adding $firebase as additional scope to pass through
	
	$scope.remoteGameContainer = 
  		$firebase(new Firebase("https://ttt-matt.firebaseIO.com/databaseGameContainer"));
  	//attaching chat option via firebase with link and variable, addcomment function will "push" information entered to new firebase app located in link


// --------------------------------------------------------------------------------
 	// OLD FIREBASE CHAT CODE BELOW FROM EZCHAT EXERCISE

	// $scope.allcomments = $firebase(chatRef);

	// $scope.addComment = function() { 
	// 	  	Add manually using standard JavaScript
	// 	  	chatRef.push( {userName:$scope.userName, userGroup:$scope.userGroup, userComment:$scope.userComment} );
	// 	  	$scope.userGroup = "" ;
	// 	  	$scope.userComment = "" ;
	// 	  	$scope.userName = "" ;
	// };	
// ---------------------------------------------------------------------------------
  	
  	$scope.cellList = new Object() ;
    $scope.cellList["0"] = {xoStatus: "A", someVar: "A"} ;
    $scope.cellList["1"] = {xoStatus: "B", someVar: "A"} ;
    $scope.cellList["2"] = {xoStatus: "C", someVar: "A"} ;
    $scope.cellList["3"] = {xoStatus: "D", someVar: "A"} ;
    $scope.cellList["4"] = {xoStatus: "E", someVar: "A"} ;
    $scope.cellList["5"] = {xoStatus: "F", someVar: "A"} ;
    $scope.cellList["6"] = {xoStatus: "G", someVar: "A"} ;
    $scope.cellList["7"] = {xoStatus: "H", someVar: "A"} ;
    $scope.cellList["8"] = {xoStatus: "I", someVar: "A"} ;

	$scope.player1 = [false, false, false, false, false, false, false, false, false]; 

	//creating empty array for each player and each turn will return a "true" for each cell chosen.

	$scope.player2 = [false, false, false, false, false, false, false, false, false];

	// $scope.cellList[0];
	//^ ^ If you ever need to refer to a position within the array

	$scope.movecounter = 0; //declare global movemovecounterer so that it will work when called within the following function


	// Firebase scope for game container, NOTE THE ARRAY NAME CHANGE TO "cellsArray"
	// We change the local array "cells" to cellsArray to store the information in angular
	$scope.gameContainer = {
		cellsArray: $scope.cellList,
		moveCount: $scope.movecounter,
		play1: $scope.player1,
		play2: $scope.player2
	};

	// This is binding the angular container ("remoteGameContainer") with the local game container ("gameContainer")
	$scope.remoteGameContainer.$bind($scope, "gameContainer");

	// "$watch" causes a real time refresh that watches the bind between the local and remote game container
	$scope.$watch('gameContainer', function(){
	});



	// event handler to change cell thisCell based off odd/even movecount value
	$scope.playerTurn = function(thisCell){


		if (($scope.gameContainer.play1[this.$index] == true) || ($scope.gameContainer.play2[this.$index] == true)) { // prevent user from choosing same cell twice
			return;
		};

		$scope.gameContainer.moveCount++; // increment moveCount by one


		if (($scope.gameContainer.moveCount % 2) == 1) { // checking if moveCount is odd
			$scope.gameContainer.play1[this.$index] = true;
			this.currentCell.status = 'X';

		} else {                            // if moveCount is even set to an O
			$scope.gameContainer.play2[this.$index] = true;
			this.currentCell.status = 'O';
		}


		//player 1 win logic...

		if ($scope.gameContainer.play1[0] == true) {
			if ($scope.gameContainer.play1[1] == true) {
				if ($scope.gameContainer.play1[2] == true) {
					alert("player 1 you win, cells 0 - 1 - 2");
				}
			}
			else if ($scope.gameContainer.play1[3] == true){
				if ($scope.gameContainer.play1[6] == true) {
					alert("player 1 you win, cells 0 - 3 - 6");
				}
			}
			else if ($scope.gameContainer.play1[4] == true) {
				if ($scope.gameContainer.play1[8] == true) {
					alert("player 1 you win, cells 0 - 4 - 8");
					}
				}
			}
		
		if ($scope.gameContainer.play1[4] == true) {
			if ($scope.gameContainer.play1[2] == true) {
				if ($scope.gameContainer.play1[6] == true) {
					alert("player 1 you win, cells 4 - 2 - 6");
				}
			}
			else if ($scope.gameContainer.play1[3] == true){
				if ($scope.gameContainer.play1[5] == true) {
					alert("player 1 you win, cells 4 - 3 - 5");
				}
			}
			else if ($scope.gameContainer.play1[1] == true) {
				if ($scope.gameContainer.play1[7] == true) {
					alert("player 1 you win, cells 4 - 1 - 7");
					}
				}
			}

		if ($scope.gameContainer.play1[8] == true) {
			if ($scope.gameContainer.play1[2] == true) {
				if ($scope.gameContainer.play1[5] == true) {
					alert("player 1 you win, cells 8 - 2 - 5");
				}
			}
			else if ($scope.gameContainer.play1[6] == true){
				if ($scope.gameContainer.play1[7] == true) {
					alert("player 1 you win, cells 8 - 6 - 7");
				}
			}
		}


		//player 2 win logic...

		if ($scope.gameContainer.play2[0] == true) {
			if ($scope.gameContainer.play2[1] == true) {
				if ($scope.gameContainer.play2[2] == true) {
					alert("player 2 you win, cells 0 - 1 - 2");
				}
			}
			else if ($scope.gameContainer.play2[3] == true){
				if ($scope.gameContainer.play2[6] == true) {
					alert("player 2 you win, cells 0 - 3 - 6");
				}
			}
			else if ($scope.gameContainer.play2[4] == true) {
				if ($scope.gameContainer.play2[8] == true) {
					alert("player 2 you win, cells 0 - 4 - 8");
					}
				}
			}
		
		if ($scope.gameContainer.play2[4] == true) {
			if ($scope.gameContainer.play2[2] == true) {
				if ($scope.gameContainer.play2[6] == true) {
					alert("player 2 you win, cells 4 - 2 - 6");
				}
			}
			else if ($scope.gameContainer.play2[3] == true){
				if ($scope.gameContainer.play2[5] == true) {
					alert("player 2 you win, cells 4 - 3 - 5");
				}
			}
			else if ($scope.gameContainer.play2[1] == true) {
				if ($scope.gameContainer.play2[7] == true) {
					alert("player 2 you win, cells 4 - 1 - 7");
					}
				}
			}

		if ($scope.gameContainer.play2[8] == true) {
			if ($scope.gameContainer.play2[2] == true) {
				if ($scope.gameContainer.play2[5] == true) {
					alert("player 2 you win, cells 8 - 2 - 5");
				}
			}
			else if ($scope.gameContainer.play2[6] == true){
				if ($scope.gameContainer.play2[7] == true) {
					alert("player 2 you win, cells 8 - 6 - 7");
				}
			}
		}		
	};
// 	$scope.copy = "";

// 	$scope.copy = function() {
//     document.getElementById("label").innerHTML = document.getElementById("mySelect").value;
// }
});

// $scope.backLinkClick = function () { // for the refresh/new game button
//             window.location.reload(false); 
//             console.log("refreshed!");
    	// };	





// console.log("Cell : " + $scope.player1[this.$index] + " was chosen for player1");
		// console.log("Cell : " + $scope.player2[this.$index] + " was chosen for player2");
		// console.log($scope.player1[0]);
		// console.log($scope.player1[1]);
		// console.log($scope.player1[2]);
		// console.log($scope.player1[3]);
		// console.log($scope.player1[4]);
		// console.log($scope.player1[5]);
		// console.log($scope.player1[6]);
		// console.log($scope.player1[7]);
		// console.log($scope.player1[8]);

		// console.log($scope.player2[0]);
		// console.log($scope.player2[1]);
		// console.log($scope.player2[2]);
		// console.log($scope.player2[3]);
		// console.log($scope.player2[4]);
		// console.log($scope.player2[5]);
		// console.log($scope.player2[6]);
		// console.log($scope.player2[7]);
		// console.log($scope.player2[8]);



	// 	if (($scope.player1[0] == true) && (($scope.player1[1] == true) && ($scope.player1[2] == true)) 

	// 		|| (($scope.player1[3] == true) && ($scope.player1[6] == true)))
			

	// 		{
	// 		console.log("player 1 wins!!");
	// 	}

	// 	if (($scope.player1[4] == true) && (($scope.player1[0] == true) && ($scope.player1[8] == true)) || (($scope.player1[3] == true) && ($scope.player1[5] == true)) || 
	// 		(($scope.player1[1] == true) && ($scope.player1[7] == true)) || (($scope.player1[6] == true) && ($scope.player1[2] == true))) {
	// 		console.log("player 1 wins!!");
	// 	}

	// 	if (($scope.player1[8] == true) && (($scope.player1[6] == true) && ($scope.player1[7] == true)) || (($scope.player1[2] == true) && ($scope.player1[5] == true))) 
	// 		{
	// 		console.log("player 1 wins!!");
	// 	};



	// 	//player 2 logic
	// 	if (($scope.player2[0] == true) && (($scope.player2[1] == true) && ($scope.player2[2] == true)) || (($scope.player2[3] == true) && ($scope.player2[6] == true)))
	// 		{
	// 		console.log("player 2 wins!!");
	// 	}

	// 	if (($scope.player2[4] == true) && (($scope.player2[0] == true) && ($scope.player2[8] == true)) || (($scope.player2[3] == true) && ($scope.player2[5] == true)) || 
	// 		(($scope.player2[1] == true) && ($scope.player2[7] == true)) || (($scope.player2[6] == true) && ($scope.player2[2] == true)))
	// 		{
	// 		console.log("player 2 wins!!");
	// 	}

	// 	if (($scope.player2[8] == true) && (($scope.player2[6] == true) && ($scope.player2[7] == true)) || (($scope.player2[2] == true) && ($scope.player2[5] == true))) 
	// 		{
	// 		console.log("player 2 wins!!");
	// 	};


	// };
		
  // if already x or o, then nothing happens
