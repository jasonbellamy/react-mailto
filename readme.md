# React &lt;Mailto&gt; [![Build Status](https://travis-ci.org/jasonbellamy/react-mailto.png?branch=master)](https://travis-ci.org/jasonbellamy/react-mailto)

> A react component to create and display a [mailto](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links) link.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-mailto`


## Usage

```javascript
var React  = require('react');
var Mailto = require('react-mailto');

var Component = React.createClass({
  render: function () {
    return (
      <Mailto email="j@sonbellamy.com" obfuscate={true}>
        Email me!
      </Mailto>
    );
  }
});
```


## Options


Property  | Type      | Argument     | Default   | Description
----------|-----------|--------------|-----------|------------
email     | `string`  | `<required>` | `null`    | email address of the intended recipient.
obfuscate | `boolean` | `<optional>` | `false`   | show the email address in the status bar.
headers   | `object`  | `<optional>` | `null`    | any standard mail header fields. The most commonly-used of these are "subject", "cc", and "body" (which is not a true header field, but allows you to specify a short content message for the new email).


## Developing

[react-mailto](https://github.com/jasonbellamy/react-mailto) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)
Licensed under the MIT license.
