// calculateTotalAmountForUser.test.js
const {
  calculateTotalAmountForUser,
} = require("../calculateTotalAmountForUser");

describe("calculateTotalAmountForUser", () => {
  // 基本機能テスト
  test("第二引数のユーザーを正しくフィルタリングする", () => {
    const purchaseHistory = [
      { userId: "u1", amount: 500 },
      { userId: "u2", amount: 300 },
      { userId: "u1", amount: 200 },
    ];

    const result = calculateTotalAmountForUser(purchaseHistory, "u1");

    expect(result).toBe(700);
  });

  // 空の配列のテスト
  test("空の購入履歴の場合は0を返す", () => {
    const purchaseHistory = [];

    const result = calculateTotalAmountForUser(purchaseHistory, "u1");

    expect(result).toBe(0);
  });

  // 指定ユーザーが存在しない場合のテスト
  test("指定されたユーザーIDが存在しない場合は0を返す", () => {
    const purchaseHistory = [
      { userId: "u1", amount: 500 },
      { userId: "u2", amount: 300 },
    ];

    const result = calculateTotalAmountForUser(purchaseHistory, "u3");

    expect(result).toBe(0);
  });

  // 無効な入力値のテスト
  test("purchaseHistoryがnullまたはundefinedの場合はエラーをスローする", () => {
    expect(() => {
      calculateTotalAmountForUser(null, "u1");
    }).toThrow();

    expect(() => {
      calculateTotalAmountForUser(undefined, "u1");
    }).toThrow();
  });

  // userIdがnullまたはundefinedの場合のテスト
  test("userIdがnullまたはundefinedの場合はエラーをスローする", () => {
    const purchaseHistory = [
      { userId: "u1", amount: 500 },
      { userId: "u2", amount: 300 },
    ];

    expect(() => {
      calculateTotalAmountForUser(purchaseHistory, null);
    }).toThrow();

    expect(() => {
      calculateTotalAmountForUser(purchaseHistory, undefined);
    }).toThrow();
  });

  // 金額が負の値のケースを処理できることを確認するテスト
  test("負の金額を含む場合も正しく合計する", () => {
    const purchaseHistory = [
      { userId: "u1", amount: 500 },
      { userId: "u1", amount: -200 }, // 返金など
    ];

    const result = calculateTotalAmountForUser(purchaseHistory, "u1");

    expect(result).toBe(300);
  });

  // amountプロパティが数値でない場合のテスト
  test("amountプロパティが数値でない場合はエラーをスローする", () => {
    const purchaseHistory = [
      { userId: "u1", amount: "500" }, // 文字列として渡された場合
    ];

    expect(() => {
      calculateTotalAmountForUser(purchaseHistory, "u1");
    }).toThrow();
  });
});
