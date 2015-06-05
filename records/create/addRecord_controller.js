angular.module('wloggerApp.controllers').
    controller('create_controller', ['$routeParams', '$location', 'logItem_service',
        function ($routeParams, $location, logItem_service) {
            var self = this;
            self.logs = logItem_service.list();
            self.note = "";
            self.dateAdd = Date.now();

            var uid = $routeParams.id;


            self.saveRecord = function(){
               var newRecord = {
                    recordId: 5,

                    recordNote:self.recordNote,
                    recordStatus:'A'
                };

                logItem_service.add(newRecord);

                $location.path('/list');

            };



        }
    ]
);