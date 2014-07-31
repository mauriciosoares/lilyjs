;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    fn.call(this, new Seed());
  };

  root.Lily = Lily;
} (this));