;(function(root) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.before === 'function') {
      this.before();
    }

    this.assertInstance = new root.Assert();

    this.assertInstance.reports = {
      success: 0,
      failures: 0,
      failureMessages: []
    };

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));

    console.log(this.assertInstance.reports);
  };

  Seed.prototype.beforeEach = function(fn) {
    this.before = fn;
  };

  root.Seed = Seed;
} (this));
