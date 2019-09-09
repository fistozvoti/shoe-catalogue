describe('Shoe Catalogue function', function () {
    it('should return an error message if there is no input selected on the dropdown list', function () {
        var fetchFactory = ShoeCatalogueFactory();

        let error1 = fetchFactory.filterShoesList({})
        assert.equal('Please make sure you have a shoe item selected!', error1.message)
        
        
    });
    it('should...', function () {
        assert.equal(1,1)
    });
    it('should...', function () {
        
        assert.equal(1,1);
    });
    it('should...', function () {
        
        assert.equal(1,1);
    });
    it('should...', function () {

        assert.deepEqual(1,1);
    });
});