;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    fn.call(this, new root.Seed());
  };

  root.Lily = Lily;
} (this));