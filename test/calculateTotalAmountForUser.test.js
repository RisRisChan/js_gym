// calculateTotalAmountForUser.test.js
const {
  calculateTotalAmountForUser,
} = require("../calculateTotalAmountForUser");

describe("calculateTotalAmountForUser", () => {
  // 境界値テスト
  test("第二引数のユーザーを正しくフィルタリングする", () => {
    const purchaseHistory = [
      { userId: "u1", amount: 500 },
      { userId: "u2", amount: 300 },
      { userId: "u1", amount: 200 },
    ];

    const result = calculateTotalAmountForUser(purchaseHistory, "u1");

    expect(result).toBe(700);
  });
});
