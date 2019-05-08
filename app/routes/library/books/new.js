//NEW
/*
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin);
*/
import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		return this.store.findAll('author');

	  }
});
