;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    if(!(this instanceof Lily)) {
      return new Lily(name, fn);
    }

    this.name = name;
    this.fn = fn;

    this.initialize();
  };

  Lily.prototype.initialize = function() {
    console.log('-------------- ' + this.name + ' --------------');
    this.fn.call(this, new root.Seed(this));
  };

  root.Lily = Lily;
} (this));
