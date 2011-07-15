describe('JSHint', function() {
  var options = {
    curly : true,
    white : false,
    evil: true,
    indent : 2
  }, excludes = /^.*\/vendor\/.*$/, includes = /^.*js$/;

  function get(path) {
    path = path + "?" + new Date().getTime();

    var xhr;
    try {
      xhr = new jasmine.XmlHttpRequest();
      xhr.open("GET", path, false);
      xhr.send(null);
    } catch (e) {
      throw new Error("couldn't fetch " + path + ": " + e);
    }
    if (xhr.status < 200 || xhr.status > 299) {
      throw new Error("Could not load '" + path + "'.");
    }

    return xhr.responseText;
  }

  $.each(document.getElementsByTagName('script'), function(i,element) {
    var script = element.getAttribute('src');
    if (!includes.test(script) || excludes.test(script)) {
      return;
    }

    var source;

    try {
      source = get(script);
    } catch (e) {
      //Oh well. Probably an XMLHttpRequest same-origin policy violation
    }

    if (source !== undefined) {
      it(script, function() {
        var self = this;
        var result = JSHINT(source, options);
        $.each(JSHINT.errors, function(i,error) {
          self.addMatcherResult(new jasmine.ExpectationResult({
            passed: false,
            message: "line " + error.line + ' - ' + error.reason + ' - ' + error.evidence 
          }));
        });
        expect(true).toBe(true); // force spec to show up if there are no errors
      });
    }

  });
});