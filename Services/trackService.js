/**
 * Created by Mal on 28-11-2015.
 */
angular.module("countryApp").factory("trackService",
    function($resource, $q) {
        //var Tracks = [];


        console.log("trackService");

        var trackResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id/tracks",
                { id: "@id"},{ update: { method: 'PUT' }});

       // var Countries = trackResource.query();

        return {
            getTracks: function (country) {
                var deferred = $q.defer();
                console.log("getCountries");
                var Tracks = [];
                Track = trackResource.query(country);
                //Countries = countryResource.query();
                //when the data comes back from the server


                console.log(Countries.length+ "finished");

                return Tracks;
            },
            //which controller should do this??
            saveUpdateTrack: function (trackToUpdate) {
                //add to array
                //$scope.countryResource.

                //save with the api
            },

            //deleteCountry:


        }

    });
