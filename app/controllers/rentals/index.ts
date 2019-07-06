// import Controller from '@ember/controller';
import RentalsController from '../rentals';

// export default class RentalsIndex extends Controller.extend({
  export default class RentalsIndex extends RentalsController.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'rentals/index': RentalsIndex;
  }
}
