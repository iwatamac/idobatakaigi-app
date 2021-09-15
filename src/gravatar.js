import crypto from 'crypto';

export const gravatarPath = (string) => {
  const lowerCaseString = string.trim().toLowerCase(); //トリミングして小文字に変換する//
  const md5 = crypto.createHash('md5');
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};