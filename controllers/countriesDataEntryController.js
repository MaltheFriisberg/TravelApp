/**
 * Created by Mal on 24-11-2015.
 */
angular.module("countryApp")

.controller("countriesDataEntryController",
    function($scope, $state, $stateParams, trackService) {
        //catching the country object passed by $stateParams
        $scope.country = $stateParams.country;

        $scope.tracks = [];


        $scope.tracks = trackService.getTracksForCountry($scope.country);



        /*$scope.deleteVisit = function() {

            $scope.visit.$delete({id: $scope.visit._id}).then(function () {
                $scope.internshipVisits.splice($scope.internshipVisits.indexOf($scope.visit), 1);
                $state.go("all-internships");
            });
        };


        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid) {
                if (!$stateParams.internship) { //new
                    new $scope.internshipResource($scope.visit).$save(function (internship) {
                        $scope.visit._id = internship._id;

                        $scope.internshipVisits.push($scope.visit);
                        $state.go("all-internships");
                    });
                }
                else //editing
                {
                    //update example
                    new $scope.internshipResource($scope.visit).$update(
                        {id: $scope.visit._id}, function() {
                            $state.go("all-internships");
                        });
                }
            }
            else {
                //display error messages
            }
        };*/
    });