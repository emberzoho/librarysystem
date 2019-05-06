import Component from '@ember/component';

export default Component.extend({
  value: '',

  init() {
    this._super(...arguments);
      this.filter('').then((allResults) => {
      this.set('results', allResults.results);
    });
   
  },


  actions: {
    handleFilterEntry(arg) {
      console.log("inside handleFilterEntry")
      let filterInputValue = arg;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === arg) {
          this.set('results', filterResults.results);
        }
      });
      //*/
    }
  }	
});