export const getCurrency = (currencyId) => {
  switch (currencyId) {
    case 'BRL':
      return 'R$';
    case 'USD':
      return 'US$';
    case 'EUR':
      return '€';
    default:
      return currencyId;
  }
}