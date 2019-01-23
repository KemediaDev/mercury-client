# mercury-client

## Overview

This is a simple Node library library to consume the [Mercury web parser].
It also goes an extra step in trimming / cleaning some of the response from Mercury by:

- Removing HTML tags
- Decodes URL entities.

## Installation

1. Get an API key at: https://mercury.postlight.com/web-parser/
2. Install with `npm install mercury-client --save` / `yarn add mercury-client`

## Usage

```
const MercuryClient = require('mercury-client')
const mc = new MercuryClient(YOUR_API_KEY_HERE)

const mercuryData = await mc.parse('https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed')
console.log('mercuryData', mercuryData)
```

## Version History

- 1.0.0 - Used request + request promise
- 2.0.0 - Uses axios, adds `cleanContent` value to response.

[mercury web parser]: https://mercury.postlight.com/web-parser/
