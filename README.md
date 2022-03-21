# node-gridnet
NOTICE: NOT PRODUCTION READY. THIS HAS BEEN USED FOR RED ROBOT INTERNAL PROJECTS, HOWEVER, WE WILL BE ADDING STUFF IN A PUBLIC BETA TO MAKE THE LIBRARY COMPLETE AND HAVE MORE UTILITIES
A unofficial interface for interacting with the Nexus Gridnet API in Second Life, includes utility functions for non direct API calls, such as preparing data in non standard forms that the API can't provide on it's own(eg, a list of all channels on the network). 

## Install

```bash
npm install --save @redrobot/node-gridnet
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
