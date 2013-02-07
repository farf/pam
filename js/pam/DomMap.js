
if(typeof(Pam) == 'undefined') {Pam = {};}
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {};}


Pam.Map.DomMap = Class.extend({

    _map : null,

    background : null,
    _data : null,
    _classes : null,

    init : function(dom, data) {
        this._data = data;
        this.dom = dom;
        this._initData();
        this._initDom();
        this._initMap();
        this._initBackground();
        this._initClasses();
        this._initElements();
        this._initDecorators();
    },

    getMap : function() {
        return this._map;
    },

    _initDecorators : function() {
        if (typeof this._data.decorators) {
            for (var i in this._data.decorators) {
                var func = Pam.stringToFunction(this._data.decorators[i]);
                if (func) {
                    new func(this.getMap());
                }
            }
        }
    },

    _initData : function() {

        if (typeof this._data.background != "undefined" && typeof this._data.background.image != "undefined") {
            this._backgroundImage = this._data.background.image;
        }
    },

    _initDom : function() {
        var backgroundDiv = "";
        if (this.background !== null) {
            backgroundDiv = "<img class='mapbackground' src='"+this._backgroundImage+"'/>";
        }
        var newDom = $("<div style='display:none' class='map'>"+backgroundDiv+"<div style='width:"+this.dom.width()+"; height:"+this.dom.height()+";' class='mapinner pointer'></div></div>");
        this.dom.prepend(newDom);
        //newDom.fadeIn(500);
        newDom.show();
    },

    _initMap : function() {
        var domMap = this.dom.find('.mapinner');
        var options = $.extend({dom:domMap, width : this._data.width, height : this._data.height }, this._data.map);
        this._map = new Pam.Map.Map(options);
    },

    _initBackground : function() {
        var background = this.dom.find('.mapbackground');

        if (typeof background !== undefined) {
            this.background = background;
        }


    },


    /**
     * ADD ELEMENTS ON THE MAP FROM DOM PARAMETER
     */

    _initElements : function() {

        this._map.dom.children().each($.proxy(function(index, item) {this._addElement(item);}, this));

        // get assets
        if (this._data && typeof this._data.assets != 'unedfined'
            && typeof Pam.assets != 'undefined' && typeof Pam.assets[this._data.assets] != 'undefined') {
            var newElements = [];
            for (var i = 0 ; i < Pam.assets[this._data.assets].length ; i++) {
                var element = Pam.assets[this._data.assets][i];
                var newElement = this._findElement(Pam.assets[this._data.assets][i].id);
                if (element) {
                    $.extend(element, newElement);
                }
                newElements.push(element);
            }
            this._data.elements = newElements;
        }
        console.log(this._data.elements);

        if (this._data && typeof this._data.elements != 'undefined') {

            for (var i = 0; i < this._data.elements.length ; i++) {
                var jsonElement = this._data.elements[i];

                // Replace className by attr
                for (var j in jsonElement) {
                    if (typeof jsonElement[j] == 'string' && typeof this._classes[jsonElement[j]] != "undefined") {
                        jsonElement[j] = this._classes[jsonElement[j]];
                    }
                }

                if (typeof jsonElement.path != "undefined") {
                    var svg = new Pam.Map.Svg(jsonElement);
                    this.addMapElement(svg);
                } else if (typeof jsonElement.itinerary != "undefined") {
                    var itinerary = new Pam.Map.Itinerary(jsonElement);
                    this.addMapElement(itinerary);
                } else if (typeof jsonElement.latlng != "undefined") {
                    var latLng = new Pam.Map.LatLng(jsonElement.latlng[0], jsonElement.latlng[1]);
                    this.addMapElement(new Pam.Map.Marker({latLng:latLng}));
                }
            }
        }
    },

    _findElement : function(id) {
        for (var j = 0 ; j < this._data.elements.length ; j++) {
            var element = this._data.elements[j];
            if (typeof element.id != 'udefined' && id == element.id) {
                return element;
            }
        }
        return false;
    },

    _initClasses : function() {
        this._classes = [];
        if (typeof this._data != 'undefined' && typeof this._data.classes != 'undefined') {
            this._classes = this._data.classes;
        }
    },

    addMapElement : function(element) {
        if (element instanceof Pam.Map.Svg) {
            $(element).on(element.CHARGED_AND_ZOOMED, $.proxy(this, '_onPathZoomedAndCharged'));
            $(element).on(element.ZOOM, $.proxy(this, '_onPathZoom'));
            $(element).on(element.CLICKED, $.proxy(this, '_onPathClick'));
        }
        this._map.addElement(element);
    },

    _addElement : function(item) {
        // point
        if (typeof $(item).attr('data-marker-latlng') != 'undefined') {
            this._addDataMarker(item);
        }

        // point
        if (typeof $(item).attr('data-marker-point') != 'undefined') {
            this._addDataMarker(item);
        }

        // itinerary point
        if (typeof $(item).attr('data-itinerary-points') != 'undefined') {
            this._addDataItinerary(item);
        }

        // itinerary latlng
        if (typeof $(item).attr('data-itinerary-latlng') != 'undefined') {
            this._addDataItinerary(item);
        }

        // svg
        if (typeof $(item).attr('data-path-points') != 'undefined') {
            this._addDataPathPoints(item);
        }
    },

    _addDataMarker : function(item) {

        // Point
        var markerPoint = $(item).attr('data-marker-point');
        var split = [];
        var larLng = null;
        var point = null;

        if (typeof(markerPoint) != 'undefined') {

            split = markerPoint.split(',');
            if (split.length == 2) {

                point = new Pam.Map.Point(split[0], split[1]);
                latLng = null;

            } else {
                return false;
            }

        } else {
            var markerLatLng = $(item).attr('data-marker-latlng');
            if (typeof(markerLatLng) != 'undefined') {


                split = markerLatLng.split(',');
                if (split.length == 2) {

                    latLng = new Pam.Map.LatLng(split[0], split[1]);
                    point = null;

                } else {
                    return false;
                }

            }
        }

        var editable = $(item).attr('data-editable');
        if (typeof(editable) != 'undefined' && editable == 'true') {
            editable = true;
        } else {
            editable = false;
        }

        this._map.addElement(
            new Pam.Map.Marker({
                map: this,
                dom: $(item),
                latLng: latLng,
                point: point,
                editable: editable
            })
        );

        $(this).trigger(this._map.UPDATED);

        return true;

    },

    _addDataItinerary : function(item) {

        // get the itinerary data
        var itineraryPoints = $(item).attr('data-itinerary-points');
        var itinerary = null;
        var type = "";

        if (typeof(itineraryPoints) != 'undefined') {
            itinerary = itineraryPoints;
            type = 'points';
        } else {
            var itineraryLatLng = $(item).attr('data-itinerary-latlng');
            if (typeof(itineraryLatLng) != 'undefined') {
                itinerary = itineraryLatLng;
                type = 'latlng';
            }
        }

        if (typeof(itinerary) != 'undefined') {

            this._map.addElement(new Pam.Map.Itinerary({path: jQuery.parseJSON( itinerary ), type : type}));

        } else {
            return false;
        }

    },

    _addDataPathPoints : function(item) {

        // Point
        var dataPath = $(item).attr('data-path-points');
        var dataBounds = $(item).attr('data-clic-bounds');
        var clic = false;
        var split = [];

        var clicBounds = false;
        if (typeof dataBounds != 'undefined') {
            clic = true;
            if (dataBounds.toLowerCase() != 'true') {

                split = dataBounds.split(',');
                if (split.length == 4) {
                    clicBounds = true;
                }
            }
        }

        //link
        var dataLink = $(item).attr('data-clic-link');
        var link = "";
        if (typeof dataLink != 'undefined') {
            link = dataLink;
        } else {
            link = null;
        }


        if (typeof(dataPath)  != 'undefined') {
            var path = "";
            if (clicBounds) {
                path = new Pam.Map.Svg({
                    path: dataPath,
                    clicOffsetX: parseInt(split[0], 10),
                    clicOffsetY: parseInt(split[1], 10),
                    clicWidth: parseInt(split[2], 10),
                    clicHeight: parseInt(split[3], 10),
                    clic: true,
                    clicLink : link,
                    title: this.getTitle($(item)),
                    dom: $(item)
                });

            } else {
                path = new Pam.Map.Svg({
                    path: dataPath,
                    clic: clic,
                    clicLink : link,
                    title: this.getTitle($(item)),
                    dom: $(item)
                });

            }

            this.addMapElement(path);

        }

    },

    _onPathClick : function(event) {
        var path = event.currentTarget;

        if (path.clic) {
            path.chargeLink();
            path.zoom();
        }

    },

    _onPathZoom : function(event) {
        var path = event.currentTarget;
        path.highlight(true);
        this.background.fadeOut(300);
    },

    _onPathZoomedAndCharged : function(event) {
        var path = event.currentTarget;

        if (typeof this.dom != 'undefined') {
            this.dom.children().delay(100).fadeOut(500, function() {
                $(this).remove();

            });

            this.init(this.dom, path.linkData);
        }
    },

    getTitle : function(dom) {
        var tooltip = dom.attr('data-tooltip');

        if (typeof tooltip != 'undefined') {
            return tooltip;
        }
    }


});