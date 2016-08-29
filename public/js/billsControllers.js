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

			};

			$scope.datas = listBills;
			console.log($scope.datas);

		});
	}
	refresh();

	$scope.showPayedBills = function(){
		$scope.datas = listPayedBills;
	}

	$scope.showUnpayedBills = function(){
		$scope.datas = listUnpayedBills;
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

}]);

/*crmControllers.controller('createNewFactureCtrl', ['$scope', 'Client', function($scope, Client){

		
		$scope.listClients = [];
		$scope.listQuotations = [];
		$scope.newFacture = {};
		
		Client.getList(function(result) {
			$scope.clients = result;
			
			for (var i = 0; i < $scope.clients.length ; i++){
				$scope.listClients.push({'name' : $scope.clients[i].name,
										'id' : $scope.clients[i]._id});
				for (var j = 0; j < $scope.clients[i].quotations.length ; j++){
					$scope.listQuotations.push({'idCl' : $scope.clients[i]._id,
												'quotLink' : $scope.clients[i].quotations[j].link});
				}
			}

		});

			/// get params
		Client.getParams(function(result) {
			$scope.params = result;
			$scope.listRules = $scope.params[0].rules;
			$scope.listRefunds = $scope.params[0].refunds;
			$scope.listVatRate = $scope.params[0].vatRate;
		});

		Client.getAdmin(function(result) {
			$scope.listPayementInfo = [];
			$scope.admin = result;
			$scope.paymentInfo = $scope.admin[0].paymentInfo;
			for (var i = 0 ; i < $scope.paymentInfo.bank.length ; i++) {
				$scope.listPayementInfo.push($scope.paymentInfo.bank[i]);
			}
			for (var i = 0 ; i < $scope.paymentInfo.paypal.length ; i++) {
				$scope.listPayementInfo.push($scope.paymentInfo.paypal[i]);
			}

			console.log($scope.listPayementInfo);
		});

	
	console.log($scope.newFacture);
	$scope.articles=[];

	$scope.addNewArticle = function(){
		$scope.articles.push();
	}



}]);*/
