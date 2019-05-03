import Controller from '@ember/controller';

export default Controller.extend({
	//firebaseApp: Ember.inject.service(),
	actions: {

		setSelection: function(selected) {
			this.set('selectedOption', selected.authorname);
			this.set('setid', selected.authorid);
			console.log(this.get('selectedOption'));
			console.log(this.get('setid'));
		  },
		addBook: function(){
			//var foo;
			//var storageRef = window.firebase.storage().ref();
			var title = this.get('title');
			var author = this.get('selectedOption');
			var idd= this.get('setid');
			console.log("In addbook action "+author);
			var publication = this.get('publication');
			var yop= this.get('yop');
			var path=this.get('image');
			this.store.findRecord('book',1).then(function(count){
				 var foo=count.bookid;
				 console.log(foo);
				 count.set('bookid',foo+1);
				 count.save();
				 //console.log(count.get('bookid'));
			 });
			 var bar=this.store.peekRecord('book',1).get('bookid');
			console.log(bar);
			var description=this.get('description');
			//Create New Task
			
			var newBook = this.store.createRecord('book', {
				id: bar,
				bookid:bar,
			  title: title,
			  author: author,
			  authorid: idd,
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