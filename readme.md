# Diffie-Hellman Key Exchange - Modular Exponentiation Example

This is an implementation of a simplified Diffie-Hellman key exchange algorithm using modular exponentiation and the `BigInt` type for handling large integers in JavaScript.

## Code Explanation

### Key Elements:

1. **Private Keys:**
   - `private_key1 = 15n` and `private_key2 = 13n` are the private keys for two parties involved in the key exchange.

2. **Public Parameters:**
   - `generator = 3n`: The base for exponentiation.
   - `pub_num = 17n`: The prime modulus used in the calculation.

3. **Key Generation:**
   - Each party computes their public key using the formula:
     \[
     e = g^p \mod num
     \]
     Where:
     - `g` is the generator.
     - `p` is the private key of the party.
     - `num` is the public modulus.

     The public keys for both parties are calculated:
     - `encrypt1 = 3^15 % 17`
     - `encrypt2 = 3^13 % 17`

4. **Encryption and Decryption:**
   - After exchanging public keys (`encrypt1` and `encrypt2`), each party computes the shared secret using the other's public key and their own private key:
     \[
     decrypt1 = encrypt1^{private\_key2} \mod pub\_num
     \]
     \[
     decrypt2 = encrypt2^{private\_key1} \mod pub\_num
     \]

   - The result is a shared secret that both parties will have, demonstrating the security of the Diffie-Hellman method.

### Code:

```javascript
const private_key1 = 15n;
const private_key2 = 13n;

const generator = 3n;
const pub_num = 17n;
const bits = 64;
let num = BigInt(Math.random() * 10 ** bits); // fixed bits generator

let str = num.toString();
let padded = BigInt(str.slice(2).padStart(str.length, 5)); // to handle random sequence to generate fixed first 2 characters including decimal itself

console.log(pub_num);
console.log(pub_num.toString().length);

// Encryption algorithm
const encrypt1 = generator ** private_key1 % pub_num;
const encrypt2 = generator ** private_key2 % pub_num;

console.log("public 1:", encrypt1); // Hidden private key
console.log("public 2:", encrypt2); // Hidden private key

// Decryption algorithm
const decrypt1 = encrypt1 ** private_key2 % pub_num;
const decrypt2 = encrypt2 ** private_key1 % pub_num;

/*
Formula:
e1 = g^p1 mod num;
e2 = g^p2 mod num;
d1 = e1^p2 mod num;
    => ((g^p1)^p2) mod num;
d2 = e2^p1 mod num;
    => ((g^p2)^p1) mod num;

decrypt = ((((3^15) % 17)^13) % 17) = 10;
*/

console.log(decrypt1);
console.log(decrypt1.toString().length);
console.log(decrypt2);
console.log(decrypt2.toString().length);

```
### Running the Project

1. Clone the repository and navigate to the project directory.
2. Run the script in the terminal:
   ```bash
   node rsa_key.js
   node private_key.js
