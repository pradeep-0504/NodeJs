import crypto, { createHash } from "node:crypto"
/** 
 * built in node modules
 * security related tasks
 * creating random uuids,ids
 * hashing data
 * to verify the data was not chnaged
 * encrypt/decrypt
*/
const requestId=crypto.randomUUID();

console.log(requestId);

//crypto.randomBytes
/**
 * s commonly used for
 *  reset tokens,
 * verification tokens,
 *  session-related secrets
 * */
// const resetToken=crypto.randomBytes(16)// <Buffer 7f 30 77 d9 54 15 27 f3 5f c3 fa 43 0a 4e e0 34>
const resetToken=crypto.randomBytes(16).toString("hex")
console.log(resetToken);
// 16 random bytes become 32 hex characters because each byte is represented by two hexadecimal characters.

// createHash - It is one way 
//  cryptographic hash converts input into a fixed-size digest. 
// Hashing is designed to be one-way; it is not the same thing as encryption.

const text="Hello world"

const hash=crypto.createHash("sha256").update(text).digest("hex");

console.log("Hash:",hash);

// HMAC

/**
 * normal hash contains like data->hash
 * HMAC: data + secret ->signed Hash
 *  webhook verification, API request signing, and message integrity checks.
 */

const secret="my-secret-key"
const message="user_id_1"
const signature=crypto.createHmac("sha256",secret).update(message).digest("hex");
console.log("signature:",signature);