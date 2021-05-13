# dot-conf

## Introduction

dot-conf is a library used to read / write conf file writed with javascript.

## Install

`yarn add @calsranna/dot-conf`

## Usage

```javascript
const dotConf = require("@calsranna/dot-conf");

DBC.read("path/to/your/file/conf.conf").then((conf) => {
  //Do something.
});

DBC.write("path/to/your/file/conf.conf", conf).then(() => {
  //Do something.
});
```
