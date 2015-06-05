angular.module('wloggerApp', [
    "ngRoute",
    "wloggerApp.controllers",
    "wloggerApp.services"
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/',
             { templateUrl: "logs/list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
            )
        .when('/list',
            { templateUrl: "logs/list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
            )
        .when('/list/:id',
           { templateUrl: "logs/list/list.html", controller: "list_controller", controllerAs: 'lstCtrl' }
        )

        .when('/detail/:id',
           { templateUrl: "logs/detail/detail.html"}
        )
        .when('/create/:id',
            { templateUrl: "logs/create/create.html", controller: "create_controller", controllerAs: 'createCtrl' }
        )
        .when('/addRecord/:id',
            { templateUrl: "records/create/addRecord.html", controller: "addRecord_controller", controllerAs: 'addRecordCtrl' }
        )
        .otherwise({
            redirectTo: 'list/list.html'
        });

    }]);




angular.module('wloggerApp.controllers', []);
angular.module('wloggerApp.services', []);
