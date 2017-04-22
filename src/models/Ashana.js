export default class Ashana {
  constructor({ name = '', sanskritName = '', imageUrl = '' }) {
    Object.assign(this, { name, sanskritName, imageUrl });
  }
}
