/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor(attackPower) {
    this._attack = attackPower;
    this.range = 1;
    this.stoned = false;
  }

  set attack(attackPower) {
    this._attack = attackPower;
  }

  get attack() {
    if (this.stoned) {
    // eslint-disable-next-line no-mixed-operators
      return Math.max(Math.round((this._attack * (11 - this.range) / 10)
      - Math.log2(this.range) * 5), 0);
    }
    // eslint-disable-next-line no-mixed-operators
    return Math.max(Math.round(this._attack * (11 - this.range) / 10), 0);
  }
}
