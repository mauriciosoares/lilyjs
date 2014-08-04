/** lilyjs - v0.0.0 - 2014-08-04
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
    Lily.logger(this.configs.name, 'lily');

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

    this.assertInstance.reports = [];

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));

    // Lily.logger(name, 'seed');
    console.log(root.Lily.report(this.assertInstance.reports));
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
      this.reports.push({
        hasPassed: true
      });
      return;
    }

    this.reports.push({
      hasPassed: false,
      message: 'Expect ' + this.assertVal + ' to equal ' + val
    });

    return assertResult;
  };
} (this.Lily, this.Assert));

;(function(Lily) {
  'use strict';

  Lily.logger = function(msg, status) {
    var configs = {
      lily: {
        bg: 'blue',
      },

      seed: {
        bg: 'purple',
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

;(function(Lily) {
  'use strict';

  Lily.report = function(reports) {
    var reportStatus = true;
    reports.forEach(function(assert) {
      if(!assert.hasPassed) {
        Lily.logger(assert.message, 'failure');
        reportStatus = false;
        return false;
      }
    });

    return true;
  };
} (this.Lily));
