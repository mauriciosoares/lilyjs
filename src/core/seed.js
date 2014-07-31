;(function(root) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.beforeEachFn === 'function') {
      this.beforeEachFn();
    }

    fn.call(this, root.Assert);
  };

  Seed.prototype.beforeEach = function(fn) {
    this.beforeEachFn = fn;
  };

  root.Seed = Seed;
} (this));