const main = require('./returningFunctions');

let DtoB = main.DtoB;
let DtoO = main.DtoO;
let DtoHex = main.DtoHex;

test('Testing DtoB with value 0', () => {expect(DtoB(0)).toBe('0')});
test('Testing DtoB with value 1', () => {expect(DtoB(1)).toBe('1')});
test('Testing DtoB with value 5', () => {expect(DtoB(5)).toBe('101')});
test('Testing DtoB with value 10', () => {expect(DtoB(10)).toBe('1010')});
test('Testing DtoB with value 36', () => {expect(DtoB(36)).toBe('100100')});
test('Testing DtoB with value 145', () => {expect(DtoB(145)).toBe('10010001')});
test('Testing DtoB with value 320', () => {expect(DtoB(320)).toBe('101000000')});
test('Testing DtoB with value 500', () => {expect(DtoB(500)).toBe('111110100')});
test('Testing DtoB with value 1234', () => {expect(DtoB(1234)).toBe('10011010010')});
test('Testing DtoB with value 76589', () => {expect(DtoB(76589)).toBe('10010101100101101')});

test('Testing DtoO with value 0', () => {expect(DtoO(0)).toBe('0')});
test('Testing DtoO with value 1', () => {expect(DtoO(1)).toBe('1')});
test('Testing DtoO with value 5', () => {expect(DtoO(5)).toBe('5')});
test('Testing DtoO with value 10', () => {expect(DtoO(10)).toBe('12')});
test('Testing DtoO with value 36', () => {expect(DtoO(36)).toBe('44')});
test('Testing DtoO with value 145', () => {expect(DtoO(145)).toBe('221')});
test('Testing DtoO with value 320', () => {expect(DtoO(320)).toBe('500')});
test('Testing DtoO with value 500', () => {expect(DtoO(500)).toBe('764')});
test('Testing DtoO with value 1234', () => {expect(DtoO(1234)).toBe('2322')});
test('Testing DtoO with value 76589', () => {expect(DtoO(76589)).toBe('225455')});

test('Testing DtoHex with value 0', () => {expect(DtoHex(0)).toBe('0')});
test('Testing DtoHex with value 1', () => {expect(DtoHex(1)).toBe('1')});
test('Testing DtoHex with value 5', () => {expect(DtoHex(5)).toBe('5')});
test('Testing DtoHex with value 10', () => {expect(DtoHex(10)).toBe('A')});
test('Testing DtoHex with value 36', () => {expect(DtoHex(36)).toBe('24')});
test('Testing DtoHex with value 145', () => {expect(DtoHex(145)).toBe('91')});
test('Testing DtoHex with value 320', () => {expect(DtoHex(320)).toBe('140')});
test('Testing DtoHex with value 500', () => {expect(DtoHex(500)).toBe('1F4')});
test('Testing DtoHex with value 1234', () => {expect(DtoHex(1234)).toBe('4D2')});
test('Testing DtoHex with value 76589', () => {expect(DtoHex(76589)).toBe('12B2D')});