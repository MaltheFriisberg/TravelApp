/**
 * Created by Mal on 24-11-2015.
 */
//Could Instantiate a new module, but lets not for now
// help here https://docs.angularjs.org/tutorial/step_11
angular.module("countryApp").factory("countryService",
    function($resource, $q) {
        //var Countries = [];


        console.log("countryService");

        var countryResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id",
                {id: "@id"}, {update: {method: 'PUT'}, save: { method: "POST" }});

        var Countries = countryResource.query();

        return {
            getCountries: function () {
                var deferred = $q.defer();
                console.log("getCountries");



                /*Countries.$promise.then(function(data) {
                    return data;
                });*/


                console.log(Countries.length+ "finished");

                return Countries;
            },
            getResource: function () {
                return $resource("https://travel-project.azurewebsites.net/countries/:id",
                    {id: "@id"}, {update: {method: 'PUT'}, save: { method: "POST" }});
            },
            //which controller should do this??
            saveCountry: function (countryToUpdate) {
                //add to array
                Countries.push(countryToUpdate);
                //$scope.countryResource.

                //save with the api
            },

            //deleteCountry:


        }

    });
