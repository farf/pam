
if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.MapElement = Class.extend({

    // EVENT

    CLICKED : "event_map_element_clicked",
    MOUSEOVER : "event_map_element_mouseover",
    MOUSEOUT : "event_map_element_mouseout",
    MAP_CHANGED : "event_map_changed",

    _map : null,
    dom : null,
    show : true,
    _highlight : false,
    title: "",

    init : function(options) {

    },

    setMap : function(map) {
        if (this._map != map) {
            $(this).trigger(this.MAP_CHANGED);
        }
        this._map = map;
    },

    getMap : function() {
        return this._map;
    },

    _onClick : function(event) {
        $(this).trigger(this.CLICKED);
    },

    _onMouseOver : function(event) {
        $(this).trigger(this.MOUSEOVER);
    },

    _onMouseOut : function(event) {
        $(this).trigger(this.MOUSEOUT);
    },

    highlight : function(bool) {
        if (bool) {
            this._highlight = true;
        } else {
            this._highlight = false;
        }
    },

    hide : function() {

    }
});