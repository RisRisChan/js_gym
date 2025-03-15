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
  if (!purchases) {
    throw new Error("購入履歴が提供されていません");
  }

  if (!userId) {
    throw new Error("ユーザーIDが提供されていません");
  }
  return purchases
    .filter((item) => item.userId === userId)
    .reduce((total, item) => {
      if (typeof item.amount !== "number") {
        throw new Error("購入金額は数値でなければなりません");
      }
      return total + item.amount;
    }, 0);
};

// 関数の実行
// ここに関数の実行例を書いてください。
console.log(calculateTotalAmountForUser(purchaseHistory, "u1"));

module.exports = { calculateTotalAmountForUser };
