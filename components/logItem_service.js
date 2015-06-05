angular.module('wloggerApp.services').
    factory('logItem_service', ['$log', function($log) {
            if(Modernizr.localstorage == false)
                $log.info("local storage not working");

        var logs = [
                    //{logId:1, logName:'Log 1', logStatus:'A'},
                    //{logId:2, logName:'log 2', logStatus:'A'},
                    //{logId:3, logName:'log 3', logStatus:'I'}
                    ];

       // localStorage["wLogger"] = JSON.stringify(logs);

        return{
            list: function(){
                logs = JSON.parse(localStorage["wLogger"]||"null");


                return logs;
            },

            add: function(item){
                logs.push(item);
                localStorage["wLogger"] = JSON.stringify(logs);
            },

            deleteAll: function(){
                delete window.localStorage["wLogger"];
            }
        }

    }
    ]
);