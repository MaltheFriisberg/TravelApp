/**
 * Created by Mal on 24-11-2015.
 */
angular.module("countryApp")
    .filter("CountryFilter", function() {

        return function(data, count) {
            if(count > data.length || count < 1) {
                return data;
            }
            else {
                //slice
                return data.slice(count);
            }
        }


    });