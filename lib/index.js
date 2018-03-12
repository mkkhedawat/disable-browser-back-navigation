'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sheBang = '!';
var hashSign = '#';

var addHashBangToUrl = function addHashBangToUrl() {
  window.location.href += hashSign;
  // Timeout to let settle earlier addtion of location
  // Dual addition of hash as browser may ignore to put history for first hash addition
  window.setTimeout(function () {
    window.location.href += sheBang;
  }, 0);
};

// eslint-disable-next-line no-extend-native
Function.prototype.attachFunctionSeq = function (fn) {
  var self = this;
  return function () {
    self.apply(this, arguments);
    fn.apply(this, arguments);
  };
};

var overrideBrowserNavigaion = function overrideBrowserNavigaion() {
  if (typeof window === 'undefined') {
    throw new Error('window is undefined. This code is supposed to be run within browser.');
  }

  window.onhashchange = function () {
    if (window.location.hash !== sheBang) {
      window.location.hash = sheBang;
    }
  };

  if (document.readyState === 'complete') {
    addHashBangToUrl();
  } else {
    window.onload = (window.onload || function () {}).attachFunctionSeq(addHashBangToUrl);
  }
};

exports.default = overrideBrowserNavigaion;