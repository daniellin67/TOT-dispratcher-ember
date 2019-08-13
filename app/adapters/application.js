import DS from 'ember-data';
import { inject } from '@ember/service'
import { computed } from '@ember/object';
export default DS.RESTAdapter.extend({
    host: 'http://localhost:5000',
    authManager: inject('auth-manager'),
    headers: computed('authManager.accessToken', function() {
        return {
          "Authorization": `---${this.get("authManager.user.accessToken")}`
        };
      })
});