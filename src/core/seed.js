;(function(root) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.before === 'function') {
      this.before();
    }

    this.assertInstance = new root.Assert();

    this.assertInstance.reports = [];

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));

    console.log(name);
    console.log(this.assertInstance.reports);
  };

  Seed.prototype.beforeEach = function(fn) {
    this.before = fn;
  };

  root.Seed = Seed;
} (this));
