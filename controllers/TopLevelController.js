/**
 * Created and coded by Mal on 17-11-2015.
 */
angular.module("countryApp").controller("TopLevelController",
    ["$scope", "$resource","$state", 'countryService', 'trackService',
        function($scope, $resource, $state, countryService, trackService) {
            $scope.tracks = [];
        /*console.log("Hi from topLevelController");
        $scope.countryResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id",
                { id: "@id"},{ update: { method: 'PUT' }});
        $scope.trackResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id/tracks",
                { id: "@id"},{ update: { method: 'PUT' }});
        //get the tracks by country ID http://travel-project.azurewebsites.net/countries/:5628d153e4b0e09ab41e25b6/tracks
        //get all tracks http://travel-project.azurewebsites.net/tracks

        $scope.countryVisits = $scope.countryResource.query();
        var data = $scope.countryVisits;*/

        $scope.Countries = countryService.getCountries();
        $scope.countryResource = countryService.getResource();
        //$scope.Tracks = trackService.getTracks();

        /*$scope.editCountry = function(countryToEdit) {

            console.log("editCountry "+countryToEdit.name);
            $state.go("new-country",
                {country: countryToEdit});
        };*/


    }]);
