const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
  it("Books names in a right line", () => {
    const input = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
  it("Books names have two identical names", () => {
    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
});
