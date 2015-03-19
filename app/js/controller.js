/* Controllers */
 var contactListControllers = angular.module('contactListControllers', []);

contactListControllers.controller('contactListCtrl',  ['$scope', 'Contact',
function($scope ,Contact) { 
		$scope.contacts = Contact.query();
		$scope.orderProp='first';
}]);


contactListControllers.controller('contactDetailCtrl',  ['$scope', '$routeParams', 'Contact',
function($scope, $routeParams ,Contact) {

 $scope.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {
	
    });
}]); 


