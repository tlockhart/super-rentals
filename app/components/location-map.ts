import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default class LocationMap extends Component.extend({
  // anything which *must* be merged to prototype here
  classNames: ['map-container'],
  mapElement: service(),

  didInsertElement() {
    this._super(...arguments);
    this.mapElement.getMapElement(this.location).then((mapElement) => {
      this.element.append(mapElement);
    });
  }
}) {
  // normal class body definition here
};
