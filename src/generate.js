/*** Generate a random six-digit OTP number ***/
const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
};

export { generateOTP };
