if(typeof(Pam) == 'undefined') {Pam = {}};
if(typeof(Pam.Map) == 'undefined') {Pam.Map = {}};

Pam.Map.Module = function(config) {
    config.proxy = new Fanny.Core.Proxy({url:BASE_URL + 'Pam/map/xhraction'});
    Fanny.Core.inherits(Fanny.Core.Abstract.Module, this, config);
    
    this.service = 'Berthe_ServiceXHR_Map';
    
    this.TILEMILL_PATH = config.tilemillPath;
    
    this.init = function(config) {
        this.reloadAll();
        
        this.appBus.register("SEARCH_RESULT_RELOADED", this.id, this.reloadAll, this);
        this.appBus.register("MAP_RELOAD", this.id, this.reloadBySelector, this);
    }
    
    this.reloadAll = function() {
        var me = this;
        $('.map-script-dom-container').each(function() {
            var mapContainer = $(this).find(".map-container");
            
            if (mapContainer.length > 0) {
                var mainScript = $(this).find(' > script[data-type=map-main]');
                var domElements = $(this).find(' > div[data-type=map-element]');
                
                var customData = JSON.parse(mainScript.html());
                var data = me.mergeDataWithTemplate(customData);
                me.addDomElementsToData(data, domElements);
                var map = new Pam.Map.DomMap(mapContainer, data);
            }

        })
    }
    
    this.reloadBySelector = function(parameters) {
        parameters.target.empty();
        var mapContainer = parameters.dom;
        if (mapContainer.length > 0) {
            var mainScript = mapContainer.find(' > script[data-type=map-main]');
            var domElements = mapContainer.find(' > div[data-type=map-element]');

            var customData = JSON.parse(mainScript.html());
            customData.width = parameters.width;
            customData.height = parameters.height;
            var data = this.mergeDataWithTemplate(customData);
            
            this.addDomElementsToData(data, domElements);
            var map = new Pam.Map.DomMap(parameters.target, data);
        }
    }
    
    this.mergeDataWithTemplate = function(customData) {
        var json = this.getJsonTemplate();
        json.map.bounds = customData.bounds;
        json.width = customData.width;
        json.height = customData.height;
        json.background.image = customData.background;
        json.background.image = json.background.image.replace("#WIDTH#", json.width);
        json.background.image = json.background.image.replace("#HEIGHT#", json.height);
        
        return json;
    }
    
    this.loadMap = function(idCountry, mapBounds, width, height, tilemillProject, itinerarySteps) {
        var json = this.getJsonTemplate();
        json.map.bounds = mapBounds;
        json.background.image = "/" + this.TILEMILL_PATH + tilemillProject + "/" + idCountry + "_" + width + "_" + height + ".png";
    }
    
    this.getJsonTemplate = function() {
        return {
                "decorators":["Pam.Map.Tooltip"],
                "map":{
                    "bounds":""
                },
                "tooltip": {
                    "class":"tooltip",
                    "show":"true"
                },
                "background" : { 
                    "image": ""
                },
                "classes":{
                    "attrCircle":{
                        "fill": "#FFF",
                        "stroke-width":1,
                        "stroke":"#EC5124"
                    },
                    "attr":{
                        "stroke": "#EE4F15",
                        "stroke-width": 4,
                        "stroke-linejoin": "round", 
                        "stroke-linecap":"round",
                        "opacity": 0.7
                    },
                    "attrGlow":{
                        "width": 1, 
                        "opacity": 0.2
                    },
                    "attrBorderStroke":{
                        "stroke": "#EE4F15",
                        "stroke-width": 5,
                        "stroke-linejoin": "round",
                        "stroke-linecap":"round",
                        "opacity": 0.7
                    },
                    "attrCircleRadius" : 4
                },
                "elements":[]
            };
    }
    
    this.addDomElementsToData = function(data, domElements) {
        for (var i = 0; i < domElements.length; i++) {
            this.addDomElementToData(data, $(domElements[i]));
        }
    }
    
    this.addDomElementToData = function(data, domElement) {
        var type = domElement.attr("data-which");
        var script = null;
        switch(type) {
            case 'map-itinerary' :
                script = domElement.find("script[data-size=" + data.width + "x" + data.height + "]");
                var itineraryData = JSON.parse(script.html());
                if (itineraryData) {
                    data.elements.push(this.getJsonItineraryTemplate(itineraryData.itinerary));
                }
                break;
            case 'map-marker' :
                script = domElement.find("script");
                var markerData = JSON.parse(script.html());
                if (markerData) {
                    data.elements.push(this.getJsonMarkerTemplate(markerData.latlng[0], markerData.latlng[1]));
                }
                break;
            default :
                
                break;
        }
    }
    
    this.getJsonItineraryTemplate = function(itineraryPoints) {
        return {"attr":"attr",
                "attrBorderStroke":"attrBorderStroke",
                "attrCircle":"attrCircle",
                "attrCircleRadius":"attrCircleRadius",
                "attrGlow":"attrGlow",
                "title":"Asie",
                "link":"http://www.evaneos.com",
                "itinerary": itineraryPoints
            };
    }
    
    this.getJsonMarkerTemplate = function(lat, lng) {
        return {
            "latlng": [lat, lng]
        }
    }
    
    this.init(config);
}