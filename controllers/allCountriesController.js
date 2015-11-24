/**
 * Created by Mal on 24-11-2015.
 */

angular.module("countryApp").
    controller("allCountriesController",
    function($scope, $state) {
        console.log("hi from the allCountriesController");


        $scope.editCountry = function(countryToEdit) {
            console.log("editCountry "+countryToEdit.name)
            $state.go("new-country",
                {country: countryToEdit});
        };
    });
