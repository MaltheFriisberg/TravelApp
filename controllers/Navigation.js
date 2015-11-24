/**
 * Created by Mal on 19-11-2015.
 */

angular.module("countryApp").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("Home");


        $stateProvider.state("Home", {
            url: "/Home",
            templateUrl: "PartialViews/Home.html",
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
                controller: "countriesDataEntryController", //redundant??
                params: {country:null},


            });

    });
