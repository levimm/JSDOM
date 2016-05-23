/*app = angular.module('MySimpleEditor', ['textAngular']); 

app.controller('MyController', ['$scope', function($scope){
    $scope.sample = 'Shout out from the javascript!';
    $scope.htmlContent = '<h2>Testing Content</h2>';
    }]);*/

(function() {
	  angular
		    .module("MySimpleEditor", ['textAngular'])
		    .controller("MyController", MyController);
    

	  function MyController($scope) {
		    $scope.sample='abcdefg';
	  };
})();
