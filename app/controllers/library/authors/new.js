import Controller from '@ember/controller';

export default Controller.extend({
	actions: {

		addAuthor: function(){
			var authorname = this.get('authorname');
			var country = this.get('country');
			this.store.findRecord('author',1).then(function(count){
				 count.incrementProperty('authorid');
				 count.save();
			 });
			var bar=this.store.peekRecord('author',1).get('authorid');
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
