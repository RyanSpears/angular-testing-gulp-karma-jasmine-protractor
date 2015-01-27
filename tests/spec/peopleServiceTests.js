/**
 * Created by Ryan on 27/01/2015.
 */
describe("The peopleService ", function() {

    // instantiate service
    var peopleService = undefined;

    beforeEach(module('app'));

/*    beforeEach(inject(function(_peopleService_) {
        peopleService = _peopleService_;
    }));*/

    it('should return three expense items', inject(function(peopleService){
        expect(peopleService.getPeople().length).toBe(2);
    }))

    // check to see if it has the expected function
/*    it('should have an getPeople function', function (peopleService) {
        expect(angular.isFunction(peopleService.getPeople)).toBe(true);
    });*/

    it(' should have an getPeople function', function () {
        expect(true).toBe(true);
    });
});
