define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.c2b0a7b9'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.7d8a9ddf'
        ],
        filters: [
            'filters.01aa453b'
        ],
        directives: [
            'directives.e4e2fadd'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.870a95a6'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
