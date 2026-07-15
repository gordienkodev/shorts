function setPrice(product, price, isProductChanged) {
    product.price = price;
    isProductChanged = true;
}

let isProductChanged = false;
const product = {
    name: "milk",
    amount: 5
};

setPrice(product, 5000, isProductChanged);
console.log(product, isProductChanged); 