/** lilyjs - v0.0.0 - 2014-07-31
* Copyright (c) 2014 Mauricio Soares de Oliveira;
* Licensed Beerware 
*/

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

;(function(root) {
  'use strict';
  var Seed = function(lily) {
    this.lily = lily;
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

;(function(root) {
  'use strict';

  var Assert = function() {

  };

  Assert.prototype.assert = function(value) {
    this.firstValue = value;

    return this;
  };

  root.Assert = Assert;
} (this));

;(function(Assert) {
  Assert.prototype.toEqual = function(value) {
    return this.firstValue === value;
  };
} (this.Assert));
