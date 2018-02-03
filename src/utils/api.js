export default async function api(data) {
  // eslint-disable-next-line no-console
  console.log(data);

  if (Math.floor(Math.random() * 3) > 1) {
    return `succes`;
  }

  throw new Error(`Request failed`);
}
