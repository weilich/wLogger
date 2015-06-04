angular.module('wloggerApp.services').
    factory('logItem_service', [function($localStorage) {

        var logs = [
                    {logId:1, logName:'Log 1', logStatus:'A'},
                    {logId:2, logName:'log 2', logStatus:'A'},
                    {logId:3, logName:'log 3', logStatus:'I'}
                    ];

        $localStorage.wLogger_myLogs = logs;

        return{
            list: function(){
                if ($localStorage.wLogger_myLogs == undefined)
                {
                    $localStorage.wLogger_myLogs = logs;

                }
                else
                    logs = $localStorage.wLogger_myLogs;


                return logs;
            },

            add: function(item){
                logs.push(item);
                $localStorage.wLogger_myLogs = logs;
            }
        }

    }
    ]
);