(function($) {
 $.fn.ogp = function() {
    var ns = 'og:', data = {};
    $(this).each(function () {
      $('meta', this).each(function () {
        var prop = $(this).attr("property"), key, value;
        if (prop && prop.substring(0, ns.length) === ns) {
          key = prop.substring(ns.length);
          value = $(this).attr("content");
          //console.log("Found OGP data %s = %s", key, value);
          data[key] = value;
        }
      });
    });
    return data;
  }
})(jQuery);