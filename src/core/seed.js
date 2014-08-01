;(function(root) {
  'use strict';
  var Seed = function(lily) {
    this.lily = lily;

    this.assertInstance = new root.Assert();
    this.assertInstance.lily = lily;
  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.beforeEachFn === 'function') {
      this.beforeEachFn();
    }

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));
  };

  Seed.prototype.beforeEach = function(fn) {
    this.beforeEachFn = fn;
  };

  root.Seed = Seed;
} (this));
