import $ from '../core';

$.prototype.setAttr = function (attrName, attrValue) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attrName, attrValue);
  }
  return this;
};

$.prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }
  return this;
};

$.prototype.getAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(attrName)) {
      continue;
    }
    return this[i].getAttribute(attrName);
  }
  return this[0];
};