"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Deep clones a JavaScript value.
 * @param value The value to clone.
 */
var clone = function (value) {
    return innerClone(value);
};
var innerClone = function (value) {
    if (typeof value === "object") {
        // Null is an object, so we need to explictly catch this
        if (value === null) {
            return null;
        }
        if (Array.isArray(value)) {
            return value.map(innerClone);
        }
        if (value instanceof Date) {
            return new Date(value);
        }
        var keys = Object.keys(value);
        var newValue = {};
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            newValue[key] = innerClone(value[key]);
        }
        return newValue;
    }
    return value;
};
exports.default = clone;
//# sourceMappingURL=index.js.map