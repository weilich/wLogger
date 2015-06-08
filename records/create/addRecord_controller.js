angular.module('wloggerApp.controllers').
    controller('addRecord_controller', ['$routeParams', '$location', 'logItem_service',
        function ($routeParams, $location, logItem_service) {
            var self = this;
            self.logs = logItem_service.list();
            self.recordNote = "";
            self.dateAdd = Date.now();
            self.selectedLog ="";

            var uid = $routeParams.id;


            self.saveRecord = function(){
               var newRecord = {
                    logId: self.selectedLog.logId,
                    recordId: 1,
                    recordNote:self.recordNote,
                    recordStatus:'A'
                };

                logItem_service.add(newRecord);

                $location.path('/list');

            };



        }
    ]
);