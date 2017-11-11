/* -----------------------------------------------------
    Copyright (c) 2017 Dave Berning
    All Rights Reserved
    Version: Development

    Developed by: Dave Berning
------------------------------------------------------ */

(function(root, factory) {
  var pluginName = 'LeftyRighty';

  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if (typeof exports === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
}(this, function(pluginName) {
  'use strict';

  var defaults = {
    rowSelector: 'row',
    flipRowSelector: 'lr-reverse',
    itemSelector: 'lr-item'
  };

  var extend = function(target, options) {
    var prop, extended = {};

    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  };

  var privateFunction = function() {
    // private helper code goes here
  };

  function Plugin(element, options) {
    this.element = element;
    this.options = extend(defaults, options);

    // init code goes here
    this.getRowsWithLeftyRightyItems();
    // console.log(this.getAllRows());
  }

  // Plugin prototype
  Plugin.prototype = {
    getAllRows: function() { // Object Array
      var rows = document.getElementsByClassName(this.options.rowSelector);
      var rowArray = [];

      for (var i = 0; i < rows.length; i++) {
        rowArray.push(rows[i]);
      }

      return rowArray;
    },
    getRowsWithLeftyRightyItems: function() {
      var rows = this.getAllRows(),
          rowsWithLeftyRightItems = [],
          counter;

      for (var i = 0; i < rows.length; i++) { // loop divs with rowSelector
        var lrItems = rows[i].children;
        counter = 0;

        for (var a = 0; a < lrItems.length; a++) { // loop all rows with children that have itemSelector
          if (lrItems[a].classList.contains(this.options.itemSelector)) {
            if (counter === 0) {
              console.log(rows);
              rowsWithLeftyRightItems.push(rows[i]);
            }

            console.log('class');
            counter++;
          }
        }
      }
      return rowsWithLeftyRightItems;
    },
    reorderRowsWithLeftyRightyItems: function() {
      var rows = this.getRowsWithLeftyRightyItems(),
          lrItems = rows[i].children;

      for (var i = 0; i < rows.length; i++) {
        console.log(lrItems);
      }
    }
  };

  // jQuery Wrapper
  if (window.jQuery) {
    var $ = window.jQuery;

    $.fn[pluginName] = function(options) {
      options = options || {};

      return this.each(function() {
        // add plugin to element data
        if (!$.data(this, 'plugin_' + pluginName)) {
          options.element = this;
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });
    };
  }
  return Plugin;
}));
