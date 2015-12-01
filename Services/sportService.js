/**
 * Created by Mal on 01-12-2015.
 */
angular.module("countryApp").factory("sportService",
    function($resource, $q) {
    console.log("sportService");
        var Sports = [];

        var sportResource =
            $resource("http://travel-project.azurewebsites.net/countries/:countryId/:sport/tracks",
                { countryId: "@countryId"},{ update: { method: 'PUT' }},
                { SportId: "@sport"},{ update: { method: 'PUT' }});

        return {

            getSportsForCountry : function(country, sportId) {
                Sports = sportResource.query({countryId: country._id}, {SportId: sportId});
                return Sports;
            }
        }

    });
