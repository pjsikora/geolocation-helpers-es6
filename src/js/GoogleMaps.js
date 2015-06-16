"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleMaps = (function () {
  function GoogleMaps() {
    _classCallCheck(this, GoogleMaps);

    console.log("GoogleMaps");
  }

  _createClass(GoogleMaps, [{
    key: "setParams",
    value: function setParams(lat, lng, zoom) {
      this.params[lat] = lat;
      this.params[lng] = lng;
      this.params[zoom] = zoom;
    }
  }, {
    key: "initialize",
    value: function initialize() {
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
  }, {
    key: "render",
    value: function render() {

      google.maps.event.addDomListener(window, "load", this.initialize);
      console.log("render");
    }
  }]);

  return GoogleMaps;
})();
//# sourceMappingURL=GoogleMaps.js.map