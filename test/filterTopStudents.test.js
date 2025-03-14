// filterTopStudents.test.js
const { filterTopStudents } = require("../filterTopStudents");

describe("filterTopStudents", () => {
  // 境界値テスト
  test("閾値以上のスコアを持つ学生を正しくフィルタリングする", () => {
    const students = [
      { name: "太郎", scores: [80, 90, 99] }, // 合計: 269
      { name: "次郎", scores: [95, 85, 90] }, // 合計: 270
    ];

    const result = filterTopStudents(students, 270);

    expect(result).toHaveLength(1);
    expect(result).toContainEqual({ name: "次郎", totalScore: 270 });
  });

  // エッジケース - 空の配列
  test("学生リストが空の場合は空の配列を返す", () => {
    const students = [];

    const result = filterTopStudents(students, 270);

    expect(result).toEqual([]);
  });

  // エッジケース - 全ての学生が条件を満たさない
  test("条件を満たす学生がいない場合は空の配列を返す", () => {
    const students = [
      { name: "太郎", scores: [70, 70, 70] }, // 合計: 210
      { name: "花子", scores: [80, 80, 80] }, // 合計: 240
    ];

    const result = filterTopStudents(students, 250);

    expect(result).toEqual([]);
  });

  // エッジケース - 全ての学生が条件を満たす
  test("全ての学生が条件を満たす場合は全員を返す", () => {
    const students = [
      { name: "太郎", scores: [90, 90, 90] }, // 合計: 270
      { name: "花子", scores: [95, 95, 95] }, // 合計: 285
    ];

    const result = filterTopStudents(students, 250);

    expect(result).toHaveLength(2);
    expect(result).toContainEqual({ name: "太郎", totalScore: 270 });
    expect(result).toContainEqual({ name: "花子", totalScore: 285 });
  });

  // 配列内の順序テスト
  test("結果は元の配列の順序を維持する", () => {
    const students = [
      { name: "太郎", scores: [90, 90, 90] }, // 合計: 270
      { name: "花子", scores: [70, 70, 70] }, // 合計: 210
      { name: "次郎", scores: [95, 95, 95] }, // 合計: 285
    ];

    const result = filterTopStudents(students, 250);

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("太郎");
    expect(result[1].name).toBe("次郎");
  });
});
