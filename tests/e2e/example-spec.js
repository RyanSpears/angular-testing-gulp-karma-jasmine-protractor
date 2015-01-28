/**
 * Created by Ryan on 28/01/2015.
 */
describe('angularjs homepage', function() {
    it(' numberOfPeople should have content', function() {
        browser.get('http://www.angularjs.org');
        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});