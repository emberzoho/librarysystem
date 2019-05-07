import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterByAuthorName(param) {
      if (param !=='') {
			/*return this.store.query('book', {filter:{ title:param}}).then((results) => {
			return { query: param, results: results };
	
			});		*/
			let temp=this.store.findAll('author')
						  .then(results => results.filter((author) => {
							  return author.get('authorname').toLowerCase().includes(param.toLowerCase()); 
									 }));
									 console.log(temp);
									 return temp;
		} else {
			return this.store.findAll('author').then((results) => {
			return results;
			});
			}
		}
	}
});