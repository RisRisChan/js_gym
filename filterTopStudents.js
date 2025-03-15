// ① 引数となる定数の定義
const students = [
  { name: "太郎", scores: [80, 90, 100] },
  { name: "花子", scores: [70, 85, 90] },
];

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const filterTopStudents = (students, minScore) => {
  return students
    .map((student) => ({
      name: student.name,
      totalScore: student.scores.reduce((accu, curr) => accu + curr, 0),
    }))
    .filter((student) => student.totalScore >= minScore);
};

// ③ 関数の実行とconsole.logで確認
// ここに関数を実行するコードを書いてください。
console.log(filterTopStudents(students, 270));

module.exports = { filterTopStudents };
