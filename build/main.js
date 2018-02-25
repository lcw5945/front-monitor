require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hefan_debug_log_s__);
/**
 * Created by Cray on 2017/5/25.
 */



var CODE = {
    PARAMS_NULL: 400, //参数为空
    UNAUTHORIZED: 401, //用户验证错误
    PARAMS_ERROR: 402, //参数错误
    OPERATE_ERROR: 403, //用户操作错误
    CREATE_ERROR: 501, //创建失败
    FIND_ERROR: 502, //查询失败
    UPDATE_ERROR: 503, //更新失败
    DEL_ERROR: 504 //删除失败
};
var POST_CODE = [CODE.CREATE_ERROR, CODE.FIND_ERROR, CODE.UPDATE_ERROR, CODE.DEL_ERROR];

/* harmony default export */ __webpack_exports__["a"] = ({
    paramsNull: function paramsNull() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '参数为空';

        return {
            code: CODE.PARAMS_NULL,
            data: null,
            msg: msg
        };
    },
    paramsError: function paramsError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '参数错误';

        return {
            code: CODE.PARAMS_ERROR,
            data: null,
            msg: msg
        };
    },
    createError: function createError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '创建失败';

        return {
            code: CODE.CREATE_ERROR,
            data: null,
            msg: msg
        };
    },
    findError: function findError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '查询失败';

        return {
            code: CODE.FIND_ERROR,
            data: null,
            msg: msg
        };
    },
    updateError: function updateError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '更新失败';

        return {
            code: CODE.UPDATE_ERROR,
            data: null,
            msg: msg
        };
    },
    delError: function delError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '删除失败';

        return {
            code: CODE.DEL_ERROR,
            data: null,
            msg: msg
        };
    },
    operateError: function operateError() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作失败';

        return {
            code: CODE.OPERATE_ERROR,
            data: null,
            msg: msg
        };
    },
    Unauthorized: function Unauthorized() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '用户验证错误';

        return {
            code: CODE.UNAUTHORIZED,
            data: null,
            msg: msg
        };
    },

    /**
     * 根据code发送error
     * @param {Object} ctx koa上下文
     * **/
    postError: function postError(req, res, data) {
        var _ref = data || {},
            code = _ref.code,
            msg = _ref.msg;

        if (POST_CODE.includes(code) && req.path != '/api/postDebug') {
            __WEBPACK_IMPORTED_MODULE_0_hefan_debug_log_s___default.a.error('ERROR: ' + req.method + ' ' + (req.hostname + req.path) + ' ' + data.msg);
        }
    },
    serverError: function serverError(res, err) {
        var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '500';

        res.set('Content-Type', 'text/plain;charset=utf-8');
        res.status(code).end(err + '\n');
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("hefan-debug-log-s");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Cray on 2017/5/25.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * 查询参数验证
     * @param req
     * @returns {*}
     */
    queryValidate: function queryValidate(req) {
        var query = req.query;
        if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) !== 'object') {
            return null;
        }
        return query;
    },

    /**
     * 提交参数验证
     * @param req
     * @returns {*}
     */
    bodyValidate: function bodyValidate(req) {
        var body = req.body;
        if ((typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== 'object') {
            return null;
        }
        return body;
    },

    /**
     * 判断是否是id
     * @param id
     * @returns {*}
     */
    isObejctId: function isObejctId(id) {
        if (id && String(id).length === 24) {
            return true;
        }
        return false;
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__problem__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language__ = __webpack_require__(43);





/* harmony default export */ __webpack_exports__["a"] = ({
    problem: __WEBPACK_IMPORTED_MODULE_0__problem__["a" /* default */],
    project: __WEBPACK_IMPORTED_MODULE_1__project__["a" /* default */],
    language: __WEBPACK_IMPORTED_MODULE_3__language__["a" /* default */],
    record: __WEBPACK_IMPORTED_MODULE_2__record__["a" /* default */]
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);



/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * 用户名密码加密
     * @param str
     * @param key
     * @returns {*}
     */
    md5: function md5(str, key) {
        var decipher = __WEBPACK_IMPORTED_MODULE_1_crypto___default.a.createHash('md5', key);
        if (key) {
            return decipher.update(str).digest();
        }
        return decipher.update(str).digest('hex');
    },


    get now() {
        return '' + Date.now();
    },

    browserSniff: function browserSniff(navigator) {
        var nAgt = navigator.userAgent,
            name = navigator.appName,
            fullVersion = '' + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix;

        if (navigator.appVersion.indexOf('Windows NT') !== -1 && navigator.appVersion.indexOf('rv:11') !== -1) {
            name = 'IE';
            fullVersion = '11;';
        } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
            name = 'IE';
            fullVersion = nAgt.substring(verOffset + 5);
        } else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
            name = 'Edge';
            fullVersion = nAgt.substring(verOffset + 5);
        } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
            name = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
            name = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
            name = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            name = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);

            if (name.toLowerCase() == name.toUpperCase()) {
                name = navigator.appName;
            }
        }
        if ((ix = fullVersion.indexOf(';')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        if ((ix = fullVersion.indexOf(' ')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {
            name: name,
            version: majorVersion,
            win: navigator.platform.indexOf("Win") == 0,
            wechat: /micromessenger/.test(nAgt.toLowerCase()),
            qq: /qq/.test(nAgt.toLowerCase()),
            weibo: /weibo/.test(nAgt.toLowerCase()),
            ios: /(iPad|iPhone|iPod)/g.test(nAgt),
            android: /(Android)/g.test(nAgt),
            mobile: /AppleWebKit.*Mobile.*/.test(nAgt)
        };
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Cray on 2017/3/23.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    fetch: function fetch(cb) {
        var sortType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'update_time';
        var conditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this.find(conditions).sort(_defineProperty({}, sortType, 'desc')).exec(cb);
    },
    fetchPage: function fetchPage(skip, limit, cb) {
        var sortType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'update_time';
        var conditions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        return this.find(conditions).skip(skip).limit(limit).sort(_defineProperty({}, sortType, 'desc')).exec(cb);
    },
    findById: function findById(id, cb) {
        return this.findOne({ _id: id }).exec(cb);
    },
    counts: function counts(conditions, cb) {
        return this.count(conditions).exec(cb);
    },
    findByMulId: function findByMulId(ids, cb) {
        return this.find({ _id: { '$in': ids } }).exec(cb);
    },

    findOneInfo: function findOneInfo(conditions, cb) {
        return this.findOne(conditions).exec(cb);
    },
    findInfo: function findInfo(conditions, cb) {
        return this.find(conditions).exec(cb);
    },
    createInfo: function createInfo(doc, cb) {
        return this.create(doc, cb);
    },
    updateInfo: function updateInfo(id, doc, cb) {
        var conditions = { _id: id };
        var options = {};
        var update = { $set: doc };
        return this.update(conditions, update, options, cb);
    },
    removeInfo: function removeInfo(id, cb) {
        var conditions = { _id: id };
        return this.remove(conditions, cb);
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_wraper__ = __webpack_require__(44);



/* harmony default export */ __webpack_exports__["a"] = ({

    /**
     * 抓取数据
     * @param {*} model
     */
    fetch: function fetch(model) {
        var sortType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'update_time';
        var conditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return new Promise(function (resolve, reject) {
            model.fetch(function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            }, sortType, conditions);
        });
    },

    /**
     * 分页获取数据
     */
    fetchPage: function fetchPage(model, skip, limit, sortType, conditions) {
        return new Promise(function (resolve, reject) {
            model.fetchPage(parseInt(skip), parseInt(limit), function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            }, sortType, conditions);
        });
    },


    /**
     * 分页获取数据 关联查询
     */
    refFetchPage: function refFetchPage(model, skip, limit, sortType, conditions) {
        return new Promise(function (resolve, reject) {
            model.refFetchPage(parseInt(skip), parseInt(limit), function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            }, sortType, conditions);
        });
    },


    /**
     * 分页获取数据 关联查询
     */
    refFetch: function refFetch(model, sortType, conditions) {
        return new Promise(function (resolve, reject) {
            model.refFetch(function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            }, sortType, conditions);
        });
    },


    /**
     * 查找多个
     * @param {*} model
     * @param {*} conditions
     */
    find: function find(model, conditions) {
        return new Promise(function (resolve, reject) {
            model.findInfo(conditions, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 查找多1个
     * @param {*} model
     * @param {*} conditions
     */
    findOne: function findOne(model, conditions) {
        return new Promise(function (resolve, reject) {
            model.findOneInfo(conditions, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 查找一个
     * @param {*} model
     * @param {*} id
     */
    findById: function findById(model, id) {
        return new Promise(function (resolve, reject) {
            model.findById(id, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },

    /**
     * 查找一个 关联查询
     * @param {*} model
     * @param {*} id
     */
    refFindById: function refFindById(model, id) {
        return new Promise(function (resolve, reject) {
            model.refFindById(id, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 查询多个id数据
     * @param {*} model
     * @param {*} ids
     */
    findByMulId: function findByMulId(model, ids) {
        return new Promise(function (resolve, reject) {
            model.findByMulId(ids, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 数量查询
     * @param {*} model
     * @param {*} conditions
     */
    count: function count(model, conditions) {
        return new Promise(function (resolve, reject) {
            model.counts(conditions, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 创建文档
     * @param {*} model
     * @param {*} doc
     */
    create: function create(model, doc) {
        //封装参数
        doc = Object(__WEBPACK_IMPORTED_MODULE_1__utils_wraper__["a" /* wraper */])(model, doc);
        console.log('create problem', doc);
        return new Promise(function (resolve, reject) {
            model.createInfo(doc, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },


    /**
     * 更新
     * @param {*} model
     * @param {*} id
     * @param {*} params
     */
    update: function update(model, id, params) {
        return new Promise(function (resolve, reject) {
            model.updateInfo(id, params, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },

    /**
     * 更新
     * @param {*} model
     * @param {*} id
     * @param {*} params
     */
    updateBase: function updateBase(model) {
        var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        return new Promise(function (resolve, reject) {
            model.update(conditions, update, options, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 删除by id
     * @param {*} model
     * @param {*} id
     */
    remove: function remove(model, id) {
        return new Promise(function (resolve, reject) {
            model.removeInfo(id, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    },


    /**
     * 聚合函数
     * @param {*} model
     * @param {Array} conditions 查询条件
     */
    aggregate: function aggregate(model, conditions) {
        return new Promise(function (resolve, reject) {
            model.aggregate(conditions, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_entity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redis__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hefan_debug_log_s__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by user on 2018/2/5.
 */









/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * problem查询列表
     * @param {String} condition 查询条件  project_id、url、script_url、env
     * @param {String} skip
     * @param {String} limit
     * **/
    problemList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(condition, skip, limit) {
            var res, data;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            res = null, data = null;
                            _context.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].fetchPage(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, skip, limit, 'create_time', condition).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].findError('problem查询失败');
                            });

                        case 3:
                            data = _context.sent;

                            if (!res) {
                                res = {
                                    code: 200,
                                    data: data,
                                    msg: ''
                                };
                            }
                            return _context.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function problemList(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return problemList;
    }(),


    /**
     * problem详情
     * @param {String} id 问题id
     * **/
    problem: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(id) {
            var res, data;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            res = null, data = null;
                            _context2.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].findById(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, id).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].findError('problem查询失败');
                            });

                        case 3:
                            data = _context2.sent;

                            if (!res) {
                                res = {
                                    code: 200,
                                    data: data,
                                    msg: ''
                                };
                            }
                            return _context2.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function problem(_x4) {
            return _ref2.apply(this, arguments);
        }

        return problem;
    }(),


    /**
     * 增加和更新problem
     * **/
    addUpdateProblem: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(params, id) {
            var res, data, conditions, client, recDoc, recData, number_occurence, number_user, users, updateData;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            res = null, data = null;

                            if (!id) {
                                _context3.next = 7;
                                break;
                            }

                            _context3.next = 4;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].update(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, id, params).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].updateError('更新失败');
                            });

                        case 4:
                            data = _context3.sent;
                            _context3.next = 10;
                            break;

                        case 7:
                            _context3.next = 9;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, params).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].createError('添加失败');
                            });

                        case 9:
                            data = _context3.sent;

                        case 10:
                            if (res) {
                                _context3.next = 34;
                                break;
                            }

                            res = {
                                code: 200,
                                data: data,
                                msg: ''

                                //添加redis
                            };__WEBPACK_IMPORTED_MODULE_6__redis__["a" /* default */].addError(params.project_id, params.env);

                            //更新错误记录
                            conditions = {};
                            client = true;

                            if (params.server && Object.keys(params.server).length > 0) {
                                //server
                                client = false;
                                conditions = { url: params.url, project_id: params.project_id, env: params.env };
                            } else {
                                //front
                                conditions = { url: params.url,
                                    project_id: params.project_id,
                                    script_url: params.script_url, env: params.env };
                            }

                            _context3.next = 18;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].find(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].record, conditions).catch(function (e) {
                                res.msg += 'insert problem table is ok, but find recods error conditions is ' + conditions;
                            });

                        case 18:
                            recDoc = _context3.sent;

                            if (!(recDoc && recDoc.length > 0)) {
                                _context3.next = 32;
                                break;
                            }

                            recData = Object.assign({}, recDoc[0]['_doc']);

                            __WEBPACK_IMPORTED_MODULE_7_hefan_debug_log_s___default.a.debug('查询到错误记录数据', recData);
                            number_occurence = recData.number_occurence + 1;
                            number_user = recData.number_user;
                            users = recData.users;
                            updateData = null;

                            if (client) {
                                if (!recData.users.includes(params.ip_info.ip)) {
                                    users.push(params.ip_info.ip);
                                    number_user += 1;
                                }

                                updateData = {
                                    latest_time: __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* default */].now,
                                    number_occurence: number_occurence,
                                    number_user: number_user,
                                    users: users
                                };
                            } else {
                                updateData = { latest_time: __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* default */].now,
                                    number_occurence: number_occurence };
                            }
                            __WEBPACK_IMPORTED_MODULE_7_hefan_debug_log_s___default.a.debug('updateData', updateData);
                            _context3.next = 30;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].update(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].record, recData._id, updateData).catch(function (e) {
                                res.msg += 'update problem error, update conditions is ' + JSON.stringify(updateData);
                            });

                        case 30:
                            _context3.next = 34;
                            break;

                        case 32:
                            _context3.next = 34;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].record, params).catch(function (e) {
                                res.msg += 'insert problem table is ok, but create recods error params is ' + params;
                            });

                        case 34:
                            return _context3.abrupt('return', Promise.resolve(res));

                        case 35:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function addUpdateProblem(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return addUpdateProblem;
    }(),


    /*
     * 删除问题
     * @param {String} id 问题id
     * */
    deleteProblem: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(id) {
            var res, data;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            res = null, data = null;


                            data = __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].remove(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, id).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].delError('更新失败');
                            });
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: data,
                                    msg: ''
                                };
                            }

                            return _context4.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function deleteProblem(_x7) {
            return _ref4.apply(this, arguments);
        }

        return deleteProblem;
    }(),


    /**
     * 获取累计错误数量
     **/
    problemSum: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
            var res, data;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            res = null, data = null;
                            _context5.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].count(__WEBPACK_IMPORTED_MODULE_3__models__["a" /* default */].problem, {}).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_4__utils_serror__["a" /* default */].findError();
                            });

                        case 3:
                            data = _context5.sent;

                            if (!res) {
                                res = {
                                    code: 200,
                                    data: data,
                                    msg: ''
                                };
                            }

                            return _context5.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function problemSum() {
            return _ref5.apply(this, arguments);
        }

        return problemSum;
    }()
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conf__ = __webpack_require__(24);
/**
 * Created by Cray on 2017/4/17.
 */

// var url = require('url')


var WebSocketServer = __webpack_require__(25).Server;
var wss = new WebSocketServer({ port: __WEBPACK_IMPORTED_MODULE_0__conf__["a" /* default */].socket.port });

wss.on('connection', function (ws) {
  ws.on('message', function (data) {
    // console.log('received: %s', data)
  });
});

/* harmony default export */ __webpack_exports__["a"] = (wss);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    db: {
        //mongodb 配置
        DB_TEST: {
            url: 'mongodb://admin:hefantv.123@47.93.89.11:28017/debug-test',
            options: {}
        },
        DB_PRO: {
            url: 'mongodb://admin:hefantv.123@47.93.89.11:28017/debug',
            options: {}
        }
    },
    redis: {
        TEST: {
            port: 6378,
            host: '10.51.121.143'
        },
        PRO: {
            port: 6379,
            host: '10.51.121.143'
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ioredis__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ioredis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ioredis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conf_web__ = __webpack_require__(13);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var conf =  true ? __WEBPACK_IMPORTED_MODULE_2__conf_web__["a" /* default */].redis.TEST : process.env.NODE_ENV == 'testing' ? config.redis.TEST : config.redis.PRO;

var redis = null;
if (!redis) {
    redis = new __WEBPACK_IMPORTED_MODULE_1_ioredis___default.a(conf.port, conf.host);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    get: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(key) {
            var data;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return redis.get("DEBUG_S:" + key);

                        case 2:
                            data = _context.sent;

                            try {
                                data = JSON.parse(data);
                            } catch (e) {
                                data = null;
                            }
                            return _context.abrupt("return", Promise.resolve(data));

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function get(_x) {
            return _ref.apply(this, arguments);
        }

        return get;
    }(),
    set: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(key, value) {
            var res;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            res = null;
                            _context2.prev = 1;
                            _context2.next = 4;
                            return redis.set("DEBUG_S:" + key, JSON.stringify(value));

                        case 4:
                            res = _context2.sent;
                            _context2.next = 10;
                            break;

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](1);

                            res = null;

                        case 10:
                            return _context2.abrupt("return", Promise.resolve(res));

                        case 11:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[1, 7]]);
        }));

        function set(_x2, _x3) {
            return _ref2.apply(this, arguments);
        }

        return set;
    }(),
    destroy: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(key, ctx) {
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return redis.del("DEBUG_S:" + key);

                        case 2:
                            return _context3.abrupt("return", Promise.resolve(key));

                        case 3:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function destroy(_x4, _x5) {
            return _ref3.apply(this, arguments);
        }

        return destroy;
    }()
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_ws_server__ = __webpack_require__(12);
/**
 * Created by Cray on 2017/4/17.
 */



/* harmony default export */ __webpack_exports__["a"] = ({
    resolve: function resolve(data) {
        switch (data['action']) {
            case '4001':
                {
                    _debug(data);
                    break;
                }
            case '4002':
                {
                    _problemSum(data.num);
                    break;
                }
        }
    }
});

/**
 * 调试
 * @private
 */
function _debug(data) {

    var sendData = {
        'code': '200',
        'action': '4001',
        'data': data
    };
    _send(sendData);
}

/**
 * 错误总数
 * @private
 */
function _problemSum(data) {
    var sendData = {
        'code': '200',
        'action': '4002',
        'data': data
    };
    _send(sendData);
}

/**
 * 发送数据
 * @param sendData
 * @private
 */
function _send(sendData) {

    sendData.data.time = new Date().getTime();
    sendData = JSON.stringify(sendData);
    __WEBPACK_IMPORTED_MODULE_1__lib_ws_server__["a" /* default */].clients.forEach(function (client) {
        client.send(sendData);
    });
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    host: 'smtp.hefantv.com',
    port: 465,
    account: {
        user: 'sendwarning@hefantv.com',
        pwd: 'ubBzS7ing'
    },
    mailInfo: {
        receivers: ['lichunwei@hefantv.com', 'songpeilan@hefantv.com', 'xuchangjian@hefantv.com', 'chenghaiyue@hefantv.com', 'guozongwei@hefantv.com'],
        //receivers: ['guozongwei@hefantv.com'],
        subject: '发现error',
        html: '发现error,请迅速排查！'
    }

});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_entity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_base64__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["a"] = ({
    getProjectList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var res, doc, newDoc, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            res = null;
                            _context.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].refFetch(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project, 'create_time', {}).catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'query project list error'
                                };
                            });

                        case 3:
                            doc = _context.sent;


                            __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s___default.a.debug('获得项目数据', doc);

                            newDoc = [];
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 9;

                            for (_iterator = doc[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                item = _step.value;

                                newDoc.push(__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.pick(item, ['_id', 'name', 'language', 'icon', 'update_time', 'pj_key']));
                            }

                            // 解析数据
                            _context.next = 17;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](9);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 17:
                            _context.prev = 17;
                            _context.prev = 18;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 20:
                            _context.prev = 20;

                            if (!_didIteratorError) {
                                _context.next = 23;
                                break;
                            }

                            throw _iteratorError;

                        case 23:
                            return _context.finish(20);

                        case 24:
                            return _context.finish(17);

                        case 25:
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: newDoc,
                                    msg: ''
                                };
                            }

                            //返回数据
                            return _context.abrupt('return', Promise.resolve(res));

                        case 27:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[9, 13, 17, 25], [18,, 20, 24]]);
        }));

        function getProjectList() {
            return _ref.apply(this, arguments);
        }

        return getProjectList;
    }(),

    /**
     * 更新添加项目
     * @param {*} id
     * @param {*} name
     */
    updateAddProject: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(name, language) {
            var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var res, doc, pj_key, pjdoc;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            res = null;
                            doc = null;
                            pj_key = __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].md5(__WEBPACK_IMPORTED_MODULE_3__utils_base64__["a" /* default */].encode('' + name + language));

                            console.log('pj_key is -> ', pj_key);

                            if (!id) {
                                _context2.next = 10;
                                break;
                            }

                            _context2.next = 7;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].update(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project, id, { name: name, language: language }).catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'update project error project id is ' + id
                                };
                            });

                        case 7:
                            doc = _context2.sent;
                            _context2.next = 21;
                            break;

                        case 10:
                            _context2.next = 12;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].find(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project, { name: name }).catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'find project error, ' + name + ' already exist'
                                };
                            });

                        case 12:
                            pjdoc = _context2.sent;

                            if (!(pjdoc.length > 0)) {
                                _context2.next = 17;
                                break;
                            }

                            res = {
                                code: 406,
                                data: null,
                                msg: 'create project error,' + name + ' already exist'
                            };
                            _context2.next = 21;
                            break;

                        case 17:
                            if (res) {
                                _context2.next = 21;
                                break;
                            }

                            _context2.next = 20;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project, { name: name, language: language, pj_key: pj_key }).catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'create project error'
                                };
                            });

                        case 20:
                            doc = _context2.sent;

                        case 21:

                            // 解析数据
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: pj_key,
                                    msg: 'ok'
                                };
                            }

                            //返回数据
                            return _context2.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 23:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function updateAddProject(_x2, _x3) {
            return _ref2.apply(this, arguments);
        }

        return updateAddProject;
    }(),
    getProject: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(pj_key) {
            var res, doc;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            res = null;
                            _context3.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].findOne(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project, { pj_key: pj_key }).catch(function (e) {
                                res = __WEBPACK_IMPORTED_MODULE_6__utils_serror__["a" /* default */].findError('project 查询失败');
                            });

                        case 3:
                            doc = _context3.sent;


                            // 解析数据
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: doc,
                                    msg: 'ok'
                                };
                            }

                            //返回数据
                            return _context3.abrupt('return', Promise.resolve(res));

                        case 6:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function getProject(_x4) {
            return _ref3.apply(this, arguments);
        }

        return getProject;
    }()
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = function (bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) {
        t[bin.charAt(i)] = i;
    }return t;
}(b64chars);
var fromCharCode = String.fromCharCode;

// encoder stuff
var cb_utob = function cb_utob(c) {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    } else {
        var _cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
        return fromCharCode(0xf0 | _cc >>> 18 & 0x07) + fromCharCode(0x80 | _cc >>> 12 & 0x3f) + fromCharCode(0x80 | _cc >>> 6 & 0x3f) + fromCharCode(0x80 | _cc & 0x3f);
    }
};

var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var utob = function utob(u) {
    return u.replace(re_utob, cb_utob);
};
var cb_encode = function cb_encode(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
        chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
    return chars.join('');
};

var btoa = function btoa(b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
};

var _encode = function _encode(u) {
    return btoa(utob(u));
};

var encode = function encode(u, urisafe) {
    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
        return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
};
var encodeURI = function encodeURI(u) {
    return encode(u, true);
};
// decoder stuff
var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');
var cb_btou = function cb_btou(cccc) {
    switch (cccc.length) {
        case 4:
            var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
                offset = cp - 0x10000;
            return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
        case 3:
            return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
        default:
            return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
};
var btou = function btou(b) {
    return b.replace(re_btou, cb_btou);
};
var cb_decode = function cb_decode(cccc) {
    var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
};

var atob = function atob(a) {
    return a.replace(/[\s\S]{1,4}/g, cb_decode);
};

var _decode = function _decode(a) {
    return btou(atob(a));
};

var decode = function decode(a) {
    return _decode(String(a).replace(/[-_]/g, function (m0) {
        return m0 == '-' ? '+' : '/';
    }).replace(/[^A-Za-z0-9\+\/]/g, ''));
};

var Base64 = {
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode
};

/* harmony default export */ __webpack_exports__["a"] = (Base64);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_redis__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hefan_debug_log_s__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * 添加错误
     * @param {*} pjId 
     * @param {*} env 
     */
    addError: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(pjId, env) {
            var pjData, item;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_1__service_redis__["a" /* default */].get(pjId);

                        case 2:
                            pjData = _context.sent;
                            item = {
                                env: env,
                                time: Date.now()
                            };

                            if (!(pjData && pjData.data)) {
                                _context.next = 8;
                                break;
                            }

                            pjData.data.unshift(item);
                            _context.next = 11;
                            break;

                        case 8:
                            pjData = { data: [item] };
                            _context.next = 11;
                            return __WEBPACK_IMPORTED_MODULE_1__service_redis__["a" /* default */].set(pjId, pjData);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function addError(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return addError;
    }(),


    /**
     * 获得最近一段时间错误
     * @param {*} pjId -项目id
     * @param {*} env  -环境
     * @param {*} grid -多少格子
     * @param {*} format -单位 小时，天，月
     */
    getError: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(pjId) {
            var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var grid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
            var format = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'd';

            var markTime, minTime, unitTime, items, resList, res, currTime, pjData, error, totalError, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _i;

            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            markTime = void 0, minTime = void 0, unitTime = void 0, items = void 0, resList = [], res = void 0, currTime = Date.now();
                            _context2.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_1__service_redis__["a" /* default */].get(pjId);

                        case 3:
                            pjData = _context2.sent;


                            __WEBPACK_IMPORTED_MODULE_2_hefan_debug_log_s___default.a.debug('projct id is ' + pjId + ' get data from redis is ' + JSON.stringify(pjData));
                            env = env == '' ? ['development', 'testing', 'prepare', 'production'] : [env];

                            if (pjData) {
                                _context2.next = 8;
                                break;
                            }

                            return _context2.abrupt('return', Promise.resolve({
                                code: 408,
                                data: null,
                                msg: ''
                            }));

                        case 8:

                            items = pjData.data;
                            if (format == 'm') {
                                unitTime = 60 * 1000;
                            } else if (format == 'h') {
                                unitTime = 60 * 60 * 1000;
                            } else if (format == 'd') {
                                unitTime = 24 * 60 * 60 * 1000;
                            } else if (format == 'month') {
                                unitTime = 30 * 24 * 60 * 60 * 1000;
                            }

                            markTime = currTime - unitTime;
                            minTime = currTime - unitTime * grid;

                            error = 0;
                            totalError = 0;
                            i = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context2.prev = 18;
                            _iterator = items[Symbol.iterator]();

                        case 20:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context2.next = 28;
                                break;
                            }

                            item = _step.value;

                            if (!(parseInt(item.time) < minTime)) {
                                _context2.next = 24;
                                break;
                            }

                            return _context2.abrupt('break', 28);

                        case 24:
                            if (env.includes(item.env)) {
                                if (parseInt(item.time) > markTime) {
                                    error++;
                                } else {
                                    resList.push({
                                        time: new Date(markTime + unitTime),
                                        errorNum: error
                                    });
                                    error = 1;
                                    markTime -= unitTime;
                                }
                                totalError++;
                                i++;
                                if (i == items.length) {
                                    resList.push({
                                        time: new Date(markTime + unitTime),
                                        errorNum: error
                                    });
                                }
                            }

                        case 25:
                            _iteratorNormalCompletion = true;
                            _context2.next = 20;
                            break;

                        case 28:
                            _context2.next = 34;
                            break;

                        case 30:
                            _context2.prev = 30;
                            _context2.t0 = _context2['catch'](18);
                            _didIteratorError = true;
                            _iteratorError = _context2.t0;

                        case 34:
                            _context2.prev = 34;
                            _context2.prev = 35;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 37:
                            _context2.prev = 37;

                            if (!_didIteratorError) {
                                _context2.next = 40;
                                break;
                            }

                            throw _iteratorError;

                        case 40:
                            return _context2.finish(37);

                        case 41:
                            return _context2.finish(34);

                        case 42:

                            for (_i = 0; _i < grid; _i++) {
                                if (!resList[_i]) {
                                    resList[_i] = {
                                        time: new Date(markTime),
                                        errorNum: 0
                                    };
                                    markTime = markTime - unitTime;
                                }
                            }

                            return _context2.abrupt('return', Promise.resolve({
                                code: 200,
                                data: {
                                    errorList: resList,
                                    totalError: totalError
                                },
                                msg: ''
                            }));

                        case 44:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[18, 30, 34, 42], [35,, 37, 41]]);
        }));

        function getError(_x6) {
            return _ref2.apply(this, arguments);
        }

        return getError;
    }()
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_ws_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_mongdb__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_redis__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_v1_index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constant_web__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hefan_debug_log_s__);












var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = __WEBPACK_IMPORTED_MODULE_9__constant_web__["a" /* default */].nuxt.host;
var port = __WEBPACK_IMPORTED_MODULE_9__constant_web__["a" /* default */].nuxt.port;
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_4_cookie_parser___default()());
//port 
app.set('port', port);
// router
app.use('/api', __WEBPACK_IMPORTED_MODULE_8__routes_v1_index__["a" /* default */]);
//debug
// app.use('/postDebug', debugCtrl.postDebug);
// app.use('/getLogList', debugCtrl.getLogList);
// app.use('/getLogDetails', debugCtrl.getLogDetails);
var config = __webpack_require__(54);
config.dev = !("development" === 'production');
console.log('dev', config.dev);

__WEBPACK_IMPORTED_MODULE_10_hefan_debug_log_s___default.a.config('09341ad31eeb8a27778d67b1ddde220d', "development");

var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);
// nuxt.listen(port, host)


if (config.dev) {
    var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
    builder.build();
}

app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  server: {
    port: 9012,
    host: 'http://localhost.hefantv.com'
  },
  socket: {
    port: 9011
  }

  //    "server": "nodemon ./bin/www --exec babel-node --presets es2015,stage-2 -e js,jade",

});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conf_web__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);




var DB =  true ? __WEBPACK_IMPORTED_MODULE_0__conf_web__["a" /* default */].db.DB_TEST : process.env.NODE_ENV == 'testing' ? config.db.DB_TEST : config.db.DB_PRO;

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.set('debug', "development" == "development" || "development" == 'testing');

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Promise = global.Promise;
console.log(DB);
var url = DB.url,
    options = DB.options;

var setting = Object.assign({}, options);
// console.log(url)


__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(url, setting).then(function () {
    __WEBPACK_IMPORTED_MODULE_1_debug___default.a.log('Mongoose connection open to: ' + DB.url);
}, function (err) {
    __WEBPACK_IMPORTED_MODULE_1_debug___default.a.log('Mongoose connection error: ' + err);
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__record__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_serror__ = __webpack_require__(2);
/**
 * Created by Cray on 2017/3/13.
 */










var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// Log error
router.use(function (req, res, next) {
    var resJson = res.json;
    res.json = function (data) {
        resJson.call(res, data);
        __WEBPACK_IMPORTED_MODULE_7__utils_serror__["a" /* default */].postError(req, res, data);
    };
    next();
});

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

__WEBPACK_IMPORTED_MODULE_1__log__["a" /* default */].route(router);
__WEBPACK_IMPORTED_MODULE_2__problem__["a" /* default */].route(router);
__WEBPACK_IMPORTED_MODULE_3__project__["a" /* default */].route(router);
__WEBPACK_IMPORTED_MODULE_4__record__["a" /* default */].route(router);
__WEBPACK_IMPORTED_MODULE_5__language__["a" /* default */].route(router);
__WEBPACK_IMPORTED_MODULE_6__common__["a" /* default */].route(router);

router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conf_mailconf__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_log__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_mail__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controls_project__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_problem__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hefan_debug_log_s__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }















/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        router.post('/postDebug', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var paramParse, resData, param, pjData, pjParams, browser, insertRes, problemSum, logData, html, isSendMail;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                paramParse = null;
                                resData = null;
                                param = __WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].bodyValidate(req);

                                __WEBPACK_IMPORTED_MODULE_12_hefan_debug_log_s___default.a.debug('\u6536\u5230\u53C2\u6570 ' + param.data);
                                //参数解析
                                if (param) {
                                    try {
                                        paramParse = JSON.parse(param.data);
                                    } catch (e) {
                                        resData = __WEBPACK_IMPORTED_MODULE_10__utils_serror__["a" /* default */].paramsError('参数data并不是json类型');
                                    }
                                } else {
                                    resData = __WEBPACK_IMPORTED_MODULE_10__utils_serror__["a" /* default */].paramsError('参数为空');
                                }
                                //参数错误 返回结果并发送邮件

                                if (!resData) {
                                    _context.next = 9;
                                    break;
                                }

                                sendMail(JSON.stringify(resData));
                                res.json(resData);
                                return _context.abrupt('return');

                            case 9:
                                if (paramParse.pjKey) {
                                    _context.next = 12;
                                    break;
                                }

                                res.json({
                                    code: 200,
                                    msg: 'ok'
                                });
                                return _context.abrupt('return');

                            case 12:
                                //处理业务
                                paramParse.ipInfo = paramParse.ipInfo || {};
                                paramParse.logData = paramParse.logData[0] || paramParse.logData;
                                //写入日志
                                __WEBPACK_IMPORTED_MODULE_6__controls_log__["a" /* default */].writeLog(paramParse, 4, 1048576); //log文件最大size   测试2000  1mb  -->1048576

                                //send socket
                                __WEBPACK_IMPORTED_MODULE_1__service_socket__["a" /* default */].resolve(paramParse);

                                //如果类型是错误

                                if (!(paramParse.type == 'error')) {
                                    _context.next = 40;
                                    break;
                                }

                                _context.next = 19;
                                return __WEBPACK_IMPORTED_MODULE_8__controls_project__["a" /* default */].getProject(paramParse.pjKey);

                            case 19:
                                pjData = _context.sent;

                                if (!(pjData.code !== 200)) {
                                    _context.next = 24;
                                    break;
                                }

                                sendMail(JSON.stringify(pjData));
                                res.json(pjData);
                                return _context.abrupt('return');

                            case 24:

                                console.log(345345345, pjData);

                                pjParams = {
                                    project_id: "",
                                    name: "",
                                    url: "",
                                    script_url: "",
                                    env: "",
                                    message: "",
                                    error_info: {},
                                    stack_info: {},
                                    browser_name: "",
                                    browser_version: "",
                                    device_name: "",
                                    ip_info: {},
                                    server_info: {}
                                    //服务端错误
                                };
                                if (paramParse.server) {
                                    if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isPlainObject(paramParse.logData)) {
                                        pjParams = Object.assign(pjParams, {
                                            project_id: pjData.data._id,
                                            name: '',
                                            server_info: paramParse.server,
                                            url: paramParse.logData.path || '',
                                            env: paramParse.env,
                                            message: paramParse.logData.message || '',
                                            error_info: paramParse.logData,
                                            stack_info: {
                                                message: paramParse.logData.message,
                                                status: paramParse.logData.status,
                                                stack: paramParse.logData.stack
                                            }
                                        });
                                        if (paramParse.logData.stack) {
                                            pjParams.name = '服务错误';
                                        } else {
                                            pjParams.name = '请求出错';
                                        }
                                    } else {
                                        pjParams = {
                                            project_id: pjData.data._id,
                                            name: '请求出错',
                                            server_info: paramParse.server,
                                            url: paramParse.logData,
                                            env: paramParse.env,
                                            message: paramParse.logData,
                                            error_info: paramParse.logData,
                                            stack_info: {
                                                message: '',
                                                status: '',
                                                stack: ''
                                            }
                                        };
                                    }
                                } else {
                                    //前端
                                    if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isPlainObject(paramParse.logData)) {
                                        browser = __WEBPACK_IMPORTED_MODULE_11__utils__["a" /* default */].browserSniff(paramParse.logData.mobileInfo.msg);

                                        pjParams = Object.assign(pjParams, {
                                            project_id: pjData.data._id,
                                            name: paramParse.logData.errorMessage.msg || '',
                                            url: paramParse.url,
                                            script_url: paramParse.logData.scriptURI.msg,
                                            env: paramParse.env,
                                            message: paramParse.logData.errorMessage.msg,
                                            error_info: paramParse.logData,
                                            ip_info: paramParse.ipInfo,
                                            stack_info: {
                                                message: paramParse.logData.errorMessage.msg,
                                                stack: paramParse.logData.errorObj.msg
                                            },
                                            browser_name: browser.name,
                                            browser_version: browser.version,
                                            device_name: '' + (browser.win ? 'pc' : browser.ios ? 'ios' : 'android')
                                        });
                                        pjParams.name = pjParams.name.substring(0, pjParams.name.indexOf(':'));
                                        if (browser.wechat) pjParams.device_name = pjParams.device_name + '-wechat';
                                        if (browser.qq) pjParams.device_name = pjParams.device_name + '-qq';
                                        if (browser.weibo) pjParams.device_name = pjParams.device_name + '-weibo';
                                    } else {
                                        pjParams = {
                                            project_id: pjData.data._id,
                                            name: '页面报错',
                                            server_info: {},
                                            ip_info: {},
                                            url: paramParse.logData,
                                            script_url: '',
                                            env: paramParse.env,
                                            message: paramParse.logData,
                                            error_info: paramParse.logData,
                                            stack_info: {
                                                message: '',
                                                status: '',
                                                stack: ''
                                            },
                                            browser_name: '',
                                            browser_version: '',
                                            device_name: ''
                                        };
                                    }
                                }

                                _context.next = 29;
                                return __WEBPACK_IMPORTED_MODULE_9__controls_problem__["a" /* default */].addUpdateProblem(pjParams);

                            case 29:
                                insertRes = _context.sent;
                                problemSum = {
                                    num: 0,
                                    action: '4002'
                                };
                                _context.next = 33;
                                return __WEBPACK_IMPORTED_MODULE_9__controls_problem__["a" /* default */].problemSum();

                            case 33:
                                problemSum.num = _context.sent;

                                __WEBPACK_IMPORTED_MODULE_1__service_socket__["a" /* default */].resolve(problemSum);

                                if (!(insertRes.code != 200 || insertRes.msg != '')) {
                                    _context.next = 39;
                                    break;
                                }

                                sendMail(JSON.stringify(insertRes));
                                res.json(insertRes);
                                return _context.abrupt('return');

                            case 39:

                                //如果是生产环境 发送邮件提醒
                                if (paramParse.env == 'production') {
                                    logData = JSON.stringify(paramParse.logData);

                                    logData = logData.replace(/\\/g, ' ');
                                    html = '<b>\u9879\u76EE\u540D\u79F0:' + pjData.name + '</b><br/>\n                                <b>URL:' + paramParse.url + '</b><br/>\n                                <b>\u73AF\u5883:' + paramParse.env + '</b><br/>\n                                <b>\u7528\u6237IP\u4FE1\u606F:' + JSON.stringify(paramParse.ipInfo) + '</b><br/>\n                                <b>\u9519\u8BEF\u7C7B\u578B:' + paramParse.type + '</b><br/>\n                                <b>\u65E5\u5FD7\u65F6\u95F4:' + __WEBPACK_IMPORTED_MODULE_4_moment___default()().format() + '</b><br/>\n                                <b>\u9519\u8BEF\u6570\u636E:' + logData + '</b>';

                                    //过滤微信错误和位置sriptUrl错误

                                    isSendMail = true;

                                    if (paramParse.logData.errorMessage.msg.indexOf('WeixinJSBridge') > -1 || paramParse.logData.scriptURI.msg.indexOf('.js' > 0)) {
                                        isSendMail = false;
                                    }

                                    if (isSendMail) {
                                        sendMail(JSON.stringify(html));
                                    }
                                }

                            case 40:

                                // return
                                res.json({ code: '200', msg: '成功' });

                            case 41:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());

        // router.get('/getLogList', function(req, res) {
        //     let list = [];
        //     logCtrl.readFileList('./debugLog', (err, files) => {
        //         if (err) {
        //             res.json({ code: '10001', err: err, msg: '失败' })
        //         } else {
        //             list = files;
        //             res.json({ code: '200', data: list, msg: '成功' })
        //         }

        //     })

        // })

        // router.get('/getLogDetails', function(req, res) {
        //     let list = [];
        //     let param = Params.queryValidate(req)
        //     logCtrl.readFile('./debugLog/' + param.fileName, (err, logArr) => {
        //         if (err) {
        //             res.json({ code: '10001', err: '文件不存在！', msg: '失败' })
        //         } else {
        //             list = logArr;
        //             res.json({ code: '200', data: logArr, msg: '成功' })
        //         }

        //     })

        // })
    }
});

/**
 * 邮件发送
 * @param {*} html 
 */
function sendMail(html) {
    //mailCtrl.sendMail(emailConf.mailInfo.receivers, emailConf.mailInfo.subject, html).catch(e => { error = e })
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_readline__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_readline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_readline__);






/* harmony default export */ __webpack_exports__["a"] = ({
    writeLog: function writeLog(data, maxFileLen, maxSize) {
        var _this = this;

        var path = './debugLog/log1.log'; //1mb  1048576
        if (!__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync('./debugLog')) {
            __WEBPACK_IMPORTED_MODULE_1_fs___default.a.mkdirSync('./debugLog');
            this.writeFile(path, data);
        } else {
            this.readFileList('./debugLog', function (err, files) {
                if (err) {
                    console.log(err);
                } else {
                    var filesLen = files.length;
                    if (filesLen < maxFileLen && filesLen > 0) {
                        try {
                            if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync('./debugLog/' + files[filesLen - 1])) {
                                var fileStat = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.statSync('./debugLog/' + files[filesLen - 1]);
                                if (fileStat.size > maxSize) {
                                    path = './debugLog/log' + (filesLen + 1) + '.log';
                                } else {
                                    path = './debugLog/log' + filesLen + '.log';
                                }
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    } else if (filesLen >= maxFileLen) {
                        try {
                            var _fileStat = {};
                            if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync('./debugLog/log' + maxFileLen + '.log')) {
                                _fileStat = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.statSync('./debugLog/log' + maxFileLen + '.log');
                                if (_fileStat.size > maxSize) {
                                    __WEBPACK_IMPORTED_MODULE_1_fs___default.a.unlinkSync('./debugLog/log1.log');
                                    files.shift();
                                    files.map(function (val, index) {
                                        __WEBPACK_IMPORTED_MODULE_1_fs___default.a.renameSync('./debugLog/' + val, './debugLog/log' + (index + 1) + '.log');
                                    });
                                }
                                path = './debugLog/log' + maxFileLen + '.log';
                            }

                            console.log(path);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                    _this.writeFile(path, data);
                }
            });
        }
    },
    writeFile: function writeFile(path, data) {
        var logCon = '[' + __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() + '] [' + data.type + '] console - ' + JSON.stringify(data) + '\r\n';
        __WEBPACK_IMPORTED_MODULE_1_fs___default.a.appendFile(path, logCon, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('完成！');
            }
        });
    },
    readFileList: function readFileList(path, cb) {
        if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(path)) {
            __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readdir(path, function (err, files) {
                cb(err, files);
            });
        }
    },
    readFile: function readFile(path, cb) {
        var logArr = [],
            err = false;
        if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(path)) {
            var fileStream = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.createReadStream(path);
            var rl = __WEBPACK_IMPORTED_MODULE_4_readline___default.a.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
            rl.on('line', function (line) {
                logArr.push(line);
            }).on('close', function () {
                cb(err, logArr);
            });
        } else {
            err = true;
            cb(err, logArr);
        }
    }
});

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nodemailer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nodemailer__);




/* unused harmony default export */ var _unused_webpack_default_export = ({
    /**
     * 发送邮件
     * @param {*} recipient 
     * @param {*} subject 
     * @param {*} html 
     */
    sendMail: function sendMail(recipient, subject, html) {

        var transporter = __WEBPACK_IMPORTED_MODULE_2_nodemailer___default.a.createTransport({
            host: __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__["a" /* default */].host,
            port: __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__["a" /* default */].port,
            secure: true, // use TLS
            auth: {
                user: __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__["a" /* default */].account.user,
                pass: __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__["a" /* default */].account.pwd
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        var mailOptions = {
            from: __WEBPACK_IMPORTED_MODULE_1__conf_mailconf__["a" /* default */].account.user,
            to: recipient, // list of receivers 'bar@blurdybloop.com, baz@blurdybloop.com'
            subject: subject,
            html: html
        };

        return new Promise(function (resolve, reject) {
            // send mail 
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    reject(error);
                    return console.log('error: ', error);
                } else {
                    resolve(null);
                }

                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', __WEBPACK_IMPORTED_MODULE_2_nodemailer___default.a.getTestMessageUrl(info));
            });
        });
    }
});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/**
 * Created by user on 2018/1/10.
 */




var ProblemSchema = new __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema({
    project_id: String,
    name: String,
    url: String,
    script_url: String,
    env: String,
    message: String,
    browser_name: String,
    browser_version: String,
    device_name: String,
    error_info: Object,
    stack_info: Object,
    ip_info: Object,
    server_info: Object,
    create_time: String
}, { versionKey: false });

ProblemSchema.statics = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* default */], {});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('problem', ProblemSchema, 'problems'));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by user on 2018/1/10.
 */




var ProjectSchema = new __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.Schema({
    name: String,
    pj_key: String,
    language: { type: __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.Schema.ObjectId, ref: 'language' },
    icon: String,
    create_time: String,
    update_time: String
}, { versionKey: false });

ProjectSchema.statics = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.merge(__WEBPACK_IMPORTED_MODULE_1__base_model__["a" /* default */], {
    refFetch: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(cb) {
            var sortType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'create_time';
            var conditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt('return', this.find(conditions).populate([{
                                path: 'language'
                            }]).sort(_defineProperty({}, sortType, 'desc')).exec(cb));

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function refFetch(_x3) {
            return _ref.apply(this, arguments);
        }

        return refFetch;
    }()
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.model('project', ProjectSchema, 'projects'));

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/**
 * Created by user on 2018/1/10.
 */




var RecordSchema = new __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema({
    project_id: String,
    name: String,
    url: String,
    script_url: String,
    env: String,
    message: String,
    start_time: String,
    latest_time: String,
    number_occurence: Number,
    number_user: Number,
    users: Array,
    status: String
}, { versionKey: false });

RecordSchema.statics = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* default */], {
    fetchPage: function fetchPage(skip, limit, cb, sortType) {
        var conditions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        return this.find(conditions).skip(skip).limit(limit).sort(sortType).exec(cb);
    }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('record', RecordSchema, 'records'));

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/**
 * Created by user on 2018/1/10.
 */




var LanguageSchema = new __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema({
  name: String,
  icon: String
}, { versionKey: false });

LanguageSchema.statics = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* default */], {});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('language', LanguageSchema, 'languages'));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wraper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(7);
/**
 * Created by Cray on 2017/8/17.
 */




var wraper = function wraper(model, params) {
    if (model === __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].problem) {
        params = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(params, ['project_id', 'name', 'url', 'script_url', 'env', 'message', 'error_info', 'stack_info', 'browser_name', 'browser_version', 'device_name', 'ip_info', 'server_info', 'create_time']);
        return Object.assign({}, {
            project_id: "",
            name: "",
            url: "",
            script_url: "",
            env: "",
            message: "",
            error_info: {},
            stack_info: {},
            browser_name: "",
            browser_version: "",
            device_name: "",
            ip_info: {},
            server_info: {},
            create_time: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].now
        }, params);
    }

    if (model === __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].project) {
        params = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(params, ['name', 'pj_key', 'language', 'icon', 'update_time', 'create_time']);
        return Object.assign({}, {
            name: "",
            pj_key: "",
            language: "",
            icon: "",
            update_time: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].now,
            create_time: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].now
        }, params);
    }

    if (model === __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].record) {
        params = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(params, ['project_id', 'name', 'url', 'message', 'script_url', 'env', 'start_time', 'latest_time', 'number_occurence', 'number_user', 'status']);
        return Object.assign({}, {
            project_id: '',
            name: '',
            url: '',
            message: '',
            script_url: '',
            env: '',
            users: [],
            start_time: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].now,
            latest_time: __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].now,
            number_occurence: 1,
            number_user: 1,
            status: 'open'
        }, params);
    }

    if (model === __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].user) {
        params = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(params, ['username', 'nickname', 'headimgurl', 'authority', 'reg_time', 'login_time', 'update_time', 'star', 'weixin', 'qq']);
        return Object.assign({}, {
            username: "",
            nickname: "",
            headimgurl: "",
            authority: 0,
            reg_time: "",
            login_time: "",
            update_time: "",
            star: [],
            weixin: {},
            qq: {}
        }, params);
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_problem__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_socket__ = __webpack_require__(15);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by user on 2018/2/5.
 */






/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        var _this = this;

        /*
         * 根据id得到problem
         * @param {String} projectid 项目id
         * @param {String} url
         * @param {String} script_url
         * @param {String} env
         * @param {String} skip 页数
         * @param {String} limit
         * */
        router.get('/problemList', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var resData, _ref2, skip, limit, projectid, url, script_url, env;

                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                resData = null, _ref2 = __WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].queryValidate(req) || {}, skip = _ref2.skip, limit = _ref2.limit, projectid = _ref2.projectid, url = _ref2.url, script_url = _ref2.script_url, env = _ref2.env;

                                if (!(parseInt(skip) >= 0 && parseInt(limit) >= 0 && __WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].isObejctId(projectid) && url && env)) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_problem__["a" /* default */].problemList({ project_id: projectid, url: url, script_url: script_url, env: env }, skip, limit);

                            case 4:
                                resData = _context.sent;
                                _context.next = 8;
                                break;

                            case 7:
                                resData = __WEBPACK_IMPORTED_MODULE_1__utils_serror__["a" /* default */].paramsError("参数错误");

                            case 8:
                                console.log(resData);
                                res.json(resData);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());

        /*
         * 根据id得到problem
         * @param {String} id 问题id
         * */
        router.get('/problem', function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
                var resData, _ParamsUtils$queryVal, id;

                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                resData = null, _ParamsUtils$queryVal = __WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].queryValidate(req), id = _ParamsUtils$queryVal.id;

                                if (__WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].isObejctId(id)) {
                                    _context2.next = 5;
                                    break;
                                }

                                resData = __WEBPACK_IMPORTED_MODULE_1__utils_serror__["a" /* default */].paramsError("id参数错误");
                                _context2.next = 8;
                                break;

                            case 5:
                                _context2.next = 7;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_problem__["a" /* default */].problem(id);

                            case 7:
                                resData = _context2.sent;

                            case 8:

                                res.json(resData);

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
            };
        }());

        /*
         * 增加problem
         * @param 必填 {String} project_id 项目id
         * @param 必填 {String} url
         * @param 必填 {String} error
         * */
        router.post('/addProblem', function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
                var params, resData;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                params = __WEBPACK_IMPORTED_MODULE_2__utils_params__["a" /* default */].bodyValidate(req);
                                resData = void 0;

                                if (!(!params.project_id || !params.url || !params.error_info || !params.env)) {
                                    _context3.next = 6;
                                    break;
                                }

                                resData = __WEBPACK_IMPORTED_MODULE_1__utils_serror__["a" /* default */].paramsError('\u53C2\u6570\u9519\u8BEF id is ' + params.project_id + ' url is ' + params.url + '\n                errorinfo is ' + params.error_info + ' env is ' + params.env);
                                _context3.next = 19;
                                break;

                            case 6:
                                _context3.prev = 6;

                                params.error_info = JSON.parse(params.error_info);
                                if (params.stack_info) {
                                    params.stack_info = JSON.parse(params.stack_info);
                                }

                                if (params.ip_info) {
                                    params.ip_info = JSON.parse(params.ip_info);
                                }

                                if (params.server) {
                                    params.server = JSON.parse(params.server);
                                }

                                _context3.next = 13;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_problem__["a" /* default */].addUpdateProblem(params);

                            case 13:
                                resData = _context3.sent;
                                _context3.next = 19;
                                break;

                            case 16:
                                _context3.prev = 16;
                                _context3.t0 = _context3['catch'](6);

                                resData = {
                                    code: 406,
                                    data: null,
                                    msg: '参数转JSON失败'
                                };

                            case 19:
                                res.json(resData);

                            case 20:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[6, 16]]);
            }));

            return function (_x5, _x6) {
                return _ref4.apply(this, arguments);
            };
        }());

        /**
         * 获取累计错误数量
         **/
        router.get('/problemSum', function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_problem__["a" /* default */].problemSum().catch(function (e) {
                                    data = __WEBPACK_IMPORTED_MODULE_1__utils_serror__["a" /* default */].findError();
                                });

                            case 2:
                                data = _context4.sent;

                                res.json(data);

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this);
            }));

            return function (_x7, _x8) {
                return _ref5.apply(this, arguments);
            };
        }());
    }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_project__ = __webpack_require__(19);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        var _this = this;

        /**
         * 获得项目列表
         */
        router.get('/getProjectList', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_project__["a" /* default */].getProjectList();

                            case 2:
                                data = _context.sent;

                                res.json(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        /**
         * 更新创建项目
         */
        router.post('/updateAddProject', function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
                var param, data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                param = __WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].bodyValidate(req);
                                data = null;

                                if (!(!param.name || !param.language || !__WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].isObejctId(param.language))) {
                                    _context2.next = 6;
                                    break;
                                }

                                data = __WEBPACK_IMPORTED_MODULE_2__utils_serror__["a" /* default */].paramsError('参数错误，项目 name & language is empty ');
                                _context2.next = 19;
                                break;

                            case 6:
                                if (!param.id) {
                                    _context2.next = 16;
                                    break;
                                }

                                if (!__WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].isObejctId(param.id)) {
                                    _context2.next = 13;
                                    break;
                                }

                                _context2.next = 10;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_project__["a" /* default */].updateAddProject(param.name, param.language, param.id);

                            case 10:
                                data = _context2.sent;
                                _context2.next = 14;
                                break;

                            case 13:
                                data = __WEBPACK_IMPORTED_MODULE_2__utils_serror__["a" /* default */].paramsError(res, 'id 不合法');

                            case 14:
                                _context2.next = 19;
                                break;

                            case 16:
                                _context2.next = 18;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_project__["a" /* default */].updateAddProject(param.name, param.language);

                            case 18:
                                data = _context2.sent;

                            case 19:

                                res.json(data);

                            case 20:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }());
    }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_record__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        var _this = this;

        /**
         * 获得错误列表
         */
        router.get('/getRecordList', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var data, conditions, unitTime, markTime, minTime, currTime, _Params$queryValidate, skip, limit, sortType, params, filterTime;

                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = null, conditions = {}, unitTime = 0, markTime = 0, minTime = 0, currTime = Date.now(), _Params$queryValidate = __WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].queryValidate(req), skip = _Params$queryValidate.skip, limit = _Params$queryValidate.limit, sortType = _Params$queryValidate.sortType, params = _Params$queryValidate.params, filterTime = _Params$queryValidate.filterTime;

                                skip = parseInt(skip);
                                limit = parseInt(limit);
                                params = JSON.parse(params);
                                sortType = JSON.parse(sortType);
                                filterTime = JSON.parse(filterTime);

                                if (params['project_id'] && __WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].isObejctId(params['project_id'])) {
                                    conditions['project_id'] = params['project_id'];
                                }
                                if (params['env']) {
                                    conditions['env'] = params['env'];
                                }
                                if (params['status']) {
                                    conditions['status'] = params['status'];
                                }

                                if (filterTime.format == 'm') {
                                    unitTime = 60 * 1000;
                                } else if (filterTime.format == 'h') {
                                    unitTime = 60 * 60 * 1000;
                                } else if (filterTime.format == 'd') {
                                    unitTime = 24 * 60 * 60 * 1000;
                                } else if (filterTime.format == 'month') {
                                    unitTime = 30 * 24 * 60 * 60 * 1000;
                                }

                                // markTime = currTime - unitTime
                                markTime = currTime;
                                minTime = currTime - unitTime * filterTime.grid;

                                conditions['start_time'] = { $gte: minTime, $lt: markTime };

                                if (!(skip >= 0 && limit >= 0 && !__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isEmpty(sortType) && conditions['start_time'].$gte > 0 && conditions['start_time'].$lt > 0 && params['project_id'])) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.next = 16;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_record__["a" /* default */].getRecordList(skip, limit, sortType, conditions);

                            case 16:
                                data = _context.sent;
                                _context.next = 20;
                                break;

                            case 19:
                                data = __WEBPACK_IMPORTED_MODULE_2__utils_serror__["a" /* default */].paramsError("查询参数错误");

                            case 20:

                                res.json(data);

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_entity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_base64__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







/* harmony default export */ __webpack_exports__["a"] = ({
    getRecordList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(skip, limit) {
            var sortType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { start_time: -1 };
            var conditions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var res, doc;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            res = null;
                            _context.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].fetchPage(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].record, skip, limit, sortType, conditions).catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'query record list error'
                                };
                            });

                        case 3:
                            doc = _context.sent;


                            __WEBPACK_IMPORTED_MODULE_5_hefan_debug_log_s___default.a.debug('获得错误列表数据', doc);

                            // 解析数据
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: doc,
                                    msg: ''
                                };
                            }

                            //返回数据
                            return _context.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getRecordList(_x3, _x4) {
            return _ref.apply(this, arguments);
        }

        return getRecordList;
    }()
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_language__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by user on 2018/2/5.
 */





/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        var _this = this;

        /**
        * 获得语言列表
        */
        router.get('/getLanguageList', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_language__["a" /* default */].getLanguageList();

                            case 2:
                                data = _context.sent;

                                res.json(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
    }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_entity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["a"] = ({
    getLanguageList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var res, doc;
            return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            res = null;
                            _context.next = 3;
                            return __WEBPACK_IMPORTED_MODULE_2__service_entity__["a" /* default */].fetch(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].language, "create_time").catch(function (e) {
                                res = {
                                    code: 500,
                                    data: null,
                                    msg: 'query language list error'
                                };
                            });

                        case 3:
                            doc = _context.sent;


                            // 解析数据
                            if (!res) {
                                res = {
                                    code: 200,
                                    data: doc,
                                    msg: ''
                                };
                            }

                            //返回数据
                            return _context.abrupt('return', new Promise(function (resolve) {
                                resolve(res);
                            }));

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getLanguageList() {
            return _ref.apply(this, arguments);
        }

        return getLanguageList;
    }()
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_params__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_serror__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_redis__ = __webpack_require__(21);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["a"] = ({
    route: function route(router) {
        var _this = this;

        /**
         * 获得项目列表
         */
        router.get('/state/sum', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var param, data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                param = __WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].queryValidate(req);
                                data = null;

                                if (param.project_id) {
                                    _context.next = 6;
                                    break;
                                }

                                data = __WEBPACK_IMPORTED_MODULE_2__utils_serror__["a" /* default */].paramsError('params project_id is empty');
                                _context.next = 12;
                                break;

                            case 6:
                                param.env == param.env || '';
                                param.grid == param.grid || 20;
                                param.format == param.format || 'd';
                                _context.next = 11;
                                return __WEBPACK_IMPORTED_MODULE_3__controls_redis__["a" /* default */].getError(param.project_id, param.env, param.grid, param.format).catch(function (e) {
                                    data = {
                                        code: 406,
                                        data: null,
                                        msg: 'this project_id ' + param.project_id + ' is invalid'
                                    };
                                });

                            case 11:
                                data = _context.sent;

                            case 12:

                                res.json(data);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());

        /**
         * 发送邮件
         */
        router.get('/sendMail', function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
                var param, recipient, subject, html, error, msg;
                return __WEBPACK_IMPORTED_MODULE_0__Users_lichunwei_Public_workDevelop_hefantv_trunk_hefantv_debug_s_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                param = __WEBPACK_IMPORTED_MODULE_1__utils_params__["a" /* default */].queryValidate(req);

                                if (!param) {
                                    _context2.next = 11;
                                    break;
                                }

                                recipient = param.recipient, subject = param.subject, html = param.html;
                                error = null;
                                _context2.next = 6;
                                return logCtrl.sendMail(recipient, subject, html).catch(function (e) {
                                    error = e;
                                });

                            case 6:
                                msg = 'send success';

                                if (error) {
                                    msg = error;
                                }
                                // respone result
                                res.json({
                                    msg: msg
                                });
                                _context2.next = 12;
                                break;

                            case 11:
                                __WEBPACK_IMPORTED_MODULE_2__utils_serror__["a" /* default */].queryError(res, 'query error', 405);

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }());
    }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    nuxt: {
        host: "127.0.0.1",
        port: 9012
    }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(18);
var webpack = __webpack_require__(55);
module.exports = {
    debug: true,
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        // script: [
        //     { src: '/js/jquery-3.2.1.min.js' }, { src: '/js/jsonPaser.js' },

        // ]
    },
    /*
     ** Global CSS
     */
    css: [{ src: '~assets/css/debug.scss', lang: 'scss' }, // 指定 scss 而非 sass
    { src: '~assets/css/main.scss', lang: 'scss' // 指定 scss 而非 sass
    }],
    /**
     * 环境变量
     */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost.hefantv.com'
    },
    router: {
        middleware: ['visits', 'user-agent', 'get-projects']
    },
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        plugins: [new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }), new webpack.DefinePlugin({
            'process.VERSION': __webpack_require__(56).version,
            __DEV: true
        })],
        /*
         ** Run ESLINT on save
         */
        extend: function extend(config, ctx) {
            if (ctx.isClient) {
                // config.module.rules.push({
                //   enforce: 'pre',
                //   test: /\.(js|vue)$/,
                //   loader: 'eslint-loader',
                //   exclude: /(node_modules)/
                // })
                config.module.rules.push({ test: /iview.src.*?js$/, loader: 'babel-loader' });
                config.watch = true;
            }

            // 添加 alias 配置
            Object.assign(config.resolve.alias, {
                '~utils': path.resolve(__dirname, 'utils'),
                '~api': path.resolve(__dirname, 'api'),
                '~constant': path.resolve(__dirname, 'constant'),
                '~components': path.resolve(__dirname, 'components'),
                '~plugins': path.resolve(__dirname, 'plugins')
            });
        }
    },
    plugins: [{ src: '~plugins/iview', ssr: true }, { src: '~plugins/infinite-scroll', ssr: false }, { src: '~plugins/charts', ssr: true }],
    loading: '~/components/loading.vue',
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 1000
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"name":"hefan-debugs","version":"1.0.0","description":"debugs project","author":"李春伟 <lichunwei@hefantv.com>","private":true,"scripts":{"server":"backpack start","nuxtBuild":"nuxt build","dev":"backpack dev","build":"backpack build","pro":"backpack pro","precommit":"npm run lint","lint":"eslint --ext .js,.vue --ignore-path .gitignore ."},"config":{"nuxt":{"host":"127.0.0.1","port":"9012"}},"dependencies":{"axios":"^0.16.2","babel-polyfill":"^6.26.0","body-parser":"^1.18.2","cookie-parser":"^1.4.3","cross-env":"^5.0.1","express":"^4.15.3","express-session":"^1.15.6","hefan-debug-log-s":"^0.0.10","hefantv-backpack":"^0.1.6","ioredis":"^3.2.2","jquery":"^3.3.1","jsoneditor":"^5.13.1","moment":"^2.20.1","mongoose":"^5.0.3","nuxt":"^1.0.0-rc11","source-map-support":"^0.4.15","vue-echarts":"^3.0.1"},"devDependencies":{"iview":"^2.7.3","lodash":"^4.17.4","node-sass":"^4.7.2","nodemailer":"^4.4.1","opn":"^4.0.2","sass-loader":"^6.0.6","vue-infinite-scroll":"^2.0.2","ws":"^2.2.3"}}

/***/ })
/******/ ]);
//# sourceMappingURL=main.map