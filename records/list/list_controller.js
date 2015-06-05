angular.module('wloggerApp.controllers')
    .controller('list_controller', ['$routeParams', 'logItem_service',
    function ($routeParams, logItem_service) {
        var self = this;
        var uid = $routeParams.id;

        self.myLoggers = function(){
            return logItem_service.list();
        };
    }
    ]
);
  