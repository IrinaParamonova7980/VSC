let arr1 = ["js", "css", "html"];
document.write(arr1[0] + "<br>");

const arr2 = [0, 1, false, 2, undefined, "", 3, null];
const filteredArr2 = arr2.filter(Boolean);
document.write(filteredArr2 + "<br>");

let arr3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
for (let i = 0; i < arr3.length; i++) {
  let innerArrayLength = arr3[i].length;

  if (innerArrayLength > 3) {
    document.write(i);
  }
}
