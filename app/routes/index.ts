import Route from '@ember/routing/route';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  redirect(){
    this.transitionTo('rentals');
  }
}
