/**
 * Created by Mal on 19-11-2015.
 */

angular.module("countryApp").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("Home");


        $stateProvider.state("Home", {
            url: "/Home",
            templateUrl: "PartialViews/Home.html",
            //this controller will take care of the list of countries, basicly just routing them to the Edit view
            controller: "allCountriesController"
        })
            .state("Contact", {
                url: "/Contact",
                templateUrl: "PartialViews/Contact.html"
            })
            .state("About", {
                url: "/About",
                templateUrl: "PartialViews/About.html"
            });
        $stateProvider.state("new-country", {
                url: "/new-country",
                templateUrl: "PartialViews/Edit.html",
                //this controller will take care of what happens in the Edit view with the country passed as parameter
                controller: "countriesDataEntryController",
                params: {country:null},


            });

    });
