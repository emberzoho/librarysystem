import Component from '@ember/component';

export default Component.extend({
  value: '',

  init() {
    this._super(...arguments);
      this.filter('').then((allResults) => {
      this.set('results', allResults);
    });
   
  },


  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        //if (filterResults.query === arg) {
          this.set('results', filterResults);//.results);
        //}
      });
      //*/
    }
  }	
});