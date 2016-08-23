"use strict";
var services = angular.module('crmServices', []);

services.factory('Client', ['$resource', function($resource) {

	var resource = $resource("/api/crm");

		var list = {
			getList : function(callback) {
				resource.query(callback);
			},

        	getAdmin : function(callback){
            let resource = $resource("/api/crm/admin");
            // callback is not required but it's better to get the different messages [error, validation,...] 
            resource.query(callback);
        	},
        	loginAdmin : function(hash, pwd, callback) {
        	let resource = $resource("/api/crm/login?hash="+hash+"&pwd="+pwd);
        	resource.query(callback);
        	}

			addClient : function(newClient, callback){
				let client = new resource();

				//param[0].parametre

				client.name = newClient.name;
				// client.picture = newClient.picture;
				client.isCompany = newClient.isCompany;
				client.vat = {
					"num" : parseInt(newClient.vat.num),
					"siren" : parseInt(newClient.vat.siren),
					"rcs" : parseInt(newClient.vat.rcs)
				};
				
				client.billingInfo = {
					"civility" : newClient.billingInfo.civility,
					"firstname" : newClient.billingInfo.firstname,
					"lastname" : newClient.billingInfo.lastname,
					"street" : newClient.billingInfo.street,
					"number" : newClient.billingInfo.number,
					"box" : newClient.billingInfo.box,
					"zip" : newClient.billingInfo.zip,
					"town" : newClient.billingInfo.town,
					"country" : newClient.billingInfo.country,
					"mail" : newClient.billingInfo.mail,
					"phoneMain" : newClient.billingInfo.phoneMain,
					"phoneSec" : newClient.billingInfo.phoneSec,
					"fax" : newClient.billingInfo.fax
				};

				client.deliveryInfo = {
					"civility" : newClient.deliveryInfo.civility,
					"firstname" : newClient.deliveryInfo.firstname,
					"lastname" : newClient.deliveryInfo.lastname,
					"company" : newClient.deliveryInfo.company,
					"street" : newClient.deliveryInfo.street,
					"number" : newClient.deliveryInfo.number,
					"box" : newClient.deliveryInfo.box,
					"zip" : newClient.deliveryInfo.zip,
					"town" : newClient.deliveryInfo.town,
					"country" : newClient.deliveryInfo.country
				};

				client.contactPerson = {
					"civility" : newClient.contactPerson.civility,
					"firstname" : newClient.contactPerson.firstname,
					"lastname" : newClient.contactPerson.lastname,
					"post" : newClient.contactPerson.post,
					"mail" : newClient.contactPerson.mail,
					"phoneMain" : newClient.contactPerson.phoneMain,
					"phoneSec" : newClient.contactPerson.phoneSec,
					"pwd" : newClient.contactPerson.pwd
				};
				client.memo = newClient.memo;
				client.createdAt = Date.now();

				// client.$save(callback);
			}

		}
	return list;
}]);
