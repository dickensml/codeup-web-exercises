// ================================= WARM UP
//
// Consider an array of product objects:

    const products = [
        {
            name: 'Hammer',
            priceInCents: 4500,
            isInStock: true
        },
        {
            name: 'Computer',
            priceInCents: 45000,
            isInStock: true
        },
        {
            name: 'Water Bottle',
            priceInCents: 3300,
            isInStock: true
        },
        {
            name: 'Car',
            priceInCents: 990000,
            isInStock: true
        },
        {
            name: 'Cup',
            priceInCents: 230,
            isInStock: false
        },
        {
            name: 'Book',
            priceInCents: 540,
            isInStock: false
        },
    ];

// Create the following functions that take in an array of product objects and return various values:
//
//     returnMostExpensiveProductObjectInStock(products)


//

// returnLeastExpensiveProductObjectInStock(products)

// function leastExpProd(products) {
//
//     let max = products[0].priceInCents;
//     let returnProd = {}
//     products.forEach(product => {
//         if ((product.priceInCents <= max) && (product.isInStock)) {
//         max = product.priceInCents;
//         returnProd = product;
//         }
//     });
//     return(returnProd);
// }
// console.log(leastExpProd(products));

// returnAveragePriceOfAllProductsInStock(products)

// function avPrice(products) {
//     let sum = 0;
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].isInStock) {
//             sum += products[i].priceInCents;
//         }
//     }
//     return sum / products.length;
// }
// console.log(avPrice(products));

// returnProductObjectsNotInStock(products)

function notInStock(products) {
    // for (var i = 0; i < products.length; i++) {
    //      if (products[i].isInStock = false) {

    // products.forEach(product => {
//         if ((product.priceInCents > max) && (product.isInStock)) {
//             max = product.priceInCents;
//             returnObject = product;
//         }
    products.forEach(product => {
        if (products.isInStock = false)
            return products.name;
    }
}
console.log(notInStock(products));