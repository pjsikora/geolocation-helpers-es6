'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Map = (function () {
  function Map() {
    _classCallCheck(this, Map);

    this.routes = {};
    this.params = {};
  }

  _createClass(Map, [{
    key: 'setRenderElement',
    value: function setRenderElement(element) {
      this.renderElement = element;
    }
  }, {
    key: 'addRoute',
    value: function addRoute(name, route) {
      this.routes[name] = route;
    }
  }, {
    key: 'getRoute',
    value: function getRoute(name) {
      return this.route['name'];
    }
  }, {
    key: 'drawRoutes',
    value: function drawRoutes() {}
  }, {
    key: 'drawRoute',
    value: function drawRoute() {}
  }, {
    key: 'setParams',
    value: function setParams(lat, lng, zoom) {
      this.params['lat'] = lat;
      this.params['lng'] = lng;
      this.params['zoom'] = zoom;
    }
  }, {
    key: 'getCenterPoint',
    value: function getCenterPoint() {
      var maxLatitude = _currentRouteArray[0].lat,
          minLatitude = _currentRouteArray[0].lat,
          maxLongitude = _currentRouteArray[0].lng,
          minLongitude = _currentRouteArray[0].lng,
          centerLongitude = 0,
          centerLatitude = 0;

      _currentRouteArray.forEach(function (el) {
        maxLatitude = maxLatitude > el.lat ? maxLatitude : el.lat;
        maxLongitude = maxLongitude > el.lat ? maxLongitude : el.lng;
        minLatitude = minLatitude < el.lat ? minLatitude : el.lat;
        minLongitude = minLongitude < el.lng ? minLongitude : el.lng;
      });

      centerLatitude = (maxLatitude + minLatitude) / 2;
      centerLongitude = (maxLongitude + minLongitude) / 2;

      var centerPoint = {
        'lat': centerLatitude,
        'lng': centerLongitude
      };

      return centerPoint;
    }
  }]);

  return Map;
})();
//# sourceMappingURL=Map.js.map