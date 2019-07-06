import Service from '@ember/service';
import { camelize } from '@ember/string';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MapElement extends Service.extend({
  // anything which *must* be merged to prototype here

  geocode: service(),
  map: service(),

  init() {
    if (!this.cachedMaps) {
      set(this, 'cachedMaps', {});
    }
    this._super(...arguments);
  },

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.cachedMaps[camelizedLocation];
    if (!element) {
      element = this._createMapElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);
      this.map.createMap(element, geocodedLocation);
      this.cachedMaps[camelizedLocation] = element;
    }
    return element;
  },

  _createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'map-element': MapElement;
  }
}
