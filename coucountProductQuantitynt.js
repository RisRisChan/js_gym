//不具合だらけの商品の数量カウント関数を修正しろ
const orderList = [
  { product: "机", quantity: 2 },
  { product: "椅子", quantity: 4 },
  { product: "机", quantity: 1 },
];

const countProductQuantity = (orders, productName) =>
  orders.reduce(
    (sum, orders) =>
      sum + (orders.product === productName ? orders.quantity : 0),
    0
  );

console.log(countProductQuantity(orderList, "机"));
