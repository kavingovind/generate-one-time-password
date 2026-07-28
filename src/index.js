var CHARSETS = {
  numeric: '0123456789',
  alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  alphanumeric: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

var VALID_CHARSETS = Object.keys(CHARSETS);

function getNodeCrypto() {
  if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
    return null;
  }

  try {
    return require('crypto');
  } catch (error) {
    return null;
  }
}

function getGlobalCrypto() {
  var root =
    typeof global !== 'undefined'
      ? global
      : typeof window !== 'undefined'
        ? window
        : typeof self !== 'undefined'
          ? self
          : null;

  if (root && root.crypto) {
    return root.crypto;
  }

  if (typeof crypto !== 'undefined') {
    return crypto;
  }

  return null;
}

function getSecureRandomIndex(max) {
  var nodeCrypto = getNodeCrypto();

  if (nodeCrypto && typeof nodeCrypto.randomBytes === 'function') {
    var buffer = nodeCrypto.randomBytes(4);
    return buffer.readUInt32BE(0) % max;
  }

  var cryptoRef = getGlobalCrypto();

  if (cryptoRef && typeof cryptoRef.getRandomValues === 'function') {
    var randomValues = new Uint32Array(1);
    cryptoRef.getRandomValues(randomValues);
    return randomValues[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function generateOTP(length, options) {
  if (length === undefined) {
    length = 6;
  }

  if (options === undefined) {
    options = {};
  }

  var charset = options.charset || 'numeric';

  if (length < 4 || length > 12) {
    throw new Error('OTP length must be between 4 and 12 digits');
  }

  if (VALID_CHARSETS.indexOf(charset) === -1) {
    throw new Error("OTP charset must be one of: 'numeric', 'alpha', 'alphanumeric'");
  }

  var pool = CHARSETS[charset];
  var otp = '';
  var index;

  for (index = 0; index < length; index += 1) {
    otp += pool.charAt(getSecureRandomIndex(pool.length));
  }

  return otp;
}

export { generateOTP };
