if(typeof(Pam) == 'undefined') {
    Pam = {}
    };
if(typeof(Pam.Map) == 'undefined') {
    Pam.Map = {}
    };


Pam.Map.Itinerary = Pam.Map.MapElement.extend({
    itinerary : null,
    path : "",
    type : null,
    
    attrCircle : null,
    attrCircleRadius : null,
    attrStroke : null,
    attrBorderStroke : null,
    attrGlow : null,
    
    rPath : null,
    rPathStroke : null,
    
    init : function(options) {
        options = $.extend({
            attrCircleRadius : "9",
            attrCircle : {
                "fill": "#FFF",
                "stroke-width":3,
                "stroke":"#EC5124"
            },
            attr : {
                stroke: "#86F2E8",
                "stroke-width": 4,
                "stroke-linejoin": "round", 
                "stroke-linecap":"round",
                opacity: 0.4
            },
            attrBorderStroke : {
                stroke: "#00A08D",
                "stroke-width": 7,
                "stroke-linejoin": "round",
                "stroke-linecap":"round",
                opacity: 0.7
            },
            attrGlow : {
                width: 3, 
                opacity: 0.2
            },
            type : "points",
            itinerary : null
        }, options);
        
        this.itinerary = options.itinerary;
        this.attr = options.attr;
        this.attrBorderStroke = options.attrBorderStroke;
        this.attrGlow = options.attrGlow;
        this.attrCircle = options.attrCircle;
        this.attrCircleRadius = options.attrCircleRadius;
        this.type = options.type;
        
        this.initPath();
        
        this._super(options);
        
    },
    
    setMap : function(map) {
        
        this._super(map);
        
        this.rPath = this._map.getPaper().path(this.path).attr(this.attrBorderStroke);
        this.rPathStroke = this._map.getPaper().path(this.path).attr(this.attr);

        var previousPoint = null;
        var itinerary = this.itinerary;
        for (i in itinerary) {
            if (this.type == 'latlng') {
                var point = this._map.getPointFromLatLng(new Pam.Map.LatLng(itinerary[i][0], itinerary[i][1]));
            } else {
                var point = new Pam.Map.Point(itinerary[i][0], itinerary[i][1]);
            }
            if (!previousPoint || (previousPoint && (Math.abs(previousPoint.x - point.x) > 5 || Math.abs(previousPoint.y - point.y) > 5))) {
                this._map.getPaper().circle(point.x, point.y, this.attrCircleRadius).attr(this.attrCircle).glow(this.attrGlow);
            }
            previousPoint = point;
        }
        
    },
    
    initPath : function() {
        var itinerary = this.itinerary;
        this.path = "";
        for (i in itinerary) {
            if (this.type == 'latlng') {
                var point = this._map.getPointFromLatLng(new Pam.Map.LatLng(itinerary[i][0], itinerary[i][1]));
            } else {
                var point = new Pam.Map.Point(itinerary[i][0], itinerary[i][1]);
            }
            if (i == 0) {
                this.path += "M"+point.x+" "+point.y+" ";
            } else {
                this.path += "L"+point.x+" "+point.y+" ";
            }
        }
        
        return this.path;
    }
});