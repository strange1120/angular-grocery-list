var app = angular.module('groceryListApp', []);

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);


app.controller("GroceryListItemsController", ["$scope", function($scope){
    $scope.groceryItems = [
        {completed: true, itemName: 'milk', date: '2018-02-10'},
        {completed: true, itemName: 'cookies', date: '2018-02-12'},
        {completed: true, itemName: 'ice cream', date: '2018-02-11'},
        {completed: true, itemName: 'potatoes', date: '2018-02-15'},
        {completed: true, itemName: 'cereal', date: '2018-02-19'},
        {completed: true, itemName: 'bread', date: '2018-02-18'},
        {completed: true, itemName: 'eggs', date: '2018-02-14'},
        {completed: true, itemName: 'tortillas', date: '2018-02-13'}
    ]

}])
