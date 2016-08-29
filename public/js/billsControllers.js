"use strict";
var crmControllers = angular.module('billsControllers', []);

crmControllers.controller('listBillsCtrl', ['$scope', 'Client', '$location', '$cookies', function($scope, Client, $location, $cookies){
	
	$scope.nbrBills = 0;
	$scope.nbrUnpaidBills = 0;
	$scope.nbrPaidBills = 0;
	let listPayedBills = [];
	let listUnpayedBills = [];
	let listBills = [];
	$scope.datas = [];
	

	function refresh() {
		Client.getList(function(result) {
			$scope.clients = result;
			console.log(result);

/*<<<<<<< HEAD
			$scope.nbrBills = 0;
			$scope.nbrUnpaidBills = 0;
			$scope.nbrPaidBills = 0;
			$scope.clientData = {};
			$scope.billData = {};
			$scope.order = "";
			$scope.datas = [];
=======
			
>>>>>>> d4ccf6755b2b47ad8500f17e4848126a6fa7869c*/


			//to know how many bills there are and their status state = false "bill unpaid", state = true "bill paid"
			for(var i = 0; i < $scope.clients.length; i++) {
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
/*<<<<<<< HEAD*/
				
				/*$scope.Datas.push($scope.billData);*/
			};
			/*$scope.order = $scope.datas[0].name;
			console.log($scope.order);*/
            /*console.log($scope.nbrBills+" factures");
            console.log($scope.nbrUnpaidBills+" factures impayées");
            console.log($scope.nbrPaidBills+" factures payées")*/
			
			// to know how many companies or private persons are
			/*for(var i = 0; i<$scope.clients[0].bills.length; i++) {
				if($scope.clients[i].isCompany == true){
					$scope.nbrCompanies++;
				}
				else {
					$scope.nbrPrivateprs++;
				}
			}*/
/*=======

			};*/
			$scope.datas = listBills;
			console.log($scope.datas);
/*>>>>>>> d4ccf6755b2b47ad8500f17e4848126a6fa7869c*/

		});
	}
	refresh();

/*<<<<<<< HEAD

=======*/
$scope.viewAll = true;
$scope.viewPaid = false;
$scope.viewUnpaid = false;
	$scope.showAll = function(){
		$scope.datas = listBills;
		$scope.viewAll = true;
		$scope.viewPaid = false;
		$scope.viewUnpaid = false;
	}
	$scope.showPayedBills = function(){
		$scope.datas = listPayedBills;
		$scope.viewAll = false;
		$scope.viewPaid = true;
		$scope.viewUnpaid = false;
	}
	$scope.showUnpayedBills = function(){
		$scope.datas = listUnpayedBills;
		$scope.viewAll = false;
		$scope.viewPaid = false;
		$scope.viewUnpaid = true;
	}


	 $scope.propertyName = 'date';
 	 $scope.reverse = true;
	$scope.sortBy = function(property) {
	    if ($scope.propertyName === property) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.propertyName = property;
			$scope.reverse = true;
		}
	};
/*>>>>>>> d4ccf6755b2b47ad8500f17e4848126a6fa7869c*/

}]);