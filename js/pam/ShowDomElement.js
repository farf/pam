if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.ShowDomElement = Pam.Map.Decorator.extend({

	currentDom : null,

    _onElementClicked : function(element, event) {
		var selector = '[data-name="' + element.title + '"]';
		//alert(selector);
		var newDom = this._map.contentDom.find(selector);

		if (typeof newDom != 'undefined') {
			if (this.currentDom !== null) this.currentDom.hide();
			this.currentDom = newDom;
			this.currentDom.addClass('showDomElement');
			this.currentDom.css('left', this.mouseX+10);
			this.currentDom.css('top', this.mouseY+10);
			this.currentDom.show();
		}
    }

});