import _ from 'lodash'
import emailConf from '../conf/mailconf'
import nodemailer from 'nodemailer'

export default {
    /**
     * 发送邮件
     * @param {*} recipient 
     * @param {*} subject 
     * @param {*} html 
     */
    sendMail(recipient, subject, html) {

        let transporter = nodemailer.createTransport({
            host: emailConf.host,
            port: emailConf.port,
            secure: true, // use TLS
            auth: {
                user: emailConf.account.user,
                pass: emailConf.account.pwd
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        });


        let mailOptions = {
            from: emailConf.account.user,
            to: recipient, // list of receivers 'bar@blurdybloop.com, baz@blurdybloop.com'
            subject: subject,
            html: html
        };

        return new Promise((resolve, reject) => {
            // send mail 
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error)
                    return console.log('error: ', error);
                } else {
                    resolve(null)
                }

                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        })

    }
}