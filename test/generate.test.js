var assert = require('assert');
var { generateOTP } = require('../dist/cjs/index.js');

describe('generateOTP', function () {
  it('returns a 6-character numeric string by default', function () {
    var otp = generateOTP();

    assert.strictEqual(typeof otp, 'string');
    assert.strictEqual(otp.length, 6);
    assert.ok(/^[0-9]+$/.test(otp));
  });

  it('returns a string with the requested length', function () {
    assert.strictEqual(generateOTP(4).length, 4);
    assert.strictEqual(generateOTP(12).length, 12);
  });

  it('throws when length is below 4', function () {
    assert.throws(function () {
      generateOTP(3);
    }, /OTP length must be between 4 and 12 digits/);
  });

  it('throws when length is above 12', function () {
    assert.throws(function () {
      generateOTP(13);
    }, /OTP length must be between 4 and 12 digits/);
  });

  it('generates numeric OTPs by default', function () {
    var otp = generateOTP(8);

    assert.ok(/^[0-9]{8}$/.test(otp));
  });

  it('generates uppercase alphabetic OTPs', function () {
    var otp = generateOTP(8, { charset: 'alpha' });

    assert.ok(/^[A-Z]{8}$/.test(otp));
  });

  it('generates alphanumeric OTPs', function () {
    var otp = generateOTP(10, { charset: 'alphanumeric' });

    assert.ok(/^[0-9A-Z]{10}$/.test(otp));
  });

  it('throws for an invalid charset', function () {
    assert.throws(function () {
      generateOTP(6, { charset: 'symbols' });
    }, /OTP charset must be one of/);
  });

  it('uses expected character sets across many samples', function () {
    var numericSamples = '';
    var alphaSamples = '';
    var alphanumericSamples = '';
    var index;

    for (index = 0; index < 1000; index += 1) {
      numericSamples += generateOTP(12, { charset: 'numeric' });
      alphaSamples += generateOTP(12, { charset: 'alpha' });
      alphanumericSamples += generateOTP(12, { charset: 'alphanumeric' });
    }

    assert.ok(/[0-9]/.test(numericSamples));
    assert.ok(!/[A-Z]/.test(numericSamples));

    assert.ok(/[A-Z]/.test(alphaSamples));
    assert.ok(!/[0-9]/.test(alphaSamples));

    assert.ok(/[0-9]/.test(alphanumericSamples));
    assert.ok(/[A-Z]/.test(alphanumericSamples));
  });
});
