const { Tars } = require('../');

describe('Tars', () => {
  test('it should create an instance of itself', () => {
    expect(new Tars()).toBeInstanceOf(Tars);
  });
});
