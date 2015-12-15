/**
 * Created and coded by Mal on 24-11-2015.
 */

angular.module("countryApp").
    controller("allCountriesController",
    function($scope, $state) {
        console.log("hi from the allCountriesController");

        $scope.newCountry = function() {

            //Navigation.js will take it from here
            $state.go("new-country");
        };

        $scope.editCountry = function(countryToEdit) {
            console.log("editCountry "+countryToEdit.name);
            //Navigation.js will take it from here
            $state.go("new-country",
                {country: countryToEdit});
        };




    });
