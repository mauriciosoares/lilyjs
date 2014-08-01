/** lilyjs - v0.0.0 - 2014-08-01
* Copyright (c) 2014 Mauricio Soares de Oliveira;
* Licensed Beerware 
*/

;(function(root) {
  'use strict';

  var Lily = function(name, fn) {
    if(!(this instanceof Lily)) {
      return new Lily(name, fn);
    }

    this.configs = {
      name: name,
      fn: fn,
      status: {
        success: [],
        failure: []
      }
    };

    this.initialize();
  };

  Lily.prototype.initialize = function() {
    Lily.logger(this.configs.name, 'title');

    this.configs.fn.call(this, new root.Seed(this));
  };

  root.Lily = Lily;
} (this));

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

;(function(root) {
  'use strict';

  var Assert = function() {

  };

  Assert.prototype.assert = function(val) {
    this.assertVal = val;

    return this;
  };

  root.Assert = Assert;
} (this));

;(function(Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    console.log(this.lily);
    return this.assertVal === val;
  };
} (this.Assert));

;(function(Lily) {
  'use strict';

  Lily.logger = function(msg, status) {
    var configs = {
      title: {
        bg: 'blue',
      },

      success: {
        bg: 'green'
      },

      failure: {
        bg: 'red'
      }
    };

    console.log('%c' + msg, 'background-color: ' + configs[status].bg + '; font-weight: bold; color: white; padding: 2px;');
  };
} (this.Lily));
