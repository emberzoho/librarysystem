import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/authors/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:library/authors/new');
    assert.ok(route);
  });
});
