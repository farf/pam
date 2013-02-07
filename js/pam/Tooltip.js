
if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.Tooltip = Class.extend({

    _map : null,
    dom : null,

    init: function(map) {
        this._map = map;

        this._initDom();
        this._initMap();
    },

    _initDom : function() {
        this.dom = $('<div style = "display:none;" id="'+Math.round(Math.random()*10000)+'" class="tooltip"> Europe</div>');
        this._map.dom.append(this.dom);
    },

    _initMap : function() {
       var elements = this._map.getElements();
       for (var i in elements) {
           $(elements[i]).on(elements[i].MOUSEOVER, $.proxy(this, "_onElementOver"));
           $(elements[i]).on(elements[i].MOUSEOUT, $.proxy(this, "_onElementOut"));
       }

       $(this._map).on(this._map.MOUSE_MOVE, $.proxy(this, "_onMouseMove"));

    },

    _onElementOver : function(event) {
        var element = event.currentTarget;

        if (typeof element.title != '') {

            this.dom.html(element.title);
            this.dom.show();
        }
    },


    _onElementOut : function(event) {
        this.dom.hide();
    },

    _onMouseMove : function(event, mouseX, mouseY) {
        this.dom.css('left', mouseX - this.dom.outerWidth() / 2);
        this.dom.css('top', mouseY - this.dom.outerHeight() - 20);
    }

});