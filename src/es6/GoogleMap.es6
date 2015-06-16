class GoogleMap extends Map {
  constructor() {
    super();
    console.log("GoogleMaps");
  }

  setParams(lat, lng, zoom) {
    this.params['lat'] = lat;
    this.params['lng'] = lng;
    this.params['zoom'] = zoom;
  }

  initialize() {
    console.log("initialize");
    var mapOptions = {
          center: {
            lat: this.params.lat,
            lng: this.params.lng
          },
          zoom: this.params.zoom
        };
    console.log(this.renderElement);

    var map = new google.maps.Map(this.renderElement, mapOptions);
  }

  render() {

    google.maps.event.addDomListener(window, 'load', this.initialize);
    console.log("render");
  }
}
