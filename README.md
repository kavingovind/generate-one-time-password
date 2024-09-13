# Generate One Time Password(OTP)

A lightweight npm package for generating one-time passwords (OTP) with adjustable lengths between 4 and 12 digits, ideal for authentication and verification.

## Installation

```bash
$ npm install generate-one-time-password --save

or

$ yarn add generate-one-time-password
```

## Usage

```javascript
import { generateOTP } from "generate-one-time-password";

const otp = generateOTP();
console.log(otp); // 490605

const otpcode = generateOTP(4);
console.log(otpcode); // 3075

const otpcode = generateOTP(8);
console.log(otpcode); // 24837554
```

## API Reference

Generate a random OTP number with a length between 4 and 12 digits.

| Function Arguments | Default Value | Type         | Description                                                                                                  |
| :----------------- | :------------ | :----------- | ------------------------------------------------------------------------------------------------------------ |
| `4` - `12`         | `6`           | **Optional** | The number of digits in a one-time password (OTP). If no option is specified, the OTP will be 6 digits long. |

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors

- [@kavingovind](https://www.github.com/kavingovind)
