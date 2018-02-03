import { createAddress } from './Address';
import { createContact } from './Contact';

export class ShippingAddress {
  constructor({ address = null, contact = null } = {}) {
    this.address = address;
    this.contact = contact;
  }
}

export function createShippingAddress(data) {
  const address = createAddress(data.address);
  const contact = createContact(data.contact);

  return Object.freeze(new ShippingAddress({ address, contact }));
}
