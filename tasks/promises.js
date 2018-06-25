const p1 = new Promise(res => setTimeout(() => res('r1'), 1000));
const p2 = new Promise(res => setTimeout(() => res('r2'), 5000));
const p3 = new Promise(res => setTimeout(() => res('r3'), 0));

class Promisify {
  constructor(array = []){
    this.array = array
  }

  push(el) {
    this.array.push(el)
  }

  start() {
    this.array.reduce((promise, item, index) => {
      return promise.then(() => {
        const seconds = index === 0 ? 0 : 3000
        return Promise.all([item, this._delay(seconds)]).then(result => console.log(result[0]))
      })
    }, Promise.resolve());
  }

  _delay(seconds) {
    return new Promise(res => setTimeout(res, seconds))
  }
}

