/** lilyjs - v0.0.0 - 2014-08-06
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

;(function(root, Lily) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.before === 'function') {
      this.before();
    }

    var reportStatus;

    this.assertInstance = new root.Assert();

    this.assertInstance.reports = [];

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));


    reportStatus = Lily.report(this.assertInstance.reports);
    if(reportStatus.passed) {
      Lily.logger(name, 'success');
    } else {
      Lily.logger(name, 'failure');
      Lily.logger(reportStatus.errorMessage, 'errorMessage');
    }
  };

  Seed.prototype.beforeEach = function(fn) {
    this.before = fn;
  };

  root.Seed = Seed;
} (this, this.Lily));

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
        prepend: '-> '
      },

      success: {
        bg: 'green',
        prepend: '--> ✓ '
      },

      failure: {
        bg: 'red',
        prepend: '--> ✘ '
      },

      errorMessage: {
        bg: 'red',
        prepend: '-----> '
      }
    };

    console.log('%c' + configs[status].prepend + msg, 'background-color: ' + configs[status].bg + '; font-weight: bold; color: white; padding: 2px;');
  };
} (this.Lily));

;(function(Lily) {
  'use strict';

  Lily.report = function(reports) {
    var reportStatus = {
      passed: true
    };
    reports.forEach(function(assert) {
      if(!assert.hasPassed) {
        reportStatus.passed = false;
        reportStatus.errorMessage = assert.message;
      }
    });

    return reportStatus;
  };
} (this.Lily));
