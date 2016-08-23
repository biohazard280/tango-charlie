"use strict";
var services = angular.module('crmServices', []);

services.factory('Rest', ['$resource', function($resource) {

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
		}
	return list;
}]);
