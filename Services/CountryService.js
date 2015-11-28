/**
 * Created by Mal on 24-11-2015.
 */
//Could Instantiate a new module, but lets not for now
// help here https://docs.angularjs.org/tutorial/step_11
angular.module("countryService").factory("countryService",["$scope", "$q", "$resource",
    function($scope, $q, $resource) {
        var Countries = [];



        $scope.countryResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id",
                { id: "@id"},{ update: { method: 'PUT' }});

        Countries = countryResource.query();

        return {
            getCountries: function() {
                //not working
                countryResource.query(function(dataFromServer) {
                    //when the data comes back from the server.

                    Countries = dataFromServer;

                });
                console.log("finished")
            },
            //which controller should do this??
            saveUpdateCountry: function(countryToUpdate) {
                //add to array
                //$scope.countryResource.

                //save with the api
            },

            //deleteCountry:




        }

    }]);
