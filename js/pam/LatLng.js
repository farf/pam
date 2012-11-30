if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};

Pam.Map.LatLng = Class.extend({
    init: function(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
});