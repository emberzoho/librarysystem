
import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterByBookName(param) {
      if (param !=='') {
		/*return this.store.query('book', {filter:{ title:param}}).then((results) => {
		return { query: param, results: results };

		});		*/
		let temp=this.store.findAll('book')
                 .then(results => results.filter((book) => {
                    return book.get('title').toLowerCase().includes(param.toLowerCase()); 
								 }));
								 console.log(temp);
								 return temp;
   } else {
		return this.store.findAll('book').then((results) => {
		return results;
		});
      }
    }	
  }
});