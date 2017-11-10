/* -----------------------------------------------------
    Copyright (c) 2017 Dave Berning
    All Rights Reserved
    Version: Development

    Developed by: Dave Berning
------------------------------------------------------ */
function LeftyRighty(selector) {
  this.node = document.querySelector(selector);
  
  if (this.node == null) {
    console.error(selector + ' is not a valid selector.');
  }

  return this;
}

LeftyRighty.prototype.close = function() {
  this.var = "blah";
  // do stuff
}