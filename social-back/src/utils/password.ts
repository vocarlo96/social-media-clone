import crypto from 'crypto'
export function genPassword(password: string) {
    var salt = crypto.randomUUID()
    var genHash = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");
  
    return {
      salt: salt,
      hash: genHash,
    };
}

export function validPassword(password: string, hash: string, salt: string) {
    var hashVerify = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");
    //   crypto.timingSafeEqual(res.rows[0].passport, hashedPassword)
    return hash === hashVerify;
}