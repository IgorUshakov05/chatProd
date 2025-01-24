import crypto from "crypto";

const SALT_LENGTH = 16;
const HASH_LENGTH = 64;
const ITERATIONS = 100000;
const ALGORITHM = "sha512";

export function encryptPassword(password: string): string {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, ITERATIONS, HASH_LENGTH, ALGORITHM)
    .toString("hex");

  return salt + "|" + hash;
}

export function verifyPassword(
  password: string,
  salt: string,
  hash: string
): boolean {
  const derivedHash = crypto
    .pbkdf2Sync(password, salt, ITERATIONS, HASH_LENGTH, ALGORITHM)
    .toString("hex");

  return derivedHash === hash;
}
