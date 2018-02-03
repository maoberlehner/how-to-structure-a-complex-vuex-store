export class Name {
  constructor({ firstName = ``, lastName = `` } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export function createName(data) {
  return Object.freeze(new Name(data));
}
