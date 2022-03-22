# node-gridnet

![Known Vulnerabilities](https://snyk.io/test/github/redrobotsl/node-gridnet/badge.svg)
![GitHub version](https://badge.fury.io/gh/redrobotsl%2Fnode-gridnet.svg)
[![GitHub issues](https://img.shields.io/github/issues/redrobotsl/node-gridnet)](https://github.com/redrobotsl/node-gridnet/issues)
[![GitHub license](https://img.shields.io/github/license/redrobotsl/node-gridnet)](https://github.com/redrobotsl/node-gridnet)
![Discord](https://img.shields.io/discord/747255363413213270)

NOTICE: NOT TRULY PRODUCTION READY. THIS HAS BEEN USED FOR RED ROBOT INTERNAL PROJECTS, HOWEVER, WE WILL BE ADDING STUFF IN A PUBLIC DEVELOPMENT TO MAKE THE LIBRARY COMPLETE AND HAVE MORE UTILITIES ADDED


A unofficial interface for interacting with the Nexus Gridnet API in Second Life, includes utility functions for non direct API calls, such as preparing data in non standard forms that the API can't provide on it's own(eg, a list of all channels on the network). 

## Install

```bash
npm install --save @redrobotsl/node-gridnet@0.0.1
```


## Usage

```javascript
import { Gridnet } from "./index.js";

const Client = new Gridnet('yourapikey');
await Client.init();
let details = await Client.transmit("GLOBAL", "HI");
console.log(details);
let details = await Client.networkDetails();
console.log(details);
```

## License

[MIT](http://vjpr.mit-license.org)
