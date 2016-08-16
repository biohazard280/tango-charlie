"use strict";
var crmControllers = angular.module('crmControllers', []);

/*crmControllers.controller('mainCtrl', ['$scope', function($scope){

}]);*/




crmControllers.controller('listClients', ['$scope', 'Rest', function($scope, Rest){

	$scope.nbrCompanies = 0;
	$scope.nbrPrivateprs = 0;
	$scope.quotations = 0;
	$scope.bills = 0;
	var tabCompanies = [];
	var tabPrivates = [];
	$scope.clientsToShow = [];

	function refresh() {
		Rest.getList(function(result) {
			$scope.clients = result;
			/*console.log(result);*/

			// to know how many companies or private persons are
			for(var i = 0; i<$scope.clients.length; i++) {
				if($scope.clients[i].isCompany == true){
					$scope.nbrCompanies++;
					tabCompanies.push($scope.clients[i]);
				}
				else {
					$scope.nbrPrivateprs++;
					tabPrivates.push($scope.clients[i]);
				}
			}
			console.log(tabCompanies[0]);
			$scope.clientsToShow.push(tabCompanies);
			console.log(tabPrivates.length);



		});

	}
	refresh();



	
/*
	$scope.companies = "nbrCompanies";
	$scope.privateprs = "nbrPrivateprs";*/
}]);

crmControllers.controller('mainCtrl', ['$scope', 'Rest', function($scope, Rest){

}]);