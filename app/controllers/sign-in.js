import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { storageFor } from 'ember-local-storage';
export default Controller.extend({
    authManager: service('auth-manager'),
    router: service(),
    user: storageFor('user'),
    actions:{
        authenticate: function(e){
            e.preventDefault();
            var login =  $('#login').val();
            var password =$('#password').val();
            this.get('authManager').authenticate(login, password, function(mess){
                $('#error').html(mess)
            })
        }
    }
});
