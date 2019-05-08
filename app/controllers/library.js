import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		logout(){
			firebase.auth().signOut().then(()=> {
			this.transitionToRoute('login');}).catch(function(error){
			console.log(error);
			});
		},
	}
});