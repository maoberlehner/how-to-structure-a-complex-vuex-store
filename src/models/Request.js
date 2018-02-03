export class Request {
  constructor(data = {}) {
    this.data = data;
  }
}

export function createRequest(data) {
  return Object.freeze(new Request(data));
}
