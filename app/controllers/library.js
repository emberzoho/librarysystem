import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentUser: service(),
	actions:{
		logout(){
			firebase.auth().signOut().then(()=> {
			this.transitionToRoute('login');}).catch(function(error){
			console.log(error);
			});
		},
	}
});