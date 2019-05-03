import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		logout(){
			firebase.auth().signOut().then(()=> {
			this.transitionToRoute('login');
		}).catch(function(error){
		//alert('Something went wrong','error');
		console.log(error);
	});
	},
	}
});