"use strict";
var crmControllers = angular.module('crmControllers', []);

/*crmControllers.controller('mainCtrl', ['$scope', function($scope){

}]);*/




crmControllers.controller('listClients', ['$scope', 'Rest', function($scope, Rest){

	function refresh() {
		Rest.getList(function(result) {
			$scope.clients = result;
			console.log(result);

			$scope.nbrCompanies = 0;
			$scope.nbrPrivateprs = 0;
			$scope.quotations = 0;
			$scope.bills = 0;

			// to know how many companies or private persons are
			for(var i = 0; i<$scope.clients.length; i++) {
				if($scope.clients[i].isCompany == false){
				$scope.nbrCompanies++;
				}
				else {
					$scope.nbrPrivateprs++;
				}
			}
			/*console.log($scope.companies);
			console.log($scope.privateprs);*/
		});
	}
	refresh();


	
/*
	$scope.companies = "nbrCompanies";
	$scope.privateprs = "nbrPrivateprs";*/
console.log($scope.companies);
}]);

crmControllers.controller('mainCtrl', ['$scope', 'Rest', function($scope, Rest){

}]);