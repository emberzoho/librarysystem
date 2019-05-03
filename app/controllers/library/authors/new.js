import Controller from '@ember/controller';

export default Controller.extend({
	//firebaseApp: Ember.inject.service(),
	actions: {

		addAuthor: function(){
			//var foo;
			//var storageRef = window.firebase.storage().ref();
			var authorname = this.get('authorname');
			var country = this.get('country');
			this.store.findRecord('author',1).then(function(count){
				 var foo=count.authorid;
				 console.log(foo);
				 count.set('authorid',foo+1);
				 count.save();
				 //console.log(count.get('bookid'));
			 });
			var bar=this.store.peekRecord('author',1).get('authorid');
			//Create New Task
			var newAuthor = this.store.createRecord('author', {
				id: bar,
			    authorid:bar,
			    authorname: authorname,
			    country: country,
			});
			newAuthor.save();
			
			this.setProperties({
				authorname: '',
				country: '',
			});
			
		}
	}
});