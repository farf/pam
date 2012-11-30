
if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};

Pam.Map.Legend = Class.extend({

    dom : null,
    map : null,
    
    // For editable map, this is the helper to position markers
    _smallMapContainer : null,
    _smallMap : null,
    
    init : function(map, dom) {

        this.dom = dom;
        
        this._initMap(map);

        dom.children(".markertype").click($.proxy(function(event) {

            var item = $(event.currentTarget);

            var type = item.find(".marker").attr('data-type');

            if (item.hasClass('selected')) {
                this.showAll();
            } else {
                this.showType(type);
            }
        }, this));
        
        this._initMarkers();
    },
    
    _initMarkers : function() {
        this.dom.find(".marker").each($.proxy(this, "_initMarker"));
    },
    
    _initMarker : function(index, item) {
        
        var marker = new Pam.Map.ModelMarker(item);
        //$(marker).on(marker.MAP_CHANGED, $.proxy(this, "_onMarkerMapChanged"));
    },
    
    _onMarkerMapChanged : function(event) {
        this._initMarker(0, event.currentTarget[0]);
    },
    
    _initMap : function(map) {
        this.map = map; 
    },
    
    showType : function(type) {
        this.map.dom.children(".marker").hide();
        this.map.dom.children(".marker."+type).show();
        this.dom.find(".markertype").removeClass('selected');
        this.dom.find("."+type).parents(".markertype").addClass('selected');
    },

    hideType : function(type) {
        this.map.dom.children(".marker."+type).hide();
        this.dom.find("."+type).parents(".markertype").removeClass('selected');
    },

    showAll : function() {
        this.dom.find(".markertype").removeClass('selected');
        this.map.dom.children(".marker").show();
    }

});