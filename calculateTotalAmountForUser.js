//購入履歴からユーザーごとの購入金額を合計！

// 引数となる定数の定義
const purchaseHistory = [
  { userId: "u1", amount: 500 },
  { userId: "u2", amount: 300 },
  { userId: "u1", amount: 200 },
];

// ユーザーごとの購入金額を集計する関数を定義してください。
// ここに関数定義のコードを書いてください。

const calculateTotalAmountForUser = (purchases, userId) => {
  return purchases
    .filter((item) => item.userId === userId)
    .reduce((total, item) => total + item.amount, 0);
};

// const calculateTotalAmountForUser = (data, targetUserId) =>
//   data.reduce((accu, { userId, amount }) => {
//     accu[userId] = (accu[userId] || 0) + amount;
//     return accu;
//   }, {})[targetUserId];

// 関数の実行
// ここに関数の実行例を書いてください。
console.log(calculateTotalAmountForUser(purchaseHistory, "u1"));

module.exports = { calculateTotalAmountForUser };
