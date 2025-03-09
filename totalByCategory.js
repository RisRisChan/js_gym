//配列内のオブジェクトの値を集計して新たなオブジェクトを作成

// ① 引数となる定数の定義
const items = [
  { category: "服", price: 2000 },
  { category: "食べ物", price: 500 },
  { category: "服", price: 1500 },
];

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
function sumPrice(data) {
  return data.reduce((accu, curr) => {
    // console.log(accu);
    const key = curr.category;
    accu[key] = (accu[key] || 0) + curr.price;
    return accu;
  }, {});
}

// ③ 関数の実行とconsole.logによる確認
// ここに関数を呼び出して実行結果を表示してください。
console.log(sumPrice(items));
