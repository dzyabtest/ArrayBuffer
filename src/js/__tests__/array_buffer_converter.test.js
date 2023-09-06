/* eslint-disable linebreak-style */
/* eslint-disable indent */
import getBuffer from '../array_buffer';
import ArrayBufferConverter from '../array_buffer_converter';

test('Create Character', () => {
    const convertor = new ArrayBufferConverter();

    convertor.load(getBuffer());

    expect(convertor.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
