const private_key1 = 15n;
const private_key2 = 13n;

const generator = 3n;
// const pub_num = BigInt(Math.random() * 10 ** 256); // random number 256 digit;
const pub_num = 17n;
const bits = 64;
let num = BigInt(Math.random() * 10 ** bits); // fixed bits generator

let str = num.toString();
let padded = BigInt(str.slice(2).padStart(str.length, 5)); // to handel random sequence to gen fix first 2 char including decimal itself
// let pub_num = padded;

console.log(pub_num);
console.log(pub_num.toString().length);

// encryption algorithm
const encrypt1 = generator ** private_key1 % pub_num;
const encrypt2 = generator ** private_key2 % pub_num;

console.log("public 1:", encrypt1); // hidden private key
console.log("public 1:", encrypt2); // hidden private key

//decryption algorithm
const decrypt1 = encrypt1 ** private_key2 % pub_num;
const decrypt2 = encrypt2 ** private_key1 % pub_num;
/*
formula :  
e1 = g^p1 mod num;
e2 = g^p2 mod num;
d1 = e1^p2 mod num;
    => ((g^p1)^p2) mod num;
d2 = e2^p1 mod num;
    => ((g^p2)^p1) mod num;

decrypt = ((((3**15) % 17)**13) % 17) = 10;
*/
// console.log(Math.random() * 10**256);
console.log(decrypt1);
console.log(decrypt1.toString().length);
console.log(decrypt2);
console.log(decrypt2.toString().length);
