/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
		//initializes variables with list of employees for access to control
        $scope.employees = pawneeEmployees;
        //sets up sort column in scope
		$scope.sortCol = 'lastName';
        //controller initialization
        $scope.sortBy = function(sortCol) {
            if ($scope.sortCol == sortCol) {
                $scope.sortReverse = !$scope.sortReverse;
            } else {
                $scope.sortCol = sortCol;
                $scope.sortReverse = false;
            }
            $scope.sortCol = sortCol;
        };
		
        $scope.isSortedBy = function(colName) {
            return colName == $scope.sortCol;
        }
    });