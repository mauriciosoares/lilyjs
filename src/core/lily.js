;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    if(!(this instanceof Lily)) {
      return new Lily(name, fn);
    }

    this.configs = {
      name: name,
      fn: fn
    };

    this.initialize();
  };

  Lily.prototype.initialize = function() {
    Lily.logger(this.configs.name, 'title');

    this.configs.fn.call(this, new root.Seed());
  };

  root.Lily = Lily;
} (this));
