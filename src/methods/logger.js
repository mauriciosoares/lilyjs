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
        prepend: '----> '
      }
    };

    console.log('%c' + configs[status].prepend + msg, 'background-color: ' + configs[status].bg + '; font-weight: bold; color: white; padding: 2px;');
  };
} (this.Lily));
