if(typeof(Pam) == 'undefined') {
    Pam = {}
    };
if(typeof(Pam.Map) == 'undefined') {
    Pam.Map = {}
    };


Pam.Map.Svg = Pam.Map.MapElement.extend({
    
    CHARGED_AND_ZOOMED : "event_svg_charged_zoomed",
    ZOOMED : "event_svg_zoomed",
    CHARGED : "event_svg_charged",
    ZOOM : "event_path_zoom",
    
    attr : null,
    attrOver : null,
    attrZoom : null,

    over:false,
   
    clic:false,
    clicOffsetX: 0,
    clicOffsetY: 0,
    clicWidth: 0,
    clicHeight: 0,
    link : null,
    linkData : null,
    hasZoomed : false,
    _bBox : null,
    
    path: "",
    
    rPath : null,
    
    _paper: null,
    
    init : function(options) {
        
        options = $.extend({
            attr: {
                stroke: "#94908c",
                "stroke-width": 1.5,
                "stroke-linejoin": "round", 
                "stroke-linecap":"round",
                "fill": "#efebe5",
                opacity: 1  
            },
            attrZoom: {
                stroke: "#94908c",
                "stroke-width": 1.5,
                "stroke-linejoin": "round", 
                "stroke-linecap":"round",
                "fill": "#efebe5",
                opacity: 1
            },
            path: "",
            clic:false,
            clicOffsetX: 0,
            clicOffsetY: 0,
            clicWidth: 0,
            clicHeight: 0,
            link : null,
            linkData : null,
            dom : null,
            title : ""
            
        }, options);
        
        this.attrOver = options.attrOver;
        if (typeof options.attrOver != 'undefined') {
            this.over = true;
        } 
        this.attr = options.attr;
        this.attrZoom = options.attrZoom;
        this.path = options.path;
        this.clic = options.clic;
        this.clicOffsetX = options.clicOffsetX;
        this.clicOffsetY = options.clicOffsetY;
        this.clicWidth = options.clicWidth;
        this.clicHeight = options.clicHeight;
        this.link = options.link;
        this.linkData = options.linkData;
        this.dom = options.dom;
        this.title = options.title;
    },
    
    getBBox : function() {
        if (this._bBox == null) {
            
            this._bBox = this.rPath.getBBox();
            
        }
        
        return this._bBox;
    },
    
    setMap : function(map) {
        
        this._super(map);
        
        this._paper = map.getPaper();
        
        this.rPath = this._paper.path(this.path)
            .transform("t-"+(this._map.mapX-this._map.offsetX)+",-"+(this._map.mapY-this._map.offsetY))
            .click($.proxy(this, "_onClick"));
        this.setAttr(this.attr);

        if (this.over) {

            this.rPath.mouseover($.proxy(this, "_onMouseOver"))
            .mouseout($.proxy(this, '_onMouseOut'))
        } else {
            console.log('no');
        }
          
            
        if (this.clic) {
            this.getBBox();
        };
        
        $(this._map).on(this._map.ZOOM_START, $.proxy(this, "_onZoomStart"));
        $(this._map).on(this._map.ZOOM_STOP, $.proxy(this, "_onZoomStop"));
        
    }, 
    
    setAttr : function(attr) {
        this.rPath.attr(attr);  
        if (typeof attr.glow != 'undefined') {
            this.rPath.glow(attr.glow);
        }
    },

    setAttrDependingOnHightlight : function(attr, highlight) {
        if (typeof highlight == "undefined") {
            highlight = false;
        }
        if (!this._highlight && !highlight) {
            this.rPath.attr(attr);
        }
    },
    
    zoom : function() {
        
        this.setAttrDependingOnHightlight(this.attrZoom);
        
        if (this.clicWidth == 0) {
            var bounds = this.getBBox();
        } else {
            var bounds = {
                x : this.clicOffsetX,
                y : this.clicOffsetY,
                x2 : (this.clicOffsetX + this.clicWidth),
                y2 : (this.clicOffsetY + this.clicHeight),
                width : this.clicWidth,
                height : this.clicHeight
            }
        }

        this._map.setViewBox({x:bounds.x, y:bounds.y, width:bounds.width, height:bounds.height}, 300, $.proxy(this, '_onZoomed'));
        $(this).trigger(this.ZOOM);
    },
    
    _onZoomStart : function() {
        this.setAttrDependingOnHightlight(this.attrZoom);
    },
    
    _onZoomStop : function() {
        //this.setAttrDependingOnHightlight(this.attr);
    },
    
    chargeLink : function() {
        if (this.link) {
            $.get(this.link, $.proxy(this, "_onCharged"));
        };
    },
    
    _onCharged : function(data) {
        this.linkData = JSON.parse(data);
        $(this).trigger(this.CHARGED);
        if (this.hasZoomed) {
            $(this).trigger(this.CHARGED_AND_ZOOMED);
        }
    },
    
    _onZoomed : function(event) {
        $(this).trigger(this.ZOOMED);
        this.hasZoomed = true;
        if (!this._highlight) {
            this.rPath.attr(this.attr);
        }
        if (this.linkData) {
            $(this).trigger(this.CHARGED_AND_ZOOMED);
            
        }
    },
    
    _onMouseOver : function(event) {
        //this.rPath.animate(this.attrOver, 100);
        if (this.over) {
            this.setAttr(this.attrOver);
            this.rPath.toFront();
            this._super(event);
        }
    },
    
    highlight : function(bool) {
        
        if (bool) {
            this._onMouseOver();
        } else {
            this._onMouseOut();
        }
        
        this._super(bool);
    },
    
    _onMouseOut : function(event) {
        if (!this._highlight) {
            //this.rPath.animate(this.attr, 100);
            this.setAttr(this.attr);
            this.rPath.toBack();
        }
        this._super(event);
    }
});