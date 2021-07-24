const { log } = require('console');
const https = require('https');

function simplePromise(){
  var promise = new Promise(function (resolve, reject) {
    resolve({ data: { message: 'success value'}})
  })

  return promise
    .then((value) => {
      return value.data.message
    })
}

 async function simpleAsyncAwait() {
  var promise = new Promise((resolve, reject) => {
    resolve({data: { message: 'success value'}})
  })
  
  const result = await promise 
  return result.data.message
}

async function notSoSimpleAsyncAwait() {

  const fetch = (url) => 
    new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (rd) => data = data + rd);
        res.on('end', () => resolve(data));
        res.on('error', reject);
      });
    });
  
  const result = await fetch('https://www.boolean.cl/')

  return result.length
}

module.exports = {
  simplePromise,
  simpleAsyncAwait,
  notSoSimpleAsyncAwait
}
