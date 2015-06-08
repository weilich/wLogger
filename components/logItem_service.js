angular.module('wloggerApp.services').
    factory('logItem_service', ['$log', function($log) {
            if(Modernizr.localstorage == false)
                $log.info("local storage not working");

        var logs = [];
        var tm = JSON.parse(localStorage["wLogger"]||"null");
        if(tm != null)
            logs = tm;

       // localStorage["wLogger"] = JSON.stringify(logs);

        return{
            list: function(){

                return logs;
            },

            add: function(item){
                logs.push(item);
                localStorage["wLogger"] = JSON.stringify(logs);
            },

            deleteAll: function(){
                delete window.localStorage["wLogger"];
            },

            getNextID: function(){
                if(logs.length == 0)
                    return 1;
                var id = Math.max.apply(Math, logs.map(function(o){return o.logId;}));
                return id + 1;

            }
        }

    }
    ]
);