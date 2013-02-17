
if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.Tooltip = Pam.Map.Decorator.extend({

    dom : null,
    position: 'top',

    init: function(map) {
        this._super(map);

        this._initDom();
    },

    _initDom : function() {
        this.dom = $('<div style = "display:none;" id="'+Math.round(Math.random()*10000)+'" class="tooltip"> Europe</div>');
        this._map.dom.append(this.dom);
    },

    _onElementOver : function(element, event) {
        if (typeof element.title != '') {

            this.dom.first().html(element.title);
            this.dom.css('left', 0);
            this.dom.show();
        }
    },


    _onElementOut : function(event) {
        this.dom.hide();
    },

    _onMouseMove : function(event, mouseX, mouseY) {

        if (mouseY < this.dom.height() + 30) {
            this.dom.addClass('bottom');
            this.dom.first().css('top', mouseY + 20);
            this.dom.eq(1).css('top', mouseY)
        } else {
            this.dom.css('top', mouseY - this.dom.outerHeight() - 20);
            this.dom.removeClass('bottom');
            this.dom.eq(1).css('top', mouseY - 20)
        }
        var left = this.dom.outerWidth() / this._map.width * mouseX;
        this.dom.first().css('left', mouseX - left);
        this.dom.eq(1).css('left', mouseX);
    }

});