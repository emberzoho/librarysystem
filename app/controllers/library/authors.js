import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentUser: service(),
	actions: {
    filterByAuthorName(param) {
      if (param !=='') {
				let temp=this.store.findAll('author')
				.then(results => results.filter((author) => {
					return author.get('authorname').toLowerCase().includes(param.toLowerCase()); 
				}));
				return temp;
		  } else {
			return this.store.findAll('author').then((results) => {
				return results;
				});
			}
		}
	}
});