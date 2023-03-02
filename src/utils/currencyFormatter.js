export const currencyFormatter = (money) => {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}