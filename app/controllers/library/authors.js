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
    }	
  }
});