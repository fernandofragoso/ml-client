export const getCurrency = (currencyId) => {
  switch (currencyId) {
    case 'BRL':
      return 'R$';
    case 'USD':
      return 'US$';
    case 'EUR':
      return '€';
    default:
      return '$';
  }
}

export const getDecimals = (decimals) => {
  if (decimals) {
    return (decimals < 10) ? `0${decimals.toString()}` : decimals.toString();
  } else {
    return '00';
  }
}

export const getCondition = (condition) => {
  switch (condition) {
    case 'new':
      return 'Novo';
    case 'used':
      return 'Usado';
    default:
      return condition;
  }
}

export const getSoldQuantity = (quantity) => {
  if (quantity === 1) {
    return ` - ${quantity} vendido`;
  } else if (quantity > 1) {
    return ` - ${quantity} vendidos`;
  } else {
    return '';
  }
}