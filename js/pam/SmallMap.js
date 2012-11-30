if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};


Pam.Map.SmallMap = Class.extend({
   
   _map : null,
   _smallMap : null,
   // the element we move
   _domContainer : null,
   // The dom of the google map
   _domMap : null,
   
   init : function(map) {
        
        this._map = map;
        
        this._initDom();
        
        this._domContainer = $("#small_map_container");
        this._domMap = $("#small_map");
        
        // Init map
        $(this._map).on(this._map.MARKER_DRAG_DRAG, $.proxy(this, "_onMarkerDragDrag"));
        $(this._map).on(this._map.DRAG_OUT, $.proxy(this, "_onDragOut"));
        //$(this._map).on(this._map.DRAG_OVER, $.proxy(this, "_onDragOver"));
        $(this._map).on(this._map.MARKER_DRAG_STOP, $.proxy(this, "_onDragStop"));
        
        this._initSmallMap();
    },
    
    _initDom : function() {
        this._map.dom.append('<div id="small_map_container"><div id="small_map"></div></div>');
    },
    
    _onDragStop : function(event) {
        this._hideSmallMap();
    },
    
    _onDragOut : function(event) {
        this._hideSmallMap();
    },

    _onDragOver : function(evente, event, ui) {
        this._showSmallMap();
        
        this._positionWithDom(ui.helper);
    },

    _onMarkerDragDrag : function(event, marker) {
        this._showSmallMap();
        this._positionWithMarker(marker);
    },
   
    _showSmallMap : function() {
        
        if (this._smallMap) {
            this._domContainer.css('opacity', 1);
        }
        
    },
    
    _positionWithMarker : function(marker) {
        if (this._domContainer) {
            this._move(marker.point.y, marker.point.x);
            if (typeof google != 'undefined') {
                this._setCenter(marker.latLng.lng, marker.latLng.lat);
            }
        }
    },
    
    _positionWithDom : function(dom) {
        var point = this._map.getPointFromDom(dom);
        this._move(point.y, point.x);
        
    },
    
    _move : function(top, left) {
        this._domContainer.css('top', top+30).css('left', left+30);
    },
    
    _setCenter : function(lat, lng) {
        this._smallMap.setCenter(new google.maps.LatLng( lat, lng));
    },
    
    _initSmallMap : function() {
        //test Google map without controls
        if (typeof google != "undefined" && this._domMap.size() > 0) {
            var myOptions = {
                zoom: 7,
                center: new google.maps.LatLng(-33, 151),
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            this._smallMap = new google.maps.Map(this._domMap[0],
                myOptions);
        }

    },

    _hideSmallMap : function() {
        if (this._smallMap) {
            this._domContainer.css('opacity', 0);
            this._domContainer.css('left', -1000);
        }
    }
    
});