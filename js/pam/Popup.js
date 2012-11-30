
if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};

Pam.Map.Popup = Class.extend({
    
    WIDTH_DOWN_ARROW : 10,  // difference to center correctly the popup
    
    top : 0,
    left : 0,
    bottom : 0,
    dom : null,
    map : null,
    editable : null,
    displayable : false,
    
    init : function(options){
        var params = {
            editable: false,
            dom: null,
            map: null,
            top: 0, 
            bottom: 0, 
            left: 0,
            displayable: false
        };
        
        $.extend(params, options);
        
        this.dom = params.dom;
        this.map = params.map;
        this.left = params.left;
//        this.top = params.top;
        this.bottom = params.bottom;
        this.editable = params.editable;
        this.displayable = params.displayable;
        
        
//        this._initMap(this.map);
        this._setPositionCss();
    },
    
    showOrHide: function(){
        if( this.dom.is(':hidden')){
            this.dom.show();
        }
        else{
            this.dom.hide();
        }
    },

    
    showAll : function(){
        this.dom.show();
    },
    
    hideAll : function(){
        this.dom.hide();
    },

    changePosition : function( left , top){
        var heightMap = this.map.dom.height();
//        var left = this.point.x - (domPopup.width()/2 + 6);  // normal width 82
        this.left = left - (this.dom.width()/2);  // normal width 82
        this.bottom = heightMap - top + 30; // 30 is the height of marker
        this._setPositionCss();
    },
    
    _setPositionCss : function(){
        this.dom.css('left', this.left - this.WIDTH_DOWN_ARROW);
        this.dom.css('bottom', this.bottom);
    }
    
    
});