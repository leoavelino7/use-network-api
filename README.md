use-network-api
===========

[![NPM version](https://badgen.net/npm/v/use-network-api)](https://www.npmjs.com/package/use-network-api)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/use-network-api)](https://www.npmjs.com/package/use-network-api)
[![License](https://badgen.net/npm/license/use-network-api)](https://www.npmjs.com/package/use-network-api)

A simple JavaScript utility to access the network api.

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install use-network-api

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add use-network-api
```

### Usage with React.js

```tsx
import { useNetworkApi } from "use-network-api";

function App() {
  const { getBrowser, connection, isOnline } = useNetworkApi();
  return (
    <div>
      <p>Browser: {getBrowser()}</p>
      <p>IsOnline: {isOnline() ? 'Yes' : 'No'}</p>
      <p>Connection Type: {connection?.effectiveType}</p>
    </div>
  );
}

export default App;

```

#### Call a function for when the browser does not support the feature
```tsx
import { useNetworkApi } from "use-network-api";

const handleBrowserNotSupport = () => {
  alert('Not support :(')
}

function App() {  
  const { getBrowser, connection, isOnline } = useNetworkApi(handleBrowserNotSupport);
  
  return (
    <div>
      <p>Browser: {getBrowser()}</p>
      <p>IsOnline: {isOnline() ? 'Yes' : 'No'}</p>
      <p>Connection Type: {connection?.effectiveType}</p>
    </div>
  );
}

export default App;

```