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
        this.push('fourchette');
        this.push('cuillère');
        this.push('couteau');
        this.push(null);
    }
}

let firstCertifReadable = new CertifReadable();

firstCertifReadable.on('data', (data) => {
    console.log('read:', data.toString());
})

console.log('c\'est fini');
