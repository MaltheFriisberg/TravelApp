/**
 * Created by Mal on 28-11-2015.
 */
angular.module("countryApp").factory("trackService",
    function($resource, $q) {
        var Tracks = [];
        var AllTracks = [];

        console.log("trackService");

        var trackResource =
            $resource("https://travel-project.azurewebsites.net/countries/:id/tracks",
                { id: "@id"},{ update: { method: 'PUT' }});

        var allTracksResource =
            $resource("https://travel-project.azurewebsites.net/tracks/:id",
                { id: "@id"},{ update: { method: 'PUT' }});



        return {
            //http://stackoverflow.com/questions/26451858/angularjs-resource-passes-id-as-query-parameter-instead-in-url
            getTracksForCountry: function (country) {

                console.log("getTracks "+country.name +" "+ country._id);

                //Tracks = trackResource.query(function(){
                    //trackResource.get({id: country.id});


                //});
                Tracks = trackResource.query({id: country._id});
                //when the data comes back from the server


                //console.log(Tracks.length+ "finished");

                return Tracks;
            },

            getTrackResource : function() {
                return  $resource("https://travel-project.azurewebsites.net/tracks/:id",
                    { id: "@id"},{ update: { method: 'PUT' }});
            },
            getAllTracks: function () {
                console.log("getAllTracks");
                AllTracks = allTracksResource.query();
                return AllTracks;
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
