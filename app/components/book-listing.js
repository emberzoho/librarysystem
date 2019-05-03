import Component from '@ember/component';

export default Component.extend({
	isWide: true,
  	actions: {
    toggleDescription() {
      this.toggleProperty('isWide');
    }
   	}
});
