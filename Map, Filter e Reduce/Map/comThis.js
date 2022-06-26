
const banana = {
    price: 3,
};

const lemon = {
    price: 2.5, 
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function (item) {
        return item * this.price;
    }, lemon);
}

console.log(mapArray());