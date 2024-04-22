# Generate One Time Password(OTP)

A lightweight npm package for generating either 4 or 6 digits one-time passwords (OTP) for authentication and verification purposes.

## Installation

```bash
$ npm install generate-one-time-password --save

or

$ yarn add generate-one-time-password
```

## Usage

```javascript
import { generateOTP } from "generate-one-time-password";

const otp = generateOTP(6);
console.log(otp); // 490605

const otpcode = generateOTP(4);
console.log(otpcode); // 3075
```

## API Reference

Generate a random OTP number with either 4 or 6 digits.

| Function Arguments | Default Value | Type         | Description                                                                                                  |
| :----------------- | :------------ | :----------- | ------------------------------------------------------------------------------------------------------------ |
| `4` or `6`         | `6`           | **Optional** | The number of digits in a one-time password (OTP). If no option is specified, the OTP will be 6 digits long. |

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors

- [@kavingovind](https://www.github.com/kavingovind)
