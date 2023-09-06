/* eslint-disable linebreak-style */
/* eslint-disable indent */
import Character from '../character';

test('Create Character', () => {
  const newChar = new Character(100);

  expect(newChar.attack).toBe(100);
});

test('Character Range 5', () => {
  const newChar = new Character(100);
  newChar.range = 5;

  expect(newChar.attack).toBe(60);
});

test('Character Range 2', () => {
  const newChar = new Character(100);
  newChar.range = 2;

  expect(newChar.attack).toBe(90);
});

test('Character Range 2 stoned', () => {
  const newChar = new Character(100);
  newChar.range = 2;
  newChar.stoned = true;

  expect(newChar.attack).toBe(85);
});
