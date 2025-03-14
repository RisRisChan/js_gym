//学生スコア分析システム

const filterTopStudents = (students, minScore) => {
  return students
    .map((student) => ({
      name: student.name,
      totalScore: student.scores.reduce((sum, score) => sum + score, 0),
    }))
    .filter((student) => student.totalScore >= minScore);
};

const students = [
  { name: "太郎", scores: [80, 90, 100] },
  { name: "花子", scores: [70, 85, 90] },
];

console.log(filterTopStudents(students, 270));

module.exports = { filterTopStudents };
