var app = angular.module('groceryListApp', []);

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);


app.controller("GroceryListItemsController", ["$scope", function($scope){
    $scope.groceryItems = [
        {completed: true, itemName: 'milk', date: '2018-02-13'},
        {completed: true, itemName: 'cookies', date: '2018-02-13'},
        {completed: true, itemName: 'ice cream', date: '2018-02-13'},
        {completed: true, itemName: 'potatoes', date: '2018-02-13'},
        {completed: true, itemName: 'cereal', date: '2018-02-13'},
        {completed: true, itemName: 'bread', date: '2018-02-13'},
        {completed: true, itemName: 'eggs', date: '2018-02-13'},
        {completed: true, itemName: 'tortillas', date: '2018-02-13'}
    ]

}])
