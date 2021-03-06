import assert from 'assert';

describe('concat', () => {
  it('concatenates the supplied Observable arguments', async () => {
    let list = [];

    await Observable
      .from([1, 2, 3, 4])
      .concat(Observable.of(5, 6, 7))
      .forEach(x => list.push(x));

    assert.deepEqual(list, [1, 2, 3, 4, 5, 6, 7]);
  });
});
