var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(30 * 1000);
    Given(/^I go to protractor$/, function (callback) {
        browser.get("http://www.protractortest.org/#/")
            .then(callback);
    });

    When(/^I go to the reference tab$/, function (callback) {
        element(by.id('drop4')).click()
            .then(callback);
    });

    When(/^I go to the protractor API$/, function (callback) {
        element(by.xpath("/html/body/nav/div/div[2]/div/ul/li[5]/ul/li[2]/a")).click()
            .then(callback);
    });

    Then(/^I should see the Protractor API page$/, function (callback) {
        var title = element(by.id('title')).getText();
        assert(title).contains("Protractor API")
            .then(callback);
    });
});