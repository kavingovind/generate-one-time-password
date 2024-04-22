/*** Generate a random OTP number with either 4 or 6 digits. ***/
const generateOTP = (length = 6) => {
  if (length === 4 || length === 6) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const otp = Math.floor(min + Math.random() * (max - min + 1));
    return otp;
  } else {
    throw new Error("OTP length must be either 4 or 6 digits");
  }
};

export { generateOTP };
