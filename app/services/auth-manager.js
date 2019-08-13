import Service from '@ember/service';
import $ from 'jquery'
import { inject as service } from '@ember/service'
import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage';
export default Service.extend({
    router: service(),
    user: storageFor('user'),
    authenticate(login, password, callback) {
        var info = {
            'username': login, 'password': password
        }
        return $.ajax({
            method: "POST",
            url: "http://localhost:5000/token",
            data: info
        }).then((result) => {
            this.set('user.accessToken', result.access_token);
            this.set('user.username',result.username );
            if (result.status == '403') {
                callback(result.message)
            }
            else {
                this.get("router").transitionTo("hienhanh");
            }

        });
    },
    /*invalidate() {
        this.set('accessToken', null);
    },*/
    isAuthenticated: bool('accessToken')

});
