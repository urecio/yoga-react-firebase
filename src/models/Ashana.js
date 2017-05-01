import _ from 'lodash';

export default class Ashana {
  constructor({ name = '', sanskritName = '', imageUrl = '' }) {
    Object.assign(this, { name, sanskritName, imageUrl });
    this.ashanaId = _.camelCase(name);
  }
}
