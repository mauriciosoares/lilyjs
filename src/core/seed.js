;(function(root) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.beforeEachFn === 'function') {
      this.beforeEachFn();
    }

    fn();
  };

  Seed.prototype.beforeEach = function(fn) {
    this.beforeEachFn = fn;
  };

  root.Seed = Seed;
} (this));