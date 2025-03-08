// イベント参加者データから年代別参加者数を集計せよ！
const countByDecade = (data) => {
  return data.reduce((accu, curr) => {
    console.log(accu);
    const decade = `${Math.floor(curr.age / 10) * 10}代`;
    accu[decade] = (accu[decade] || 0) + 1;
    return accu;
  }, {});
};

const participants = [
  { name: "山田太郎", age: 25 },
  { name: "鈴木一郎", age: 34 },
  { name: "佐藤次郎", age: 45 },
  { name: "高橋幸子", age: 25 },
];

console.log(countByDecade(participants));
