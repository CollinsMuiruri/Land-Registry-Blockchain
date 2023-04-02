const IPFS = require('ipfs-api')
const projectId = '2N1WHjtMIQsSAz94iD5TtAmjNGf';
const projectSecret = 'dbae86ad15108d8f62696cf4f6dbb3ae';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', apiPath: '/api/v0', headers: { authorization: auth, }})

export default ipfs


// import { create } from 'ipfs-http-client'

// const projectId = '2N1WHjtMIQsSAz94iD5TtAmjNGf';
// const projectSecret = 'dbae86ad15108d8f62696cf4f6dbb3ae';
// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// const ipfs = create({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   apiPath: '/api/v0',
//   headers: {
//     authorization: auth,
//   }
// })

// export default ipfs
