/** lilyjs - v0.0.0 - 2014-07-31
* Copyright (c) 2014 Mauricio Soares de Oliveira;
* Licensed Beerware 
*/

;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    fn.call(this, new Seed());
  };

  root.Lily = Lily;
} (this));
;(function(root) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.beforeEachFn === 'function') {
      this.beforeEachFn();
    }

    fn.call(this, new root.Assert());
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

  Assert.prototype.expect = function(value) {
    this.firstValue = value;
    return this;
  };

  Assert.prototype.toBe = function(value) {

  };

  root.Assert = Assert;
} (this));