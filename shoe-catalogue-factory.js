function ShoeCatalogueFactory() {
    var shoppingBasket = [];
    var getShoeObject = shoesObject;
    var totalCost = 0;
    var errorMessages = {
        ifError: false,
        message: ''
    }

    // console.log(getShoeObject)

    function checkErrors(error, msg) {
        errorMessages.ifError = error;
        errorMessages.message = msg;
        return errorMessages;
    }

    function filterShoesList(filtered) {
        var filteredArray = getShoeObject.filter(function (brand, size, color) {
            const shoeColor = filtered.color;
            const shoeBrand = filtered.brand;
            const shoeSize = filtered.size;

            console.log(filtered);
            console.log(brand);
            console.log(size);
            console.log(color);
            
            

            if ((Object.keys(filtered)).length === 0) {
                console.log("message!")
                return checkErrors(true, "Please make sure you have a shoe item selected!");
            } else {
                console.log();
                
                return shoeBrand == brand &&
                    shoeColor == color &&
                    shoeSize == size;
            }


        });
        return filteredArray
    }

    function addingShoe(brand, color, size, price, in_stock) {
        var shoeExist = false;
        getShoeObject.map(shoe => {
            if (shoe.brand == brand && shoe.color == color && shoe.size == size) {
                shoe.in_stock++;
                shoeExist = true;
                return;
            }
        })
        if (!shoeExist) {
            var shoe = { id: getShoeObject.length + 1, color: color, brand: brand, size: size, price: price, in_stock: in_stock };
            getShoeObject.push(shoe);
        }
    }

    function filterById(id) {
        return getShoeObject.filter(function (shoe) {
            return shoe.id == id;
        });
    }

    function shoppingBasket(id) {
        var ifExist = false;
        var shoes = filterById(id);
        var shoe = shoes[0];
        if (shoe.in_stock > 0) {
            if (shoppingBasket.length > 0) {
                shoppingBasket.map(item => {
                    if (item.brand == shoe.brand && item.color == shoe.color && item.size == shoe.size) {
                        item.stock++;
                        item.total = item.stock * item.price;
                        ifExist = true;
                    }
                })
                if (!ifExist) {
                    var newShoe = { brand: shoe.brand, color: shoe.color, size: shoe.size, stock: 1, price: shoe.price, total: shoe.price };
                    shoppingBasket.push(newShoe);
                }
            } else {
                var newShoe = { brand: shoe.brand, color: shoe.color, size: shoe.size, stock: 1, price: shoe.price, total: shoe.price };
                shoppingBasket.push(newShoe);
            }
            var shoesItem = filterShoesList(shoe.brand, shoe.color, shoe.size);
            var currentShoe = shoesItem[0];
            currentShoe.in_stock--;
            var shoppingBasketTotal = 0;
            for (var i = 0; i < shoppingBasket.length; i++) {
                shoppingBasketTotal += shoppingBasket[i].total;
            }
            shoppingBasketTotal = shoppingBasketTotal;
        }
    }
    return {
        filterShoesList,
        shoppingBasket,
        addingShoe,
    }
}

