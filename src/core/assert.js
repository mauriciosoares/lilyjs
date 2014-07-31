;(function(root) {
  'use strict';

  var Assert = function(value) {
    if(!(this instanceof Assert)) {
      return new Assert(value);
    }

    this.firstValue = value;

    return this;
  };

  root.Assert = Assert;
} (this));