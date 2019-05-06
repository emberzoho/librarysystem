
import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterByBookName(param) {
      if (param !=='') {
		return this.store.query('book', {filter:{ title:param}}).then((results) => {
		return { query: param, results: results };
		});
   } else {
		return this.store.findAll('book').then((results) => {
		return { query: param, results: results };
		});
      }
    }	
  }
});