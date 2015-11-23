/**
 * Created by Mal on 19-11-2015.
 */

angular.module("countryApp").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("Home");


        $stateProvider.state("Home", {
            url: "/Home",
            templateUrl: "PartialViews/Home.html",
            controller: "TopLevelController"
        })
            .state("Contact", {
                url: "/Contact",
                templateUrl: "PartialViews/Contact.html"
            })
            .state("About", {
                url: "/About",
                templateUrl: "PartialViews/About.html"
            });
        $stateProvider.state("Edit", {
                url: "/Edit",
                templateUrl: "ParialViews/Edit.html",
                controller: "TopLevelController", //redundant??
                params: {country:null}
            });

    });
