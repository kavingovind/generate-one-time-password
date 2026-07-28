type OTPCharset = 'numeric' | 'alpha' | 'alphanumeric';

interface GenerateOTPOptions {
  charset?: OTPCharset;
}

declare function generateOTP(
  length?: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  options?: GenerateOTPOptions
): string;

export { generateOTP, OTPCharset, GenerateOTPOptions };
