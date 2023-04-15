import attack from './attack';

test('should return damage sentence correctly when called correctly', () => {
  const result = attack('Pikachu', 2);
  expect(result).toBe('Pikachu dealt 23 damage!');
  expect(result).toMatch(/^Pikachu(.*)23/);
  expect(result).toMatchInlineSnapshot('"Pikachu dealt 23 damage!"');
});
