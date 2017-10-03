const { Tars } = require('../');

describe('Tars', () => {
  test('it should create an instance of itself', () => {
    expect(new Tars()).toBeInstanceOf(Tars);
  });

  test('be able to set an adapter with a function', () => {
    const adapter = () => 'ADAPTER';
    const tars = new Tars();
    tars.registerAdapter('my Adapter', adapter);

    return tars.get('my Adapter').then((result) => {
      expect(result).toEqual('ADAPTER');
    });
  });

  test('be able to set an adapter with anything else', () => {
    const adapter = 'ADAPTER';
    const tars = new Tars();
    tars.registerAdapter('my Adapter', adapter);

    return tars.get('my Adapter').then((result) => {
      expect(result).toEqual('ADAPTER');
    });
  });

  test('should work as event emitter', () => {
    const cb = jest.fn();
    const tars = new Tars();
    tars.on('event', cb);
    tars.emit('event');

    expect(cb).toBeCalled();
  });
});
