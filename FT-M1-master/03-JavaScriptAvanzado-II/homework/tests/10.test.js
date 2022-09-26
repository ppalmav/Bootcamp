const insertAndSort = require("../10");

describe("insertAndSort", function () {
  it("EJERCICIO 10: insertAndSort Debe devolvar un array ordenado con los números del array y el objeto recibido.", function () {
    let array = [4, 8, 13];
    let obj = { a: 2, b: 1, c: 5 };
    expect(insertAndSort(array, obj)).toEqual([1, 2, 4, 5, 8, 13]);
  });
});
