"use strict";angular.module("haikuApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]);var app=angular.module("haikuApp");app.controller("MainCtrl",["$scope","$mdBottomSheet",function(a,b){a.openBottomSheet=function(){b.show({template:'<md-bottom-sheet class="md-grid"><div layout="row" class="bottom"><div flex style="">Fork on <a href="https://github.com/iamuros/haiku">Github</a></div><div flex>Uros Gucunja</div><!-- <div flex>Facebook</div> --></div></md-bottom-sheet>',controller:"MainCtrl"})},a.refresh=function(){a.first="",a.second="",a.third="",a.syllable_count=5,a.syllable_count_seven=7},a.countSyllableFive=function(b){a.syllable_count=5;var c=b;c=c.toLowerCase(),c=c.replace(/(?:[^laeiouy]es|ed|ne|[^laeiouy]e)$/,"").replace(/^yo/,"").match(/[aeiouy]{1,2}/g).length,a.syllable_count-=c},a.countSyllableSeven=function(b){a.syllable_count_seven=7;var c=b;c=c.toLowerCase(),c=c.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"").replace(/^yo/,"").match(/[aeiouy]{1,2}/g).length,a.syllable_count_seven-=c}}]),angular.module("haikuApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]});