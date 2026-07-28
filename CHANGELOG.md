# CHANGELOG.md

## ![v2.0.0 - 28 Jul 2026](https://img.shields.io/badge/v2.0.0%20--%2028%20Jul%202026-blue?style=flat-square)

- **BREAKING:** `generateOTP` now returns a `string` instead of a `number`.
- feat: added `charset` option supporting `numeric`, `alpha`, and `alphanumeric` OTPs.
- feat: added dual module support (CommonJS + ESM) and a UMD browser bundle.
- feat: ES5-compatible builds for legacy browsers and Node.js 10+.
- feat: uses cryptographically secure randomness when available (`crypto.randomBytes` / `crypto.getRandomValues`).

## ![v1.0.0 - 13 Sep 2024](https://img.shields.io/badge/v1.0.0%20--%2013%20Sep%202024-blue?style=flat-square)

- feat: added support for OTPs with customizable lengths ranging from 4 to 12 digits.

## ![v0.2.0 - 22 Apr 2024](https://img.shields.io/badge/v0.2.0%20--%2022%20Apr%202024-blue?style=flat-square)

- feat: added support for OTPs with varying lengths of 4 and 6 digits.

## ![v0.1.1 - 16 Apr 2024](https://img.shields.io/badge/v0.1.1%20--%2016%20Apr%202024-blue?style=flat-square)

- Initial public release
