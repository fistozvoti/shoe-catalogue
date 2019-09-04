function ShoeCatalogueFactory() {
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


    function addShoe(color, brand, size) {
        shoebasket = []
        const shoe = {
            color,
            brand,
            size
        };
        shoebasket.push(shoe);
    }

    function filterShoesList(filtered) {
        const shoesFiltered = [];

        const shoeColor = filtered.color;
        const shoeBrand = filtered.brand;
        const shoeSize = filtered.size
        
        if (shoeColor === "") {
            return checkErrors(true, "Please select color of your shoe!")
        }
        if (filtered) {
            return checkErrors(true, "Please make sure you have a shoe item selected!")
        }
        if (shoeSize === undefined) {
            return checkErrors(true, "Please select the size of your shoe!")
        }
        
        if (shoeBrand === "") {
            return checkErrors(true, "Please select Brand of the shoe you want!")
        }
        



        if (shoeColor !== "" && shoeBrand !== "" && shoeSize !== undefined) {
            for (var i = 0; i < getShoeObject.length; i++) {
                const shoeItem = getShoeObject[i];
                if (shoeItem.color === shoeColor
                    && shoeItem.brand === shoeBrand) {
                    shoesFiltered.push(shoeItem);
                }
            }
        } else if (shoeColor !== "") {
            for (var i = 0; i < getShoeObject.length; i++) {
                const shoeItem = getShoeObject[i];
                if (shoeItem.color === shoeColor) {
                    shoesFiltered.push(shoeItem);
                }
            }
        } else if (shoeBrand !== "") {
            for (var i = 0; i < getShoeObject.length; i++) {
                const shoeItem = getShoeObject[i];
                if (shoeItem.brand === shoeBrand) {
                    shoesFiltered.push(shoeItem);
                }
            }
        } else if (shoeSize !== "") {
            for (var i = 0; i < getShoeObject.length; i++) {
                const shoeItem = getShoeObject[i];
                if (shoeItem.size === shoeSize) {
                    shoesFiltered.push(shoeItem);
                }
            }
        }
        return shoesFiltered;;
    }

    function getArrayObjects() {
        return getShoeObject;
    }

    return {
        addShoe,
        filterShoesList,
        getArrayObjects
    }
}
