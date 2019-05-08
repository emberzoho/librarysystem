import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
		var user = firebase.auth().currentUser;
		if(!user){
			this.transitionTo('login');
		}
	},
	model(){
		return this.store.findRecord('user', firebase.auth().currentUser.uid);  // => GET /blog-posts/1
	}
});
