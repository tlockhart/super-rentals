import Route from '@ember/routing/route';

export default class RentalsIndex extends Route.extend({
  // anything which *must* be merged to prototype here
  model() {
    return this.store.findAll('rental');
  }
}) {
  // normal class body definition here
}
