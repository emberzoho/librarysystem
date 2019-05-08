import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/books/showauthor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:library/books/showauthor');
    assert.ok(route);
  });
});
