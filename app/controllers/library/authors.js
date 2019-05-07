import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterByAuthorName(param) {
      if (param !=='') {
		return this.store.query('author', {filter:{ authorname:param}}).then((results) => {
		return { query: param, results: results };
		});
   } else {
		return this.store.findAll('author').then((results) => {
		return { query: param, results: results };
		});
      }
		},
		findBooks(arg){
			console.log(arg);
			return this.store.query('book',{filter: {authorid:arg}}).then((results)=>{
					console.log(results);
					this.set('showbook',results);
					return results;
			});
		}
	}
});