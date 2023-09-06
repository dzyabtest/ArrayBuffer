/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const buffer16BitView = new Int16Array(this.buffer);

    return String.fromCharCode(...buffer16BitView);
  }
}
