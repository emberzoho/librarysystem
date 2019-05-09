
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),

	actions: {
    filterByBookName(param) {
      if (param !=='') {
			let temp=this.store.findAll('book').then(results => results.filter((book) => {return book.get('title').toLowerCase().includes(param.toLowerCase()); }));return temp;
    }else {
		return this.store.findAll('book').then((results) => {
		return results;
		});
      }
    }	
  }
});