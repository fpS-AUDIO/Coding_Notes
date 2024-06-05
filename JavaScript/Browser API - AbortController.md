# AbortController API Documentation

## Introduction

The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired. This is part of the Fetch API and is useful for managing requests, especially for canceling long-running operations.

## Theory

### What is AbortController?

- The `AbortController` interface provides an `AbortSignal` object, which can be used to communicate with, and abort, a DOM request.
- The `AbortSignal` object can be passed into the `fetch` method or other methods that accept signals to be notified when the operation should be aborted.

### Components

- **AbortController**: The controller object which creates an `AbortSignal`.
- **AbortSignal**: The signal object which communicates the abort request to the fetch operation.

### Properties

- `AbortController.signal`: Returns an `AbortSignal` object instance.
- `AbortSignal.aborted`: A Boolean that indicates whether the request has been aborted.

### Methods

- `AbortController.abort()`: Aborts the request(s) associated with the signal.

## Usage

### Basic Example

```javascript
// Create an instance of AbortController
const controller = new AbortController();
const signal = controller.signal;

// Start a fetch request
fetch("/path/to/resource", { signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Fetch error:", error);
    }
  });

// Abort the fetch request after 5 seconds
setTimeout(() => {
  controller.abort();
}, 5000);
```

### Aborting Multiple Requests

```javascript
const controller = new AbortController();
const signal = controller.signal;

const fetchData = (url) => {
return fetch(url, { signal })
.then(response => response.json())
.catch(error => {
if (error.name === 'AbortError') {
console.log(\`Fetch to \${url} aborted\`);
} else {
console.error(\`Fetch error on \${url}:\`, error);
}
});
};

const urls = [
'/path/to/resource1',
'/path/to/resource2',
'/path/to/resource3',
];

Promise.all(urls.map(url => fetchData(url)))
.then(dataArray => {
console.log('All data:', dataArray);
});

// Abort all fetch requests after 3 seconds
setTimeout(() => {
controller.abort();
}, 3000);
```

### Common Patterns

#### Using AbortController with Event Listeners

```javascript
const controller = new AbortController();
const signal = controller.signal;

document.getElementById("start-fetch").addEventListener("click", () => {
  fetch("/path/to/resource", { signal })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
});

document.getElementById("abort-fetch").addEventListener("click", () => {
  controller.abort();
});
```

#### Aborting Long-Running Operations

```javascript
const controller = new AbortController();
const signal = controller.signal;

const longRunningOperation = () => {
  return new Promise((resolve, reject) => {
    signal.addEventListener("abort", () => {
      reject(new Error("Operation aborted"));
    });

    // Simulating long-running task
    setTimeout(() => {
      if (!signal.aborted) {
        resolve("Operation completed");
      }
    }, 10000);
  });
};

longRunningOperation()
  .then((result) => console.log(result))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Operation was aborted");
    } else {
      console.error("Operation error:", error);
    }
  });

// Abort the operation after 5 seconds
setTimeout(() => {
  controller.abort();
}, 5000);
```

## Conclusion

The `AbortController` API is a powerful tool for managing and controlling web requests and other asynchronous operations in your JavaScript code. By understanding and implementing the patterns shown above, you can enhance the responsiveness and reliability of your web applications.
