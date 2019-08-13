import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
var auth=service('auth-manager')
export default Route.extend({
    authManager: auth,
    beforeModel(){
        if(!this.get('authManager.user.accessToken'))
        {
            this.transitionTo('sign-in')
        }
        this._super(...arguments);
    }
})
