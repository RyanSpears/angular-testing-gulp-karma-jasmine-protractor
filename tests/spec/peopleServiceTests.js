/**
 * Created by Ryan on 27/01/2015.
 */
describe("The peopleService ", function() {

    // instantiate service
    var peopleService = undefined;

    beforeEach(module('app'));

    it('should return three expense items', inject(function(peopleService){
        expect(peopleService.getPeople().length).toBe(2);
    }))

    it('should be able to all getPeople function', inject(function (peopleService) {
        var spy = spyOn(peopleService, 'getPeople');
        peopleService.getPeople();
        expect(spy).toHaveBeenCalled();
    }));
});
