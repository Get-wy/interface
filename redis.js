import conf from './config';
const redis = require('redis');
const clint = redis.createClient(conf.redis.port, conf.redis.address);

// clint.set('hello', 'this is value')
// clint.get('hello', function(err,v) {
//   console.log('redis is', v)
// })
