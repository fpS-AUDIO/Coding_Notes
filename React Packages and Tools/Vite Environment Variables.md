
# Vite Environment Variables Documentation

## Introduction
This document provides an overview of how to work with environment variables in Vite. Environment variables are used to store configuration values that can be accessed within your application. This is particularly useful for managing different settings across development, staging, and production environments.

## Environment Variable Naming Conventions
In Vite, all environment variables that are intended to be exposed to your client-side code must be prefixed with `VITE_`. This prefix ensures that only specific variables are made accessible, reducing the risk of exposing sensitive information.

### Example
In your `.env` file:
```plaintext
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here
```

## Accessing Environment Variables
You can access these environment variables in your application using the `import.meta.env` object.

### Example
```javascript
// main.js
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

console.log(apiUrl);  // Logs 'https://api.example.com'
console.log(apiKey);  // Logs 'your_api_key_here'
```

## Creating .env Files
Environment variable files are named according to the mode they correspond to. The default mode is `development`, but you can specify different modes for different stages of your application.

### Common .env Files
- `.env`: Default.
- `.env.local`: Local overrides. Not committed to version control.
- `.env.development`, `.env.production`, etc.: Mode-specific variables.

### Example
```plaintext
# .env
VITE_APP_TITLE=My Vite App

# .env.local
VITE_API_URL=http://localhost:3000

# .env.production
VITE_API_URL=https://api.example.com
```

## Using Environment Variables in Components
You can use environment variables directly in your React components or any other part of your code.

### Example
```javascript
// src/components/ExampleComponent.js
import React from 'react';

const ExampleComponent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div>
      <p>API URL: {apiUrl}</p>
    </div>
  );
};

export default ExampleComponent;
```

## Tips and Best Practices
1. **Prefix with `VITE_`**: Ensure all environment variables you need in your client-side code are prefixed with `VITE_`.
2. **Use .env.local for Local Overrides**: Keep sensitive information like API keys in `.env.local` and add this file to `.gitignore`.
3. **Do Not Hard-Code Sensitive Data**: Always use environment variables for sensitive information.
4. **Restart Dev Server**: After modifying `.env` files, always restart the Vite development server to apply the changes.

## Common Patterns
### Fetching Data with Environment Variables
```javascript
// src/utils/api.js
export const fetchData = async (endpoint) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/${endpoint}`);
  const data = await response.json();
  return data;
};

// Usage in a component
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('some-endpoint').then(setData);
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataComponent;
```

## Conclusion
Using environment variables in Vite allows you to manage different configuration settings efficiently across various environments. By following the conventions and best practices outlined in this document, you can ensure a secure and maintainable approach to managing these variables.

