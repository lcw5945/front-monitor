
export default {
    db: {
        //mongodb 配置
        DB_TEST: {
            url: 'mongodb://admin:hefantv.123@47.93.89.11:28017/debug-test',
            options: {
            }
        },
        DB_PRO: {
            url: 'mongodb://admin:hefantv.123@47.93.89.11:28017/debug',
            options: {
            }
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
};

