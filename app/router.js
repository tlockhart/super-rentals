import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  //Nested Index Route Setup for the child route, the root path is implied
  //show is a subroute of rentals accessed from localhost:4200/rentals/show
  this.route('rentals', function() {
    this.route('show', {path: '/:rental_id'});
  });
});

export default Router;
