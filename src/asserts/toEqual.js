;(function(Assert) {
  Assert.prototype.toEqual = function(value) {
    return this.firstValue === value;
  };
} (this.Assert));
