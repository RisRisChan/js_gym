//複数条件を満たすオブジェクトの抽出
//① 引数の配列の定義
const people = [
  { name: "和彦", score: 90, group: "A" },
  { name: "美咲", score: 85, group: "B" },
  { name: "和彦", score: 92, group: "A" },
  { name: "明宏", score: 78, group: "C" },
];

//② 条件となるオブジェクトの定義
const condition = { name: "和彦", group: "A" };

//③ 関数の定義
//ここに関数を定義してください。
// const filteredObject = (data) => {
//   return data.filter((f) => {
//     return f.name == condition.name && f.group == condition.group;
//   });
// };

const searchObjects = (arr, condition) =>
  arr.filter((obj) =>
    Object.entries(condition).every(([key, value]) => obj[key] == value)
  );

//④ 関数の実行
//ここで関数を実行し、console.logに結果を表示してください。
console.log(searchObjects(people, condition));
