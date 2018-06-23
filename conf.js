<<<<<<< HEAD
//protractor.conf.js
const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),
   //  frameworkPath: require.resolve('serenity-js'),
    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
        dialect: 'cucumber',  // or 'mocha'
    },
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect:true,

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
    }
=======
//protractor.conf.js
const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),
   //  frameworkPath: require.resolve('serenity-js'),
    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
        dialect: 'cucumber',  // or 'mocha'
    },
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect:true,

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
    }
>>>>>>> d19b6f6320c9f83c39bb2564671ce1bd06f9aba6
};