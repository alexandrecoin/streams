const { createReadStream } = require('node:fs');
const { Readable } = require('node:stream');

/*createReadStream('./scribe.txt', { encoding: 'utf8' })
   .on('data', (data) => {
       //console.log("first : ",data.length);
   })
   .on('data', (data) => {
       //console.log("second : ", data.length);
   })
  .on('end', () => {
    //console.log('\nlecture finie');
  });*/

class CertifReadable extends Readable {
    data = '';
    _read() {
        // let i = 0
        // while (i < 10000) {
            this.push('fourchette');
            this.push('cuillère');
            this.push('couteau');
            this.push('fourchette');
            this.push('cuillère');
            this.push('couteau');
            // i++;
        // }

        this.push(null);
    }
}

let firstCertifReadable = new CertifReadable();

const goReadCertif = () => new Promise((resolve, reject) => {
    firstCertifReadable.on('data', (data) => {
        console.log('read:', data.toString());
    }).on('end', () => {
        resolve('OK')
    })
})

goReadCertif().then(test => console.log('test', test))