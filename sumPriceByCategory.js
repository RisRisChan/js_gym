//商品カテゴリー別の価格合計を計算しちゃう関数

// ① 引数となる定数の定義
const products = [
  { title: "シャツ", category: "衣類", price: 500 },
  { title: "ジーンズ", category: "衣類", price: 1200 },
  { title: "スマホケース", category: "小物", price: 400 },
];

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const sumPrice = (data) =>
  data.reduce((accu, { category, price }) => {
    accu[category] = (accu[category] || 0) + price;
    return accu;
  }, {});

console.log(sumPrice(products));
