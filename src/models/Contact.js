export class Contact {
  constructor({ email = ``, phone = `` } = {}) {
    this.email = email;
    this.phone = phone;
  }
}

export function createContact(data) {
  return Object.freeze(new Contact(data));
}
