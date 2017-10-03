const { EventEmitter } = require('events');

class Tars extends EventEmitter {
  constructor(props = {}, ...args) {
    super(props, ...args);
    this.adapters = props.adapters || {};
  }

  registerAdapter(name, adapter) {
    if (typeof adapter === 'function') {
      this.adapters[name] = adapter(this);
    } else {
      this.adapters[name] = adapter;
    }
  }

  get(name) {
    return Promise.resolve(this.adapters[name]);
  }
}

module.exports = Tars;
