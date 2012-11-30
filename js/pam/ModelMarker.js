if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};


Pam.Map.ModelMarker = Pam.Map.Marker.extend({
    
    init : function(item) {
        
        var options = {
            dom:$(item),
            editable: true, 
            point: new Pam.Map.Point(0,0)
        }
        this._super(options);
        
    },
    
    setMap : function(map) {
        
        var item = this.dom.clone().css({'top': 0, 'left':0}).removeClass('up').appendTo(this.dom.parent());
        var marker = new Pam.Map.ModelMarker(item);
        
        this._super(map);
        
    },
    
    _initEditableMarker : function(options) {
        if (typeof options == 'undefined') {
            options = {};
        }
        //$.extend(options, {helper: "clone"})
        this._super(options);
    }
});