const removeDuplicates = (arr) => {
  const uniqueIds = new Set();
  return arr.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false;
    } else {
      uniqueIds.add(item.id);
      return true;
    }
  });
};
const array = [
  { id: 1, name: "太郎" },
  { id: 2, name: "花子" },
  { id: 1, name: "次郎" },
  { id: 3, name: "三郎" },
];
console.log(removeDuplicates(array));
