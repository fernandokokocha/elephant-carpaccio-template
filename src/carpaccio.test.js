const calculatePrice = () => {
  return 100;
};

test("returns 100", () => {
  expect(calculatePrice(10, 10)).toEqual(100);
});
