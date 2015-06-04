angular.module('wloggerApp.controllers').
    controller('create_controller', ['$routeParams', '$location', 'logItem_service',
        function ($routeParams, $location, logItem_service) {
            var self = this;

            self.saveLog = function(){
               var newLog = {
                    logId:5,
                    logName:self.logName,
                    logStatus:'A'
                };

                logItem_service.add(newLog);

                $location.path('/list');

            };



        }
    ]
);