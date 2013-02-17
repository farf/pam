
if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.Decorator = Class.extend({

    _map : null,
    mouseX : 0,
    mouseY : 0,

    init: function(map) {
        this._map = map;
        this._initEvents();
        this._initMap();
    },

    _initEvents : function() {
       var elements = this._map.getElements();
       for (var i in elements) {
           $(elements[i]).on(elements[i].MOUSEOVER, $.proxy(this, "__onElementOver"));
           $(elements[i]).on(elements[i].MOUSEOUT, $.proxy(this, "__onElementOut"));
           $(elements[i]).on(elements[i].CLICKED, $.proxy(this, "__onElementClicked"));
       }

       $(this._map).on(this._map.MOUSE_MOVE, $.proxy(this, "__onMouseMove"));


    },

    _initMap: function() {

    },

    __onElementOver : function(event) {
        var element = event.currentTarget;
        this._onElementOver(element, event);
    },

    _onElementOver : function(element, event) {

    },

    __onElementOut : function(event) {
        var element = event.currentTarget;
        this._onElementOut(element, event);
    },

    _onElementOut : function(element, event) {

    },

    __onMouseMove : function(event, mouseX, mouseY) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this._onMouseMove(event, mouseX, mouseY);
    },

    _onMouseMove : function(element, event, mouseX, mouseY) {

    },

    __onElementClicked : function(event) {
        var element = event.currentTarget;
        this._onElementClicked(element, event);
    },

    _onElementClicked : function(element, event) {

    }

});