export default class RandomNames {
  constructor() {
    this.names = ['Cam', 'Amy', 'Joe', 'Dan', 'Sally'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}
