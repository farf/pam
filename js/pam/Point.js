if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};


Pam.Map.Point = Class.extend({
    x: 0,
    y: 0,
    init: function(x, y) {
        this.x = Math.round(x);
        this.y = Math.round(y);
    }
});