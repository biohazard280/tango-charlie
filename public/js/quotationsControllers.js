"use strict";
var crmControllers = angular.module('quotationsControllers', []);

crmControllers.controller('listQuotCtrl', ['$scope', 'Client', '$location', '$cookies', function($scope, Client, $location, $cookies){
		function refresh() {
		Client.getList(function(result) {
			$scope.clients = result;
			console.log(result);

			


			//to know how many bills there are and their status state = false "bill unpaid", state = true "bill paid"
			/*for(var i = 0; i < $scope.clients.length; i++) {
				$scope.nbrBills += $scope.clients[i].bills.length;
				
			for(var j = 0; j < $scope.clients[i].bills.length; j++){
					listBills.push({'name' : $scope.clients[i].name, 
									'date' : $scope.clients[i].bills[j].createdAt,
									'billId' : $scope.clients[i].bills[j]._id,
									'state' : $scope.clients[i].bills[j].state
				});
	
				if($scope.clients[i].bills[j].state == false){
						$scope.nbrUnpaidBills++;
						listUnpayedBills.push({'name' : $scope.clients[i].name, 
											   'date' : $scope.clients[i].bills[j].createdAt,
											   'billId' : $scope.clients[i].bills[j]._id,
											   'state' : $scope.clients[i].bills[j].state

						});
					} else {
						$scope.nbrPaidBills++;
						listPayedBills.push({'name' : $scope.clients[i].name, 
											 'date' : $scope.clients[i].bills[j].createdAt,
											 'billId' : $scope.clients[i].bills[j]._id,
											 'state' : $scope.clients[i].bills[j].state

						});
					}
				};

			};
			$scope.datas = listBills;
			console.log($scope.datas);*/

		});
	}
	refresh();


	$scope.viewAll = true;
	$scope.viewPaid = false;
	$scope.viewRefused = false;
	$scope.viewWaiting = false;
		$scope.showAll = function(){
			// $scope.datas = listDevis;
			$scope.viewAll = true;
			$scope.viewPaid = false;
			$scope.viewRefused = false;
			$scope.viewWaiting = false;
		}
		$scope.showPayedDevis = function(){
			// $scope.datas = listPayedDevis;
			$scope.viewAll = false;
			$scope.viewPaid = true;
			$scope.viewRefused = false;
			$scope.viewWaiting = false;
		}
		$scope.showRefusedDevis = function(){
			// $scope.datas = listUnpayedDevis;
			$scope.viewAll = false;
			$scope.viewPaid = false;
			$scope.viewRefused = true;
			$scope.viewWaiting = false;
		}
		$scope.showWaitingDevis = function(){
			// $scope.datas = listWaitingDevis;
			$scope.viewAll = false;
			$scope.viewPaid = false;
			$scope.viewRefused = false;
			$scope.viewWaiting = true;
		}

}]);