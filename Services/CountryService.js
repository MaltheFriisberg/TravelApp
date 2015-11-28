/**
 * Created by Mal on 24-11-2015.
 */
//Could Instantiate a new module, but lets not for now
// help here https://docs.angularjs.org/tutorial/step_11
angular.module("countryApp").factory("countryService",
    function($resource, $q) {
        var Countries = [];
        var deferred = $q.defer();

        console.log("countryService");

        var countryResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id",
                {id: "@id"}, {update: {method: 'PUT'}});

        var Countries = countryResource.query();

        return {
            getCountries: function () {

                console.log("getCountries");
                //Countries = countryResource.query();
                    //when the data comes back from the server


                console.log(Countries.length);

                return Countries;
            },
            //which controller should do this??
            saveUpdateCountry: function (countryToUpdate) {
                //add to array
                //$scope.countryResource.

                //save with the api
            },

            //deleteCountry:


        }

    });
