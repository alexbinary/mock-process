# mock-process
Simple mock tools for node global process object 👻

# Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/mock-process.git

$ yarn add https://github.com/alexbinary/mock-process.git
```

# Usage

```javascript
let mockProcess = require('alexbinary.mock-process')

console.log(process.platform) // e.g. 'darwin'

// make it return something else with :
mockProcess.mock({platform: 'fooOS'})
// or just :
mockProcess.mock('platform', 'fooOS')

console.log(process.platform) // 'fooOS'

// restore original value with :
mockProcess.restore(['platform'])
// or just :
mockProcess.restore('platform')
// or just :
mockProcess.restore() // restore all properties
```
