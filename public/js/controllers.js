"use strict";
var crmControllers = angular.module('crmControllers', []);

crmControllers.controller('homeCtrl', ['$scope', 'Rest', '$location','ngDialog', function($scope, Rest, $location, ngDialog){

	$scope.svgHover=function(circleTarget, reset){
		console.log('in');

		if (reset) {
			if (circleTarget == "svgHover1") {
				$scope.Hover1=false;
			}
			if (circleTarget == "svgHover2") {
				$scope.Hover2=false;
			}
			if (circleTarget == "svgHover3") {
				$scope.Hover3=false;
			}
			if (circleTarget == "svgHover4") {
				$scope.Hover4=false;
			}
			if (circleTarget == "svgHover5") {
				$scope.Hover5=false;
			}
			if (circleTarget == "svgHover6") {
				$scope.Hover6=false;
			}
			if (circleTarget == "svgHover7") {
				$scope.Hover7=false;
			}
			if (circleTarget == "svgHover8") {
				$scope.Hover8=false;
			}
			if (circleTarget == "svgHover9") {
				$scope.Hover9=false;
			}
			if (circleTarget == "svgHover10") {
				$scope.Hover10=false;
			}

		}else{
			if (circleTarget == "svgHover1") {
				$scope.Hover1=true;
			}
			if (circleTarget == "svgHover2") {
				$scope.Hover2=true;
			}
			if (circleTarget == "svgHover3") {
				$scope.Hover3=true;
			}
			if (circleTarget == "svgHover4") {
				$scope.Hover4=true;
			}
			if (circleTarget == "svgHover5") {
				$scope.Hover5=true;
			}
			if (circleTarget == "svgHover6") {
				$scope.Hover6=true;
			}
			if (circleTarget == "svgHover7") {
				$scope.Hover7=true;
			}
			if (circleTarget == "svgHover8") {
				$scope.Hover8=true;
			}
			if (circleTarget == "svgHover9") {
				$scope.Hover9=true;
			}
			if (circleTarget == "svgHover10") {
				$scope.Hover10=true;
			}
		}

		

	}

	$scope.clickToOpen = function () {
        ngDialog.open({ 
        	template: '/partials/popupTmpl.html',
        	className: 'ngdialog-theme-default',
        	controller: 'loginCtrl'
         	
		});
    };

}]);




crmControllers.controller('listClientsCtrl', ['$scope', 'Rest', function($scope, Rest){

	$scope.nbrCompanies = 0;
	$scope.nbrPrivateprs = 0;
	$scope.quotations = 0;
	$scope.bills = 0;
	$scope.clientsShow = [];
	var tabCompanies = [];
	var tabPrivates = [];
	var clientsToShow = [];

	function refresh() {
		Rest.getList(function(result) {
			$scope.clients = result;
			/*console.log(result);*/

			// to know how many companies or private persons are
			for(var i = 0; i<$scope.clients.length; i++) {
				if($scope.clients[i].isCompany == true){
					$scope.nbrCompanies++;
				}
				else {
					$scope.nbrPrivateprs++;
				}
			}

		});
	}
	refresh();

	$scope.search = {};


	$scope.showClients = function(isCmp){
		$scope.search.isCompany = isCmp;
	}

	$scope.recherche = function(entree){
		$scope.search = {};
		$scope.search.name = entree;
	}



}]);


crmControllers.controller('detailClientCtrl', ['$scope', 'Rest', function($scope, Rest){

}]);

crmControllers.controller('loginCtrl', ['$scope', 'Rest', '$location', function($scope, Rest, $location){
	console.log('ctrl login');
		//$scope.admin = [];
		// use the Rest service created in services.js
		Rest.getAdmin(function(result) {
			$scope.admin = result;
			let mailOk = false;


			$scope.login = function(isValid){
				
				if(isValid){
					if($scope.admin[0].contactPerson.mail == $scope.userAdmin.mail) {
						mailOk = true;
						Rest.loginAdmin($scope.admin[0].contactPerson.pwd, $scope.userAdmin.pwd, function(result){
							//alert(result[0].data);
							$scope.loginAdmin = result;
							console.log("email ok");
							if(mailOk == true && result[0].data == true){
								console.log("loggin ok !!");
								console.log($scope);
								$location.path('/dashboard_Entreprise/clients/viewclient');
							}
							else if (mailOk == false){

							}
							console.log(result);
							
						});
					};
					$scope.error = false;
				}	
				else {
					console.log("email incorrect");
					$scope.userAdmin.mail = "";
					$scope.error = true;
					$location.path('/');
				}
			};

		});
}]);


crmControllers.controller('mainCtrl', ['$scope', 'Rest', function($scope, Rest){

}]);


crmControllers.controller('createNewClientCtrl', ['$scope', function($scope){
	$scope.particulier = true;
	$scope.entreprise = false;

	$scope.showParticulier = function() {
		$scope.particulier = true;
		$scope.entreprise = false;
	}
	$scope.showEntreprise = function() {
		$scope.entreprise = true;
		$scope.particulier = false;
	}
}]);