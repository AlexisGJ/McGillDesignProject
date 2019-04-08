'use strict';

module.exports = (_chai, utils) => {
  let Assertion = _chai.Assertion;

  function assertContained(arr) {
    var obj = this._obj;

    this.assert(
        arr.indexOf(obj) !== -1
      , 'expected #{this} to be one of the #{exp}'
      , 'expected #{this} to not one of the #{exp}'
      , arr
    );
  }

  Assertion.addMethod('containedIn', assertContained);
};
