/**
 * Created and coded by Mal on 24-11-2015.
 */
angular.module("countryApp")

.controller("countriesDataEntryController",
    function($scope, $state, $stateParams, trackService) {
        //catching the country object passed by $stateParams
        $scope.country = $stateParams.country;
        console.log("DataEntryController " + $scope.country.name);
        $scope.tracks = [];
        $scope.AllTracks = [];

        //$scope.tracks = trackService.getTracksForCountry($scope.country);
        $scope.AllTracks = trackService.getAllTracks();

        $scope.DeleteCountry = function() {
            console.log("DeleteCountry");
            $scope.country.$delete({id: $scope.country._id}).then(function() {
                $scope.Countries.splice($scope.Countries.indexOf($scope.country), 1);
                $state.go("Home");
            });
        };

        $scope.SaveCountry = function() {
            console.log("SaveCountry" + $scope.country.name);
            if ($scope.countryForm.$valid) {
                console.log("the form is valid");
                if (!$stateParams.country) { //new
                    console.log("saving a new Country "+$scope.country.name)
                    new $scope.countryResource($scope.country).$save(function (country) {
                        $scope.country._id = country._id;

                        $scope.Countries.push($scope.country);
                        $state.go("Home");
                    });
                }
                else //editing
                {
                    //update example from Christian
                    console.log("Editing "+$scope.country.name)
                    new $scope.countryResource($scope.country).$update(
                        {id: $scope.country._id}, function() {
                            $state.go("Home");
                        });
                }
            }
            else {
                alert("The form is not valid");
            }
        },
        $scope.DeleteTrack = function() {
            //console.log("DeleteTrack "+$scope.tracks.);
            //$scope.AllTracks.$delete({id: $scope.tracks.})
        }

    });