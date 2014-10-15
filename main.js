var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTcontroller', function ($scope) {

  $scope.testString = "Angular source, App, and Controller present" ;

  	$scope.cells = [
  	{status: "A"}, 
  	{status: "B"}, 
  	{status: "C"}, 
  	{status: "D"}, 
  	{status: "E"}, 
  	{status: "F"}, 
  	{status: "G"}, 
  	{status: "H"}, 
  	{status: "I"}
  	]

	$scope.player1 = [null, null, null, null, null, null, null, null, null]

	$scope.player2 = [null, null, null, null, null, null, null, null, null]

	// $scope.cellList[0];
	//^ ^ If you ever need to refer to a position within the array

	$scope.movecounter = 0; //declare global movemovecounterer so that it will work when called within the following function

	$scope.test2 = function(){
		console.log("just a test!");
	};

	// event handler to change cell banana based off odd/even movecounter value
	$scope.playerTurn = function(thisCell){

		$scope.movecounter = $scope.movecounter + 1; // increment movecounter by one

		if (($scope.player2[this.$index] == true) || ($scope.player2[this.$index] == true)) { // prevent user from choosing same cell twice
			return;
		};
		
		if (($scope.movecounter % 2) == 1) { // checking if movecounter is odd
			$scope.player1[this.$index] = true;
			this.currentCell.status = 'X';

		} else { // if movecounter is even set to an O
			$scope.player2[this.$index] = true;
			this.currentCell.status = 'O';

		} 


		console.log("Cell : " + $scope.player1[this.$index] + " was chosen for player1");
		console.log("Cell : " + $scope.player2[this.$index] + " was chosen for player2");
		console.log($scope.player1[0]);
		console.log($scope.player1[1]);
		console.log($scope.player1[2]);
		console.log($scope.player1[3]);
		console.log($scope.player1[4]);
		console.log($scope.player1[5]);
		console.log($scope.player1[6]);
		console.log($scope.player1[7]);
		console.log($scope.player1[8]);
		console.log($scope.player2[0]);
		console.log($scope.player2[1]);
		console.log($scope.player2[2]);
		console.log($scope.player2[3]);
		console.log($scope.player2[4]);
		console.log($scope.player2[5]);
		console.log($scope.player2[6]);
		console.log($scope.player2[7]);
		console.log($scope.player2[8]);



		//player 1 win logic
		if (($scope.player1[0] == true) && (($scope.player1[1] == true) && ($scope.player1[2] == true)) || (($scope.player1[3] == true) && ($scope.player1[6] == true)))
			{
			console.log("player 1 wins!!");
		}
		if (($scope.player1[4] == true) && (($scope.player1[0] == true) && ($scope.player1[8] == true)) || (($scope.player1[3] == true) && ($scope.player1[5] == true)) || 
			(($scope.player1[1] == true) && ($scope.player1[7] == true)) || (($scope.player1[6] == true) && ($scope.player1[2] == true))) {
			console.log("player 1 wins!!");
		}
		if (($scope.player1[8] == true) && (($scope.player1[6] == true) && ($scope.player1[7] == true)) || (($scope.player1[2] == true) && ($scope.player1[5] == true))) 
			{
			console.log("player 1 wins!!");
		};



		//player 2 logic
		if (($scope.player2[0] == true) && (($scope.player2[1] == true) && ($scope.player2[2] == true)) || (($scope.player2[3] == true) && ($scope.player2[6] == true)))
			{
			console.log("player 2 wins!!");
		}
		if (($scope.player2[4] == true) && (($scope.player2[0] == true) && ($scope.player2[8] == true)) || (($scope.player2[3] == true) && ($scope.player2[5] == true)) || 
			(($scope.player2[1] == true) && ($scope.player2[7] == true)) || (($scope.player2[6] == true) && ($scope.player2[2] == true)))
			{
			console.log("player 2 wins!!");
		}
		if (($scope.player2[8] == true) && (($scope.player2[6] == true) && ($scope.player2[7] == true)) || (($scope.player2[2] == true) && ($scope.player2[5] == true))) 
			{
			console.log("player 2 wins!!");
		};


	};
		
  // if already x or o, then nothing happens

});