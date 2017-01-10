var app = angular.module("cartApp");

app.controller('loginController',function($scope){
	var loginData = { username: $scope.username, password: $scope.password };
	console.log(loginData);
});