import Controller from '@ember/controller';

export default Controller.extend({
	//firebaseApp: Ember.inject.service(),
	actions: {

		
		addBook: function(){
			var foo;
			//var storageRef = window.firebase.storage().ref();
			var title = this.get('title');
			var author = this.get('author');
			var publication = this.get('publication');
			var yop= this.get('yop');
			var path=this.get('image');
			this.store.findRecord('book',1).then(function(count){
				 foo=count.bookid;
				 console.log(foo);
				 count.set('bookid',foo+1);
				 console.log(count.get('bookid'));
			 });
			console.log(foo);
			//bookid.set('bookid',temp+1);
			var description=this.get('description');

		
			//Create New Task
			var newBook = this.store.createRecord('book', {
				id: foo,
				bookid:foo,
			  title: title,
			  author: author,
			  publication: publication,
			  yop: yop,
			  bookimgurl:path,
			  description: description
			});
			newBook.save();
			
			this.setProperties({
				title: '',
				description: '',
				date: ''
			});
			
		}
	}
});