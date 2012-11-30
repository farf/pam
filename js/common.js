if(typeof(Pam) == 'undefined') {Pam = {}};
Pam.stringToFunction = function(str) {
  if (typeof str == 'undefined') {
      return false;
  }
  var arr = str.split(".");

  var fn = (window || this);
  for (var i = 0, len = arr.length; i < len; i++) {
    fn = fn[arr[i]];
  }

  if (typeof fn !== "function") {
    throw new Error("function not found");
  }

  return  fn;
};




Pam.Utils = {
    generatedIds : {},
    generateId : function(prefix) {
        var id = prefix + Math.random() * 10000;
        if(typeof(this.generatedIds[id] != 'undefined')) {
            this.generatedIds[id] = true;
        } else {
            id = generateId(prefix);
        }
        return id;
    },
    stringToVar : function(string) {
        if(typeof(string) != 'string') {
            throw new Error('Not a string');
            return;
        }
        if(!isNaN(string)) {
            return parseInt(string);
        }
        var _exploded = string.split('.');
        var _result = window;
        for(var index in _exploded) {
            if(_exploded[index].length && typeof(_result[_exploded[index]]) != 'undefined') {
                _result = _result[_exploded[index]];
            } else {
                throw new Error('No corresponding var found for ' + string);
                return;
            }
        }
        return _result;
    }
}