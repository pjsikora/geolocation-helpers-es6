class Map {
  constructor() {
    this.routes = {};
    this.params = {};
  }

  setRenderElement(element) {
    this.renderElement = element;
  }

  addRoute(name, route) {
    this.routes[name] = route;
  }

  getRoute(name) {
    return this.route['name'];
  }

  drawRoutes() {}

  drawRoute() {}

  setParams(lat, lng, zoom) {
    this.params['lat'] = lat;
    this.params['lng'] = lng;
    this.params['zoom'] = zoom;
  }

  getCenterPoint() {
			var maxLatitude = _currentRouteArray[0].lat,
			minLatitude = _currentRouteArray[0].lat,
			maxLongitude = _currentRouteArray[0].lng,
			minLongitude = _currentRouteArray[0].lng,
			centerLongitude = 0,
			centerLatitude = 0;

			_currentRouteArray.forEach(function(el) {
				maxLatitude = maxLatitude > el.lat ? maxLatitude : el.lat;
				maxLongitude = maxLongitude > el.lat ? maxLongitude : el.lng;
				minLatitude = minLatitude < el.lat ? minLatitude : el.lat;
				minLongitude = minLongitude < el.lng ? minLongitude : el.lng;
			});

			centerLatitude = (maxLatitude+minLatitude)/2;
			centerLongitude = (maxLongitude+minLongitude)/2;

			var centerPoint = {
				'lat': centerLatitude,
				'lng' : centerLongitude
			}

		return centerPoint;
	}
}
