import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterByBookName(param) {
      if (param !== '') {
        return this.store.query('book', { title: param });
      } else {
        return this.store.findAll('book');
      }
    }
  }
});
