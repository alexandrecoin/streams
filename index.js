const { createReadStream } = require('node:fs');
const { stderr } = require('node:process');
const { Readable, Transform } = require('node:stream');

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

const toUpperCase = new Transform({
  transform(chunk, _, cb) {
    let array = chunk.toString().split(' ');
    array.forEach((word) => {
      this.push(word.toUpperCase() + '\n');
    });
    cb()
    ;
  },
});

let firstCertifReadable = new CertifReadable();

const goReadCertif = () =>
  new Promise((resolve, reject) => {
    createReadStream('./scribe.txt', { encoding: 'utf8' })
      .on('end', () => {
        resolve('OK');
      })
      .pipe(toUpperCase)
      .pipe(process.stderr);
  });

goReadCertif().then((test) => console.log('test', test));
