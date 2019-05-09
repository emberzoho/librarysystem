import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	beforeModel(){
		var user = firebase.auth().currentUser;
		if(!user){
			this.transitionTo('login');
		}

	}
});
