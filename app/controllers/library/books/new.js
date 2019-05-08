import Controller from '@ember/controller';

export default Controller.extend({
	//firebaseApp: Ember.inject.service(),
	actions: {

		setSelection: function(selected) {
			this.set('setid', selected);
			var temp = this.store.peekRecord('author', selected);
			this.set('selectedOption',temp.authorname);
			console.log(this.get('selectedOption'));
			console.log(this.get('setid'));
		  },
		addBook: function(){
			var title = this.get('title');
			var author = this.get('selectedOption');
			var idd= this.get('setid');
			var publication = this.get('publication');
			var yop= this.get('yop');
			var path=this.get('image');
			this.store.findRecord('book',1).then(function(count){
				 count.incrementProperty('bookid');
				 count.save();
				 
			 });
			var bar=this.store.peekRecord('book',1).get('bookid');
			var description=this.get('description');
			
			//Create New Book
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
				date: '',
				author:'',
				publication:'',
				bookimgurl:'',
				yop:''
			});
			
		}
	}
});
