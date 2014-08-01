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
      fn: fn
    };

    this.initialize();
  };

  Lily.prototype.initialize = function() {
    Lily.logger(this.configs.name, 'title');

    this.configs.fn.call(this, new root.Seed());
  };

  root.Lily = Lily;
} (this));

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

;(function(Lily, Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    var assertResult = (this.assertVal === val);

    if(assertResult) {
      this.reports.success += 1;
      return;
    }

    this.reports.failures += 1;
    this.reports.failureMessages.push('Erro');

    return assertResult;
  };
} (this.Lily, this.Assert));

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
