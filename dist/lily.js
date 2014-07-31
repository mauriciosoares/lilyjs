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