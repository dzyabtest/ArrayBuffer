/* eslint-disable linebreak-style */
/* eslint-disable indent */
import Magician from '../magician';

test('Create Character', () => {
  const newChar = new Magician();

  expect(newChar.attack).toBe(100);
});

test('Character Range 5', () => {
  const newChar = new Magician();
  newChar.range = 5;

  expect(newChar.attack).toBe(60);
});

test('Character Range 2', () => {
  const newChar = new Magician();
  newChar.range = 2;

  expect(newChar.attack).toBe(90);
});

test('Character Range 2 stoned', () => {
  const newChar = new Magician();
  newChar.range = 2;
  newChar.stoned = true;

  expect(newChar.attack).toBe(85);
});
