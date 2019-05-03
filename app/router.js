import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('library', function() {
    this.route('books', function(){
        this.route('new');
    });
  });
  this.route('login');
  this.route('signup');
  this.route('signup-staff');
});

export default Router;
