/**
 * Created by Cray on 2016/12/6.
 */

import _ from 'lodash'

class Utils {

    static isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }

    static toUrl(url) {
        let a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');

        let event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        a.dispatchEvent(event);
    }

    static href(url) {
        window.location.href = url;
    }

    static isImg(path){
        let reg =  /.+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/;
        return reg.test(path) ;
    }

    static each(obj, callback) {
        var value,
            i = 0,
            length = obj.length,
            isArray = Object.prototype.toString.apply(obj) === '[object Array]';
        if (isArray) {
            for (; i < length; i++) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        }
        return obj;
    }

    static equals(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    }

    static  merge(original, extended) {
        for (let key in extended) {
            let ext = extended[key];
            if (typeof(ext) != 'object' || ext instanceof HTMLElement || ext === null) {
                original[key] = ext;
            }
            else {
                if (!original[key] || typeof(original[key]) != 'object') {
                    original[key] = (Array.isArray(ext)) ? [] : {};
                }
                this.merge(original[key], ext);
            }
        }
        return original;
    }

    static copy(object) {
        if (!object || typeof(object) != 'object' || object instanceof HTMLElement) {
            return object;
        }
        else if (Array.isArray(object)) {
            let array = [];
            for (let i = 0, l = object.length; i < l; i++) {
                array[i] = this.copy(object[i]);
            }
            return array;
        }
        else {
            let obj = {};
            for (let j in object) {
                obj[j] = this.copy(object[j]);
            }
            return obj;
        }
    }


    static extend(target) {
        var slice = Array.prototype.slice;
        slice.call(arguments, 1).forEach(function (source) {
            for (let key in source) {
                if (source[key] !== undefined) {
                    target[key] = source[key];
                }
            }
        });
        return target;
    }

    static keys(o) {
        let a = [];
        for (let k in o) if (o[k]) {
            a.push(k);
        }
        return a;
    }

    static by(name, minor) { //
        return function (o, p) {
            var a, b;
            if (o && p && typeof o === 'object' && typeof p === 'object') {
                a = o[name];
                b = p[name];
                if (a === b) {
                    return typeof minor === 'function' ? minor(o, p) : 0;
                }
                if (typeof a === typeof b) {
                    return a < b ? -1 : 1;
                }
                return typeof a < typeof b ? -1 : 1;
            } else {
                throw{
                    name: 'Error',
                    message: 'Expected an object when sorting by ' + name
                };
            }
        };
    }

    static throttle(func, wait) {
        var ctx, args, rtn, timeoutID;
        var last = 0;

        return function throttled() {
            ctx = this;
            args = arguments;
            var delta = new Date() - last;
            if (!timeoutID) {
                if (delta >= wait) call();
                else timeoutID = setTimeout(call, wait - delta);
            }
            return rtn
        };
        function call() {
            timeoutID = 0;
            last = +new Date();
            rtn = func.apply(ctx, args);
            ctx = null;
            args = null;
        }
    }

    static browserSniff() {
        var nAgt = navigator.userAgent,
            name = navigator.appName,
            fullVersion = '' + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix;

        if ((navigator.appVersion.indexOf('Windows NT') !== -1) && (navigator.appVersion.indexOf('rv:11') !== -1)) {
            name = 'IE';
            fullVersion = '11;';
        }
        else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
            name = 'IE';
            fullVersion = nAgt.substring(verOffset + 5);
        } else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
            name = 'Edge';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
            name = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
            name = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
        else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
            name = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
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
            wechat: /micromessenger/.test(nAgt.toLowerCase()),
            ios: /(iPad|iPhone|iPod)/g.test(nAgt),
            android: /(Android)/g.test(nAgt),
            mobile: (/AppleWebKit.*Mobile.*/).test(nAgt)
        };
    }

    static parseUrlToData(url) {
        "use strict";
        var result = null;
        var temp = url.split("?");
        if (temp.length > 1) {
            result = {};
            var a = temp[1].split("&");
            this.each(a, function (index, str) {
                var b = str.split("=");
                result[b[0]] = b[1];
            });
        }
        return result;
    }

    static getPreDate(pre) {
        var c = new Date();
        c.setDate(c.getDate() - pre);
        return this.formatDate(c);
    }

    static formatDate(d,flag="-") {
        return d.getFullYear() + flag + this.getMonth1(d.getMonth()) + flag + d.getDate();
    }

    static format(dateStr,fmt){

        var d = new Date(parseInt(dateStr));

        var o = {
            "M+": d.getMonth() + 1, //月份
            "d+": d.getDate(), //日
            "h+": d.getHours(), //小时
            "m+": d.getMinutes(), //分
            "s+": d.getSeconds(), //秒
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度
            "S": d.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    /**
     * 编辑最后编辑的时间，转化为...时间前
     * @oldTime 时间戳
     **/
    static getPostTime(oldTime) {
        oldTime = parseInt(oldTime)
        let newTime = new Date().getTime() - oldTime;

        let timeArr = [],
            timeStrArr = ['年前', '月前', '天前', '小时前', '分钟前'],
            returnTime = '';


        timeArr.push(Math.floor(newTime / 1000 / 60 / 60 / 24 / 365));
        timeArr.push(Math.floor(newTime / 1000 / 60 / 60 / 24 / 30));
        timeArr.push(Math.floor(newTime / 1000 / 60 / 60 / 24));
        timeArr.push(Math.floor(newTime / 1000 / 60 / 60));
        timeArr.push(Math.floor(newTime / 1000 / 60));
        timeArr.find((item, index) => {
            if (item > 0) return returnTime = item + timeStrArr[index];
        })

        return returnTime;
    }



    static getMonth1(m) {
        m++;
        if (m < 10)
            return "0" + m.toString();
        return m.toString();
    }

    static adaptDefaultSize(designWidth, rem2px) {
        var d = window.document.createElement('div');
        d.style.width = '1rem';
        d.style.display = "none";
        var head = window.document.getElementsByTagName('head')[0];
        head.appendChild(d);
        var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
        d.remove();
        document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
        var st = document.createElement('style');
        var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
        var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
        st.innerHTML = portrait + landscape;
        head.appendChild(st);
        return defaultFontSize
    }
    /*
    * 判断图片是否为阿里云地址
    * */
    static compressImg(imgPath,width){
        var reg=/img.*\.hefantv\.com/;
        if(reg.test(imgPath)){
            return imgPath + "@"+width+"w";
        }
        return imgPath;
    }

    static getRootPath_web() {
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    }

    static getDomain() {
        var protocol = window.document.location.protocol;
        var hostname = window.document.location.hostname;
        return protocol + "//" + hostname;
    }

    static setDocumentTitle(title) {
        setTimeout(function () {
            document.title = title;
            var iframe = document.createElement('iframe');
            iframe.src = '/favicon.ico';
            iframe.style.visibility = 'hidden';
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.onload = function () {
                setTimeout(function () {
                    document.body.removeChild(iframe);
                }, 0);
            };
            document.body.appendChild(iframe);
        }, 0);
    }

    /*跳转到应用宝*/
    static goAppDownload(){
        window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.starunion.hefantv";
    }

    /**
     * 解析canvas所需时间
     **/
    static canvasTimeStr(time){
        let str = _.replace(time, 'T', ' ');
        let removePosition = str.lastIndexOf('.')
        return str.substr(0, removePosition)
    }

}

export default Utils;