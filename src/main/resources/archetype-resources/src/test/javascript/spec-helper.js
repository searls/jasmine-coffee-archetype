(function(){
  window.context = window.describe;
  window.xcontext = window.xdescribe;

  beforeEach(function(){
    this.addMatchers({
      toBeAnInstanceOf: function(constructor){
        this.message = function(){
          return "expected object to have this constructor: "+constructor;
        };
        return this.actual.constructor === constructor;
      },
      toHaveBeenCalledOn: function($something){
        //only works on jQuery since that's the this i almost always care about
        var found = false;
        _(this.actual.calls).each(function(c){
          var selector = _($something).isString() ? $something : $something.selector;

          //The actual thing existed
          if(c.object && c.object[0] && $($something)[0] && c.object[0] === $($something)[0]) {
            found = true;
          } else if(c.object.filter(selector).length > 0) {
            //Or it matches the selector of the argument
            found = true;
          } else if(c.object.selector === selector) {
            //Or, hey, the selectors matched exactly
            found = true;
          }
        });
        return found;
      },
      toHaveLength: function(length) {
        var win = $(this.actual).length == length;
        this.actual = $(this.actual).toArray();
        return win;
      },
      toBeOnDocument: function() {
        return $('#'+$.jasmine.rootId).find($(this.actual)).length > 0;
      }
    });
  });
})();