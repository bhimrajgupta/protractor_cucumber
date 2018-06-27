//protractor.conf.js
const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //  frameworkPath: require.resolve('serenity-js'),
    serenity: {
        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
        dialect: 'cucumber',  // or 'mocha'
    },
    capabilities: {
        'browserName': 'chrome'
    },
    /*"For Multi browser support with Protractor
        directConnect: true"
        Update Mozilla firefox version > 60.0
     */
    /*
    multiCapabilities: [
        {'browserName': 'chrome'},
        {'browserName': 'firefox'}
    ],
    */

    directConnect: true,

    // Spec patterns are relative to this directory.
    specs: [
        'features/feature_files/test.feature'
    ],

    baseURL: 'http://localhost:8080/',

    cucumberOpts: {
        require: 'features/step_definitions/my_step_definitions.js',
        tags: false,

        // format: 'pretty',
        profile: false,
        'no-source': true
    },

    exports: config = {
        // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
        getPageTimeout: 60000,
        allScriptsTimeout: 500000,
        framework: 'custom',
        // path relative to the current config file
        frameworkPath: require.resolve('protractor-cucumber-framework'),
        //  frameworkPath: require.resolve('serenity-js'),
        serenity: {
            crew: [
                crew.serenityBDDReporter(),
                crew.photographer()
            ],
            outputDirectory: `${process.cwd()}/target/site/serenity/`,
            dialect: 'cucumber',  // or 'mocha'
        },
        capabilities: {
            'browserName': 'chrome'
        },
        directConnect: true,

        // Spec patterns are relative to this directory.
        specs: [
            'features/feature_files/test.feature'
        ],

        baseURL: 'http://localhost:8080/',

        cucumberOpts: {
            require: 'features/step_definitions/my_step_definitions.js',
            tags: false,
            /*
        * Individual tag execution:
        * Option1: run protractor conf.js --cucumberOpts.tags="scenario1" --cucumberOpts.tags="scenario2"
        * Option2: cucumberOpts:{tags: '@scenario2,}                    Individual tag
        *          cucumberOpts:{tags: ('@scenario2, @scenario1')}      Logical AND
        *          cucumberOpts:{tags: ('@scenario2', '@scenario1')}    Logical OR
        * */

            // format: 'pretty',
            profile: false,
            'no-source': true
        }
    }
}