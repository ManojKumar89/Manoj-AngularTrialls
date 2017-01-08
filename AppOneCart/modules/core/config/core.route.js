var app = angular.module("cartApp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
 
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/dashboard/dashboard.view.html'
        })

        .state('cart', {
            url: '/cart',
            templateUrl: 'modules/cart/cart.view.html'
        })

        .state('cartlist', {
            url: '/cartlist',
            templateUrl: 'modules/cartlist/cartlist.view.html'
        })


        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.view.html'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'modules/signup/signup.view.html'
        })

           $urlRouterProvider.otherwise('/login');
});