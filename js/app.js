/**
 * Created by Thomas on 5/28/2015.
 */
var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem",{
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function($scope){

    $scope.groceryItems = [
        {completed: true, itemName: 'milk', date: '2018-10-01'},
        {completed: true, itemName: 'cookies', date: '2018-11-18'},
        {completed: true, itemName: 'ice cream', date: '2018-09-03'},
        {completed: true, itemName: 'potatoes', date: '2017-10-22'},
        {completed: true, itemName: 'cereal', date: '2018-12-03'},
        {completed: true, itemName: 'bread', date: '2018-05-03'},
        {completed: true, itemName: 'eggs', date: '2018-06-04'},
        {completed: true, itemName: 'tortillas', date: '2018-10-04'}
    ]

}]);