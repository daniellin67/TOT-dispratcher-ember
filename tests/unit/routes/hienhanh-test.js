import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hienhanh', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hienhanh');
    assert.ok(route);
  });
});
