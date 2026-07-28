# Generate One Time Password (OTP)

A lightweight npm package for generating one-time passwords (OTP) with adjustable lengths between 4 and 12 characters. Supports numeric, uppercase alphabetic, and alphanumeric codes for authentication and verification.

Works in modern and legacy environments: **Node.js 10+**, **CommonJS**, **ES modules**, and **browser script tags** (UMD).

## Installation

```bash
npm install generate-one-time-password --save
```

```bash
yarn add generate-one-time-password
```

## Usage

### ES modules

```javascript
import { generateOTP } from 'generate-one-time-password';

const otp = generateOTP();
console.log(otp); // "490605"

const shortOtp = generateOTP(4);
console.log(shortOtp); // "3075"

const alphaOtp = generateOTP(8, { charset: 'alpha' });
console.log(alphaOtp); // "KDJWPLMX"

const alphanumericOtp = generateOTP(10, { charset: 'alphanumeric' });
console.log(alphanumericOtp); // "A3K9Z2M7P1"
```

### CommonJS

```javascript
const { generateOTP } = require('generate-one-time-password');

const otp = generateOTP(6, { charset: 'numeric' });
console.log(otp); // "248375"
```

### Browser (script tag)

```html
<script src="node_modules/generate-one-time-password/dist/umd/generate-one-time-password.js"></script>
<script>
  const otp = GenerateOneTimePassword.generateOTP(6, { charset: 'alpha' });
  console.log(otp);
</script>
```

## API Reference

### `generateOTP(length?, options?)`

Generates a random OTP string.

| Argument | Default | Type | Description |
| :-- | :-- | :-- | :-- |
| `length` | `6` | `4`–`12` | Number of characters in the OTP. |
| `options.charset` | `'numeric'` | `'numeric' \| 'alpha' \| 'alphanumeric'` | Character set used to build the OTP. |

**Charset values:**

- `'numeric'` — digits `0-9`
- `'alpha'` — uppercase letters `A-Z`
- `'alphanumeric'` — digits `0-9` and uppercase letters `A-Z`

**Returns:** `string`

**Throws:** if `length` is outside `4`–`12`, or if `charset` is invalid.

## Migration from v1.x

Version 2.0 introduces a few breaking changes:

1. **Return type is now `string` (was `number`)** — update any code that expects a numeric return value:

   ```javascript
   // v1.x
   const otp = generateOTP(); // 490605 (number)

   // v2.x
   const otp = generateOTP(); // "490605" (string)
   ```

2. **Built output only** — the package now ships compiled `dist/` artifacts. Import paths stay the same (`generate-one-time-password`).

3. **New `charset` option** — use `{ charset: 'alpha' }` or `{ charset: 'alphanumeric' }` for non-numeric codes.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors

- [@kavingovind](https://www.github.com/kavingovind)
