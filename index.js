const qrcode = require('qrcode-terminal');

qrcode.generate('WIFI:T:WPA;S:SOCIALDESK - 9th Floor;P:SocialD3$K09F',{small:true});

qrcode.generate(`BEGIN:VCARD
VERSION:4.0
EMAIL;type=WORK:Ardy.Raagas@siteminder.com
EMAIL;type=HOME:raagas.rdjames@gmail.com
TEL;type=WORK:09512381245
N:Ardy James Raagas
END:VCARD`,{small:true});
