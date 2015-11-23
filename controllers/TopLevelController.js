/**
 * Created by Mal on 17-11-2015.
 */
angular.module("countryApp").controller("TopLevelController",
    ["$scope", "$resource", function($scope, $resource, $state) {

        console.log("Hi from topLevelController");
        $scope.countryResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id",
                { id: "@id"},{ update: { method: 'PUT' }});


        $scope.countryVisits = $scope.countryResource.query();
        var data = $scope.countryVisits;
        console.log($scope.countryVisits.length);
        console.log(data.length);
        console.log($scope.countryVisits.isArray);

        $scope.editCountry = function(countryToEdit) {
            console.log("editCountry");
            $state.go("Edit",
                {country: countryToEdit});
        };

    }]);
