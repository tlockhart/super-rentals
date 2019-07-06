import Controller from '@ember/controller';
import { parse_dammit } from 'acorn';
// import { action } from '@ember/object';

export default class Rentals extends Controller.extend({
  // anything which *must* be merged to prototype here

    actions: {
      //action take the value of the input as inputCity parameter
      filterByCity(inputCity: any) {
        if (inputCity !== '') {
          //Filter the rental data by the inputCity
          // return this.store.query('rental', { city: inputCity });

          /*send the inputCity to the query function, so that when it returns
            we can check the results with the inputCity, before displaying*/
          return this.store
            .query('rental', { city: inputCity }).then((results) => {
              return { query: inputCity, results: results };
            });
        } else {
          // return this.store.findAll('rental');
          return this.store
            .findAll('rental').then((results) =>{
              return {query: inputCity, results: results };
            });
        }
      }
    } //actions

}) {
  // normal class body definition here
  // @action
    //   filterByCity(param: any) {
    //   if (param !== '') {
    //     return this.store.query('rental', { city: param });
    //   } else {
    //     return this.store.findAll('rental');
    //   }
    // } //filterByCity
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'rentals': Rentals;
  }
}
