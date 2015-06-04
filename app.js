angular.module('wloggerApp', [
    "ngRoute",
    "wloggerApp.controllers",
    "wloggerApp.services"
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/',
             { templateUrl: "list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
            )
        .when('/list',
            { templateUrl: "list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
            )
        .when('/list/:id',
           { templateUrl: "list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
        )
        .when('/detail/:id',
           { templateUrl: "detail/detail.html"}
        )
        .when('/create/:id',
            { templateUrl: "create/create.html", controller: "create_controller", controllerAs: 'createCtrl' }
        )
        .otherwise({
            redirectTo: 'list/list.html'
        });

    }]);




angular.module('wloggerApp.controllers', []);
angular.module('wloggerApp.services', []);
