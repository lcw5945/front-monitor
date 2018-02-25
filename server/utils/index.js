import _ from 'lodash'
import crypto from 'crypto'


export default {
    /**
     * 用户名密码加密
     * @param str
     * @param key
     * @returns {*}
     */
    md5(str, key) {
        let decipher = crypto.createHash('md5', key)
        if (key) {
            return decipher.update(str).digest()
        }
        return decipher.update(str).digest('hex')
    },

    get now(){
        return `${Date.now()}`
    },

    browserSniff(navigator) {
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
            win: navigator.platform.indexOf("Win") == 0,
            wechat: /micromessenger/.test(nAgt.toLowerCase()),
            qq: /qq/.test(nAgt.toLowerCase()),
            weibo: /weibo/.test(nAgt.toLowerCase()),
            ios: /(iPad|iPhone|iPod)/g.test(nAgt),
            android: /(Android)/g.test(nAgt),
            mobile: (/AppleWebKit.*Mobile.*/).test(nAgt)
        };
    }
}