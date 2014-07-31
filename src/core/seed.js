;(function(root) {
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    // this.beforeEachFn && this.beforeEachFn();
    // fn.apply;
  };

  Seed.prototype.beforeEach = function(fn) {
    this.beforeEachFn = fn;
  };

  root.Seed = Seed;
} (this));