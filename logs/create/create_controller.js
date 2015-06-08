angular.module('wloggerApp.controllers').
    controller('create_controller', ['$routeParams', '$location', 'logItem_service',
        function ($routeParams, $location, logItem_service) {
            var self = this;
            self.logName = "****";
            var uid = $routeParams.id;

            self.saveLog = function(){
                var newID = logItem_service.getNextID();
               var newLog = {
                    logId: newID,
                    logName:self.logName,
                    logStatus:'A'
                    //logRecords:[]

                };

                logItem_service.add(newLog);

                $location.path('/list');

            };



        }
    ]
);