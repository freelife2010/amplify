'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = process && process.env.NODE_ENV !== 'production' ? // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }
  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;
    if (valueClass && valueClass.name === className) {
      throw new Error('Cannot use ' + className + ' "' + value + '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.');
    }
  }
  return false;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
}; /**
    * Copyright (c) 2015-present, Facebook, Inc.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    *  strict
    */

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */