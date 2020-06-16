import * as CryptoJS from 'crypto-js';

var CryptoJS = require("crypto-js");

var ciphertext = CryptoJS.AES.encrypt(body.pageDetails.pagePassword, 'pageslammerv3');
                        insertData.page_password = ciphertext.toString();



                        let newPass = CryptoJS.AES.decrypt(pass, 'pageslammerv3');
    this.pageControls.privatePanel.password = newPass.toString(CryptoJS.enc.Utf8);