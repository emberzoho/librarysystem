import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    init() {
        this._super(...arguments);
        this.set('curruser', this.store.findRecord('user', firebase.auth().currentUser.uid));
      },
    //curruser : function(){this.store.findRecord('user', firebase.auth().currentUser.uid);}
    
});
