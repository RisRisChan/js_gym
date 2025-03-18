// ① 引数となる定数の定義
const products = [
  { category: "フルーツ", price: 120 },
  { category: "野菜", price: 80 },
  { category: "フルーツ", price: 100 },
  { category: "飲料", price: 150 },
  { category: "野菜", price: 50 },
];

// ② 集計関数の定義
// ここに関数定義のコードを書いてください。
const sumPriceByCategory = (data) =>
  data.reduce((accu, { category, price }) => {
    accu[category] = (accu[category] || 0) + price;
    return accu;
  }, {});

// ③ 関数の実行
// console.logを使って実行結果を表示してください。
console.log(sumPriceByCategory(products));
