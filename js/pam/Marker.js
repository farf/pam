if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};


Pam.Map.Marker = Pam.Map.MapElement.extend({
    
    // EVENTS
    DRAG_DRAG : "event_drag_drag",
    DRAG_STOP : "event_drag_stop", 
    DRAG_START : "event_drag_start",
    
    dom : null,
    latLng : null,
    point : null,
    _map : null,
    _editable : null,
    
    /**
     * options: {dom, point, latLng, editable, map}
     */
    init : function(options) {
        var params = {
            editable: false,
            dom: null,
            point: null, 
            latLng: null
        };
        $.extend(params, options);
        
        this.point = params.point;
        this.latLng = params.latLng;
        this.editable = params.editable;
        this.dom = params.dom;
        
        this.initAll();
        
    },
    
    initAll : function() {
        
        this.initPoint();
        
        this.initLatLng();
        
        this._initEditableMarker();
    },
    
    initPoint : function() {
        
        if (this._map != null && this.latLng != null) {
         
            this.point = this._map.getPointFromLatLng(this.latLng);
            
        }
        
        if (this.point != null) {
            this.dom.css("left", this.point.x);
            this.dom.css("top", this.point.y);
        }
        
    },
    
    initLatLng : function() {
        if (this._map != null && this.point != null) {
         
            this.latLng = this._map.getLatLngFromPoint(this.point);
            
        }
    },
    
    setMap : function(map) {
        this._super(map);
        
        if (this.dom == null) {
            var id = Fanny.Utils.generateId('marker_');
            this.dom = $('<div class="marker" id="' + id + '"></div>');
            this._map.dom.append(this.dom);
        }
        
        if (this._map != null) {
            
            // If it is not the sam map
            if (this._map.dom.children().index(this.dom) == -1) {

                    // init position
                var x = parseInt(this.dom.offset().left) - parseInt(this._map.dom.offset().left) 
                            - parseInt(this.dom.css('margin-left')) - parseInt(this._map.dom.css('border-width'));
                var y = parseInt(this.dom.offset().top) - parseInt(this._map.dom.offset().top) 
                            - parseInt(this.dom.css('margin-top')) - parseInt(this._map.dom.css('border-width'));

                this.point = new Pam.Map.Point(x, y);
                
                    this.dom.appendTo(this._map.dom);
                
                $(this).trigger(this.MAP_CHANGED);
            }

            this.initAll();    
        }
        
    },
    
    _initEditableMarker : function(options) {
        if (this.editable) {
            var params = {
                start: $.proxy(this, "_onDragStart"),
                stop: $.proxy(this, "_onDragStop"),
                drag:$.proxy(this, "_onDragDrag"),
                revert: 'invalid',
                helper: 'original'
            };
            
            $.extend(params, options);

            this.dom.draggable(params);
        
        }
        
    },
    
    _onDragStart : function(event, ui) {
        $(this).trigger(this.DRAG_START);
        ui.helper.addClass('up');
        ui.helper.data('element', this);
    },
    
    _onDragStop : function(event, ui) {
        ui.helper.removeClass('up');
        
        if (this._map != null) {
           
            var x = parseInt(ui.helper.offset().left) - parseInt(this._map.dom.offset().left) 
                        - parseInt(ui.helper.css('margin-left')) - parseInt(this._map.dom.css('border-width'));
            var y = parseInt(ui.helper.offset().top) - parseInt(this._map.dom.offset().top) 
                        - parseInt(ui.helper.css('margin-top')) - parseInt(this._map.dom.css('border-width'));
            var currentPoint = new Pam.Map.Point(x, y);
            var latLng = this._map.getLatLngFromPoint(currentPoint);
        }
        $(this).trigger(this.DRAG_STOP);
    },
    
    _onDragDrag : function(event, ui) {
        if (this._map != null) {
            
            var currentPoint = this._map.getPointFromDom(ui.helper);

            // Set data into the marker
            this.point = currentPoint;
            this.latLng = null;
            this.initAll();
        }
        $(this).trigger(this.DRAG_DRAG, this);
    },
    
    setEditable : function(bool) {
        if (bool !== false) {
            this._editable = true;
        } else {
            this._editable = false;
        }
        if (this._editable) {
            this.initAll();
        }
    }
});