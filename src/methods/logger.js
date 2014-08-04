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
