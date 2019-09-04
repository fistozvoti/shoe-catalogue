describe('Shoe Catalogue function', function () {
    it('should return an error message if there is no input selected on the dropdown list', function () {
        var fetchFactory = ShoeCatalogueFactory();

        let error1 = fetchFactory.filterShoesList({})
        assert.equal('Please make sure you have a shoe item selected!', error1.message)
        
        
    });
    it('should return an error message if there is no Color selected!', function () {
        var fetchFactory = ShoeCatalogueFactory();

        let error2= fetchFactory.filterShoesList({
            color : "",
            brand : "Nike",
            price : 600,
            size : 4,
            in_stock : 7
        })
        assert.equal('Please select color of your shoe!', error2.message);
    });
    it('should return an error message if there is no Brand selected!', function () {
        var fetchFactory = ShoeCatalogueFactory();

        let error3 = fetchFactory.filterShoesList({
            color : "white",
            brand : "",
            price : 400,
            size : 5,
            in_stock : 5
        })
        assert.equal('Please select Brand of the shoe you want!', error3.message);
    });
    it('should return an error message if there is no shoe size selected!', function () {
        var fetchFactory = ShoeCatalogueFactory();

        let error4 = fetchFactory.filterShoesList({
            color : "black",
            brand : "Nike",
            price : 600,
            size : 0,
            in_stock : 7
        })
        assert.equal('Please select the size of your shoe!', error4.message);
    });
});