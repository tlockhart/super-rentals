import Route from '@ember/routing/route';

export default class RentalsShow extends Route.extend({
  // anything which *must* be merged to prototype here
  model(params) {
    //Retrieve the requested rental from the the model by rental_id
    return this.store.findRecord('rental', params.rental_id);
  }
}) {
  // normal class body definition here
}
