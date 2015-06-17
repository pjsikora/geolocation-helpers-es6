class GoogleMap extends Map {
  constructor() {
    super();
    console.log("GoogleMaps");
  }

  initialize() {
    var mapOptions = {
          center: {
            lat: this.params.lat,
            lng: this.params.lng
          },
          zoom: this.params.zoom
        },
        map = new google.maps.Map(this.renderElement, mapOptions);
  }

  drawRoute(route) {
				this.routeArray = _currentRouteArray;

			var	finalRouteArray = [],
  			  centerPoint = this.getCenterPoint();
		      mapOptions = {
    				zoom: 14,
    				center: new google.maps.LatLng(centerPoint.latitude, centerPoint.longitude)
    			},
  			     map = new google.maps.Map(settings.$element, mapOptions);

			this.routeArray.forEach(function(el) {
				finalRouteArray.push(new google.maps.LatLng(el.latitude,el.longitude));

				var myLatlng = new google.maps.LatLng(el.latitude,el.longitude);
				var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
					title: 'Hello World!'
				});
			});

			var finalRoute = new google.maps.Polyline({
				path: finalRouteArray,
				geodesic: true,
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});

			finalRoute.setMap(map);
		}

  render() {
    google.maps.event.addDomListener(window, 'load', () => this.initialize());
  }
}
