import _ from 'lodash'
import fs from 'fs';
import path from 'path';
import moment from 'moment'
import readline from "readline";

export default {
    
    writeLog(data, maxFileLen, maxSize) {
        let path = './debugLog/log1.log'; //1mb  1048576
        if (!fs.existsSync('./debugLog')) {
            fs.mkdirSync('./debugLog')
            this.writeFile(path, data)
        } else {
            this.readFileList('./debugLog', (err, files) => {
                if (err) {
                    console.log(err)
                } else {
                    let filesLen = files.length;
                    if (filesLen < maxFileLen && filesLen > 0) {
                        try {
                            if (fs.existsSync('./debugLog/' + files[filesLen - 1])) {
                                let fileStat = fs.statSync('./debugLog/' + files[filesLen - 1])
                                if (fileStat.size > maxSize) {
                                    path = `./debugLog/log${filesLen+1}.log`
                                } else {
                                    path = `./debugLog/log${filesLen}.log`
                                }
                            }
                        } catch (err) {
                            console.log(err)
                        }

                    } else if (filesLen >= maxFileLen) {
                        try {
                            let fileStat = {}
                            if (fs.existsSync(`./debugLog/log${maxFileLen}.log`)) {
                                fileStat = fs.statSync(`./debugLog/log${maxFileLen}.log`)
                                if (fileStat.size > maxSize) {
                                    fs.unlinkSync('./debugLog/log1.log')
                                    files.shift();
                                    files.map((val, index) => {
                                        fs.renameSync(`./debugLog/${val}`, `./debugLog/log${index+1}.log`)
                                    })

                                }
                                path = `./debugLog/log${maxFileLen}.log`
                            }

                            console.log(path)
                        } catch (err) {
                            console.log(err)
                        }

                    }
                    this.writeFile(path, data)
                }

            })
        }
    },
    writeFile(path, data) {
        let logCon = `[${moment().format()}] [${data.type}] console - ${JSON.stringify(data)}\r\n`
        fs.appendFile(path, logCon, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('完成！')
            }

        });
    },
    readFileList(path, cb) {
        if (fs.existsSync(path)) {
            fs.readdir(path, (err, files) => {
                cb(err, files)
            })
        }

    },
    readFile(path, cb) {
        let logArr = [],
            err = false;
        if (fs.existsSync(path)) {
            let fileStream = fs.createReadStream(path);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                logArr.push(line)
            }).on('close', () => {
                cb(err, logArr)
            });
        } else {
            err = true;
            cb(err, logArr)
        }


    }
}