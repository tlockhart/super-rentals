import Component from '@ember/component';
import { action } from '@ember/object';

export default class RentalListing extends Component.extend({
  // anything which *must* be merged to prototype here
  // isWide: false,
  // actions: {
  //   toggleImageSize() {
  //     this.toggleProperty('isWide');
  //   } //toggleImageSize
  // } //actions



}) {
  // normal class body definition here
  isWide = false;

  @action toggleImageSize() {
    this.toggleProperty('isWide');
  } //toggleImageSize
};
