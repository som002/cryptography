// person A
const p1 = 53;
const p2 = 59;

const n = p1 * p2;
const phi = (p1 - 1) * (p2 - 1);
console.log(n, phi);

/* formula: 
m^ed mod n = m^c*phi+1 mod n
*/
const e = 3; // encryption key
const k = 2; // constant
const d = (k * phi + 1) / e; // decryption key
console.log(d);

// to send as public key
const lock = {
  num: n,
  ekey: e,
};

//-------------------
// person B

//sending messages

const message = 'HI Hello ray';

const charToAscii = function (str) {
  let msg = [];
  Array.from(str).forEach(function (e) {
    msg.push(e.charCodeAt());
  });
  console.log(msg.join('*'));
  return msg.join('*');
};
const msg_send = charToAscii(message);

console.log(msg_send);

// locking

const locking = function (msg) {
  const crypt = [];
  msg_send.split('*').forEach(function (m) {
    crypt.push(m ** lock.ekey % lock.num);
  });
  return crypt.join('*');
};
const cryptic_msg = locking(msg_send);
console.log('cryptic_msg: ', cryptic_msg);
//----------------------------
// sending back to A with locking

// receiving msg by A and decrypting the msg

/* formula:

*/
const unlocking = function (msg) {
  let decrypt = [];
  let real_message = [];
  msg.split('*').forEach(function (c) {
    decrypt.push(Number(BigInt(c) ** BigInt(d) % BigInt(n)));
  });
  decrypt.forEach(function (m) {
    real_message.push(String.fromCharCode(m));
  });
  return real_message.join('');
};

const realMessage = unlocking(cryptic_msg);
console.log(realMessage);
