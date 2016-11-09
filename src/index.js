/**
 * blear.utils.debug
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */

'use strict';

var fun = require('blear.utils.function');


/**
 * 废弃使用
 * @param fn {Function} 方法
 * @param [deprecated] {String} 提示语句
 * @returns {Function}
 */
exports.deprecate = function (fn, deprecated) {
    return function () {
        if (typeof DEBUG !== 'undefined' && DEBUG === true) {
            console.warn(deprecated || fun.name(fn) + ' 已被废弃，请勿再使用。');
        }

        return fn.apply(this, arguments);
    };
};
