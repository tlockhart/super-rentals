import Component from '@ember/component';
// import { action } from '@ember/object';

export default class ListFilter extends Component.extend({
  // anything which *must* be merged to prototype here
  classNames: ['list-filter'],
  value: '',

  init() {
    //calling super from parent
    this._super(...arguments);
    //calling filter named function attribute from parent (app/template/rentals.hbs) with this.filter, which passes the results of filtering by city
    // this.filter('').then((results) => this.set('results', results));
    this.filter('').then((allResults) =>{
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      // Assign filterInputValue to the Value entered in the input field
      let filterInputValue = this.value;
      // Assign filterAction to the results of filtering by the city
      let filterAction = this.filter;
      // filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
      filterAction(filterInputValue).then((filterResults) => {
        //set results only if query result matches value input in field
        if(filterResults.query === this.value) {
          this.set('results', filterResults.results);
        }
      }); //filterAction
    } //handleFilterEntry
  }//actions

}) {
  // filter!: Function;
  // normal class body definition here
  // constructor() {
  //   this._super(...arguments);
  //   this.filter('').then((results) => this.set('results', results));
  // }
  // @action handleFilterEntry() {
  //     let filterInputValue = this.value;
  //     let filterAction = this.filter;
  //     filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
  //   } //handleFilterEntry
};
