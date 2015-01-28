/**
 * Created by Ryan on 28/01/2015.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['tests/e2e/example-spec.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};