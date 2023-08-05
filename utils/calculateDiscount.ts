export function calculatePercentageDiscount(
  a: number,
  n: number,
  b: number,
  m: number,
) {
  console.log(a, n, b, m);
  const costPerMonth3Months = a / n;
  const costPerMonth12Months = b / m;

  const percentageDiscount =
    ((costPerMonth3Months - costPerMonth12Months) / costPerMonth3Months) * 100;

  return Math.floor(percentageDiscount);
}
