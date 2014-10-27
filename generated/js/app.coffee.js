(function() {
  window.helloText = function() {
    return 'Hello, World!';
  };

  window.hello = function() {
    var html;
    html = JST['app/templates/hello.us']({
      text: helloText()
    });
    return document.body.innerHTML += html;
  };

  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', hello, false);
  } else {
    window.attachEvent('load', hello);
  }

}).call(this);
