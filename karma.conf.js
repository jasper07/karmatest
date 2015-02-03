module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['qunit', 'openui5'],
        files: [{
            pattern: 'bower_components/openui5-sap.ui.core/resources/**/*',
            served: true,
            included: false,
            watched: false
        }, {
            pattern: 'bower_components/openui5-sap.m/resources/**/*',
            served: true,
            included: false,
            watched: false
        }, {
            pattern: 'bower_components/openui5-sap.ui.layout/resources/**/*',
            served: true,
            included: false,
            watched: false
        }, {
            pattern: 'bower_components/openui5-themelib_sap_bluecrystal/resources/**/*',
            served: true,
            included: false,
            watched: false
        }, {
            pattern: 'webapp/**/*',
            served: true,
            included: false,
            watched: true
        }, {
            pattern: 'test/**/*',
            served: true,
            included: true,
            watched: true
        }],
        // preprocessors: {
        //     'src/**/*.js': ['coverage']
        // },
        openui5: {
            path: 'bower_components/openui5-sap.ui.core/resources/sap-ui-core.js',
            useMockServer: true
        },
        client: {
            openui5: {
                config: {
                    theme: 'sap_bluecrystal',
                    libs: 'sap.m',
                    resourceroots: {
                        'sap.m': '/base/bower_components/openui5-sap.m/resources/sap/m',
                        'sap.ui.layout': '/base/bower_components/openui5-sap.ui.layout/resources/sap/ui/layout',
                        'sap.ui.demo.tdg': '/base/webapp',
                        'sap.ui.demo.tdg.test': '/base/test'
                    },
                    themeroots: {
                        'sap_bluecrystal': '/base/bower_components/openui5-themelib_sap_bluecrystal/resources'
                    },
                    mockserver: {
                        config: {
                            autoRespond: true
                        },
                        rootUri: '/uilib-sample/proxy/http/services.odata.org/V2/(S(sapuidemobespractices))/OData/OData.svc/',
                        metadataURL: '/base/webapp/model/metadata.xml',
                        mockdataSettings: '/base/webapp/model/'
                    }
                }
            }
        },
        reporters: ['progress'], //'coverage'],
        // coverageReporter: {
        //     type: 'html',
        //     dir: 'coverage'
        // },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
