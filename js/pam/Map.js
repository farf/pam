

if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};


Pam.Map.Map = Class.extend({
    /**
     * EVENTS
     */
    UPDATED : "event_map_updated",
    DRAG_DROP: "event_map_drag_drop",
    DRAG_OUT: "event_map_drag_out",
    DRAG_OVER: "event_map_drag_over",
    MOUSE_ENTER: "event_map_mouse_enter",
    MOUSE_OUT: "event_map_mouse_out",
    MARKER_DRAG_START: "event_marker_drag_start",
    MARKER_DRAG_DRAG: "event_marker_drag_drag",
    MARKER_DRAG_STOP: "event_marker_drag_stop",
    MARKER_ADDED: "event_marker_added",
    MARKER_REMOVED: "event_marker_removed",
    MOUSE_MOVE: "event_map_mouse_move",
    ZOOM_START: "event_map_zooming",
    ZOOM_STOP: "event_map_zoom_stop",
    
    /**
     * CONSTANTS FOR CONVERSION
     */
    OFFSET : 268435456,
    getRadius : function() {
        return this.OFFSET / Math.PI;
    },
    
    // The dom containing the map
    dom : null,
    
    // mouse position
    mouseX : 0,
    mouseY : 0,
    
    /**
     * BOUNDS AND ELEMENTS OF THE MAP
     */
    
    // Bounds
    bounds: "",
    boundsArray : new Array(),
    
    // Top right point and latLng
    latLng0 : null,
    point0 : null,
    
    // bottom left point
    latLng1 : null,
    point1 : null,
    
    // ratio between zoom 21 of a webmap and the current map
    ratio : 1,
    
    // size of the map
    width : 0,
    height : 0,
    viewbox : null,
    
    /*
     *  To create the conversion system, we take the bounds of the map. We try to make it as big as possible.
     *  
     *  offset x (offsety : 0)
     *  ______________
     *  |   |    |    | 
     *  |   |    |    | 
     *  |   |    |    | 
     *  ---------------
     *  
     *  OR
     *  ______________
     *  |             |  
     *  |             | offset Y (offsetX:0)
     *  ---------------
     *  |             | 
     *  |             | 
     *  ---------------
     *  |             | 
     *  ______________
 
     */
    
    offsetX : 0,
    offsetY : 0,
    
    // position of the map with center top left of the world
    mapX : 0,
    mapY : 0,
    
    // Array of elements
    _elements : new Array(),
    
    /**
     * raphael for SVG
     */
    _paper : null,
    
    // Constructor
    init : function(options) {
        options = $.extend({
                    bounds : null,
                    dom : null,
                    width : 312,
                    height : 200
        }, options);
        this.bounds = options.bounds;
        this.dom = options.dom;

        this.width = options.width;
        this.height = options.height;
        
        // Init Bounds
        this._initBounds();
        
        // Init events
        this._initEvents();
        
    },
    
    _initEvents : function() {
        
        // Init droppable event
        this.dom.droppable({
            over: $.proxy(this, "_onDragOver"),
            out: $.proxy(this, "_onDragOut"),
            drop: $.proxy(this, "_onDragStop"),
            tolerance: "pointer"
        });
  
        this.dom.mouseenter($.proxy(this, "_onMouseEnter"));
        this.dom.mouseout($.proxy(this, "_onMouseEnter"));
        this._initMouseEvent();
        
    },
    
    _onMouseEnter : function(event) {
        $(this).trigger(this.MOUSE_ENTER, event);
    },
    
    _onMouseOut : function(event) {
        $(this).trigger(this.MOUSE_OUT, event);
    },
   
    _onDragStop : function(event, ui) {
        var element = ui.helper.data('element');
        if (element instanceof Pam.Map.Marker) {
            this._onMarkerDragStop(event, element);
        }
        
        $(this).trigger(this.DRAG_DROP, [event, ui]);
    },
    
    _onDragOut : function(event, ui) {
        
        $(this).trigger(this.DRAG_OUT, [event, ui]);
    },
    
    _onDragOver : function(event, ui) {
        $(this).trigger(this.DRAG_OVER, [event, ui]);
    },

    /**
     * CONVERSION FUNCTIONS
     * global means with zoom21 of webmap
     */
    
    _getGlobalXfromLatLng : function(latLng) {
        return this.OFFSET+this.getRadius()*latLng.lng*Math.PI/180;
    },

    _getGlobalYfromLatLng : function(latLng) {
        return this.OFFSET-this.getRadius()*Math.log((1+Math.sin(latLng.lat*Math.PI/180))/(1-Math.sin(latLng.lat*Math.PI/180)))/2;
    },

    _getXfromLatLng : function(latLng) {
        var _globalx = this._getGlobalXfromLatLng(latLng);
        return _globalx*this.ratio - this.mapX + this.offsetX;
    },

    _getYfromLatLng : function(latLng) {
        var _globaly = this._getGlobalYfromLatLng(latLng);
        return _globaly*this.ratio - this.mapY + this.offsetY;
    },

    getPointFromLatLng : function(latLng) {
        var _point = new Pam.Map.Point(this._getXfromLatLng(latLng), this._getYfromLatLng(latLng));
        return _point;
    },

    _getLatFromGlobalX : function(x) 
    { 
            return (((x)-this.OFFSET)/this.getRadius())*180/Math.PI; 
    }, 

    _getLngFromGlobalY : function(y) 
    { 
            return (Math.PI/2-2*Math.atan(Math.exp(((y)-this.OFFSET)/this.getRadius())))*180/Math.PI; 
    }, 
    
    getLatLngFromPoint : function(point) {
        var _globalX = (point.x - this.offsetX) / this.ratio + this.point0.x;                
        var _globalY = (point.y - this.offsetY) / this.ratio + this.point0.y;
        return new Pam.Map.LatLng(this._getLatFromGlobalX(_globalX), this._getLngFromGlobalY(_globalY));
    },
    
    getPointFromDom : function(dom) {
        var x = parseInt(dom.offset().left) - parseInt(this.dom.offset().left) 
                - parseInt(dom.css('margin-left')) - parseInt(this.dom.css('border-width'));
        var y = parseInt(dom.offset().top) - parseInt(this.dom.offset().top)
                - parseInt(dom.css('margin-top')) - parseInt(this.dom.css('border-width'));
            
        return new Pam.Map.Point(x, y);
    },
    
    /**
     * ADD ELEMENTS ON THE MAP
     */
    _onMarkerDragDrag : function(event, marker) {
        $(this).trigger(this.MARKER_DRAG_DRAG, marker);
    },
    
    _onMarkerDragStart : function(event, marker) {
        $(this).trigger(this.MARKER_DRAG_START, marker);
    },
    
    _onMarkerDragStop : function(event, marker) {
        if (marker instanceof Pam.Map.Marker && marker.getMap() !== this) {
            this.addElement(marker);
        }
        $(this).trigger(this.MARKER_DRAG_STOP, marker);
    },
    
    addElement : function(element) {
        element.setMap(this);
        this._elements.push(element);
        if (element instanceof Pam.Map.Marker) {
            
            $(element).on(element.DRAG_DRAG, $.proxy(this, "_onMarkerDragDrag"));
            $(element).on(element.DRAG_START, $.proxy(this, "_onMarkerDragStart"));
            $(element).on(element.DRAG_STOP, $.proxy(this, "_onMarkerDragStop"));

            $(this).trigger(this.MARKER_ADDED, element  );
            
        }
        
    },
    
    getElements : function() {
        return this._elements;
    },
    
    /**
     * INIT THE MAP
     */
    _initBounds : function() {
        this.boundsArray = this.bounds.split(",");
        this.latLng0 = new Pam.Map.LatLng(this.boundsArray[3], this.boundsArray[0]);
        this.latLng1 = new Pam.Map.LatLng(this.boundsArray[1], this.boundsArray[2]);

        this.point0 = new Pam.Map.Point(this._getGlobalXfromLatLng(this.latLng0),
                                this._getGlobalYfromLatLng(this.latLng0));
        this.point1 = new Pam.Map.Point(this._getGlobalXfromLatLng(this.latLng1),
                                this._getGlobalYfromLatLng(this.latLng1));

        var dMap = (this.point1.x-this.point0.x)/(this.point0.y - this.point1.y);
        var dDiv = this.width/this.height;

        if (Math.abs(dDiv) > Math.abs(dMap)) {
            this.ratio = Math.abs(this.height/(this.point0.y - this.point1.y));
            this.offsetY = 0;
            this.offsetX = Math.round((this.width - this.ratio * Math.abs(this.point1.x - this.point0.x))/2);
        } else {
            this.ratio = Math.abs(this.width/(this.point1.x - this.point0.x));
            this.offsetX = 0;
            this.offsetY = Math.round((this.height - this.ratio * Math.abs(this.point0.y - this.point1.y)) / 2);
        }
        
        this._setMapPosition();
        
        this.setViewBox();
    },
    
    _setMapPosition : function() {
        this.mapX = this.point0.x*this.ratio;
        this.mapY = this.point0.y*this.ratio;
    },


    _initRaphael : function() {

        // We need an id to create a paper with raphael
        if (typeof this.dom.attr('id') == 'undefined') {
            this.dom.attr('id', Pam.Utils.generateId("map_"));
        }
        
        this._paper = Raphael(this.dom.attr("id"), this.width, this.height); 
    },
    
    getPaper : function() {
        
        if (this._paper == null) {
            this._initRaphael();
        }
        
        return this._paper;
    },
    
    setViewBox : function(viewbox, duration, callback) {
        if (! viewbox) {
            viewbox = {
                x: 0,
                y: 0,
                x2: this.width,
                y2: this.height,
                width: this.width,
                height: this.height
            };
        }
        
        if (parseInt(duration) > 0) {
            
            var tthis = this;
            this._onZoom();
            this.getPaper().animateViewBox(this.viewbox, viewbox.x, viewbox.y, viewbox.width, viewbox.height, duration, function() {
                tthis._onZoomStop();
                if (typeof callback != "undefined") callback();
            })
            
        } else {
            
            this.getPaper().setViewBox(viewbox.x, viewbox.y, viewbox.width, viewbox.height);
            if (typeof callback != "undefined") callback();
        }
        
        this.viewbox = viewbox;
        
        
    },
    
    _onZoom : function() {
        $(this).trigger(this.ZOOM_START);
    },
    
    _onZoomStop : function() {
        $(this).trigger(this.ZOOM_STOP);
    },
    
    _initMouseEvent : function() {
        this._bindMouseEvent();
    },
    
    _bindMouseEvent : function() {
        
        this.dom.on('mousemove.mapmousemove', $.proxy(this, "_onMouseMove"));
    },
    
    _unbindMouseEvent : function() {
        this.dom.off('.mapmousemove');
    },
    
    _onMouseMove : function(event) {
        this._mouseX = event.offsetX;
        this._mouseY = event.offsetY;
        $(this).trigger(this.MOUSE_MOVE, [this._mouseX, this._mouseY] );
        
    }
});

