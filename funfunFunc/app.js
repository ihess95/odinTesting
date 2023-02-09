if (
  orderTotal({
    items: [
      { name: "Dragon Food", price: 8, quantity: 8 },
      { name: "Dragon Cage (small)", price: 800, quantity: 2 },
    ],
  }) !== 808
) {
  throw new Error("Check fail: Happy Path (Example 1)");
}
if (
  orderTotal({
    items: [
      { name: "Dragon collar", price: 20 },
      { name: "Dragon chew toy", price: 40 },
    ],
  }) !== 60
) {
  throw new Error("Check fail: Happy Path (2)");
}

function orderTotal(prder) {
  return order.items.reduce((prev, cur) => cur.price + prev, 0);
}

// const someOrder = {
//     { name: "Shipping", price: 40, shipping: true },
//   ],
// };

// const orderTotal = (order) => {
//   const totalItems = order.items
//     .filter((x) => !x.shipping)
//     .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
//   const shippingItem = order.items.find((x) => !!x.shipping);
//   const shipping = totalItems > 1000 ? 0 : shippingItem.price;
//   return totalItems + shipping;
// };

// result = orderTotal(someOrder);
