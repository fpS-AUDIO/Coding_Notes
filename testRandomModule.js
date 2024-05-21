const cart = [];
// exporting function
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const price = 22.5;
let totalQuantity = 245;

// exporting multiple things and using `as` to change variable name
export { price as totalPrice, totalQuantity };

// default export
// export default value (without any name)
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

