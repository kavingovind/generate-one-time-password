/* Function generateOTP that takes an optional argument of length, which can be either 4 or 6, and returns a random OTP number */
declare function generateOTP(
  length: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
): number;

export { generateOTP };
