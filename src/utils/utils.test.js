import { getCurrency, getDecimals, getCondition, getSoldQuantity } from './utils';

it('getCurrency(BRL) should return R$', () => {
  expect(getCurrency('BRL')).toBe('R$');
});

it('getCurrency(USD) should return US$', () => {
  expect(getCurrency('USD')).toBe('US$');
});

it('getCurrency(EUR) should return €', () => {
  expect(getCurrency('EUR')).toBe('€');
});

it('getCurrency(ANYTHING) should return $', () => {
  expect(getCurrency('ANYTHING')).toBe('$');
});

it('getDecimals(0) should return 00', () => {
  expect(getDecimals(0)).toBe('00');
});

it('getDecimals(9) should return 09', () => {
  expect(getDecimals(9)).toBe('09');
});

it('getDecimals(99) should return 99', () => {
  expect(getDecimals(99)).toEqual('99');
});

it('getDecimals(undefined) should return 00', () => {
  expect(getDecimals(undefined)).toBe('00');
});

it('getCondition(new) should return Novo', () => {
  expect(getCondition('new')).toBe('Novo');
});

it('getCondition(used) should return Usado', () => {
  expect(getCondition('used')).toBe('Usado');
});

it('getCondition(other) should return other', () => {
  expect(getCondition('other')).toBe('other');
});

it('getSoldQuantity(0) should return ""', () => {
  expect(getSoldQuantity(0)).toEqual('');
});

it('getSoldQuantity(1) should return "1 vendido"', () => {
  expect(getSoldQuantity(1)).toEqual(' - 1 vendido');
});

it('getSoldQuantity(10) should return "10 vendido"', () => {
  expect(getSoldQuantity(10)).toEqual(' - 10 vendidos');
});