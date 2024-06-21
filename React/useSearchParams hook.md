# `useSearchParams` Hook in React

## Introduction

The `useSearchParams` hook in `react-router-dom` allows you to interact with the URL's query parameters in a React component. This hook provides an interface for reading and updating the search parameters in the URL, which can be very useful for features such as filtering, sorting, and pagination.

## Installation

To use `useSearchParams`, ensure you have `react-router-dom` installed. You can install it using the following command:

```bash
npm install react-router-dom
```

## Basic Usage

The `useSearchParams` hook returns an array where the first element is a `URLSearchParams` object representing the current query string, and the second element is a function to update the search parameters.

### Example

**App.js**

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        {/_ Define a route that uses query parameters _/}
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
```

**SearchPage.js**

```jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  // Get the search parameters from the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Read specific query parameters
  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || 1;

  // Update search parameters
  const updateQuery = (newQuery) => {
    setSearchParams({ query: newQuery, page: 1 });
  };

  return (
    <div>
      <h1>Search Page</h1>
      <p>Current Query: {query}</p>
      <p>Current Page: {page}</p>
      <button onClick={() => updateQuery("new-search-term")}>
        Update Query
      </button>
    </div>
  );
}

export default SearchPage;
```

## Common Patterns

### Handling Multiple Parameters

You can handle multiple query parameters by using the `get` method on the `URLSearchParams` object for each parameter you need.

**Example**

```jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "asc";

  const updateFilters = (newCategory, newSort) => {
    setSearchParams({ category: newCategory, sort: newSort });
  };

  return (
    <div>
      <h1>Filter Page</h1>
      <p>Category: {category}</p>
      <p>Sort Order: {sort}</p>
      <button onClick={() => updateFilters("electronics", "desc")}>
        Update Filters
      </button>
    </div>
  );
}

export default FilterPage;
```

### Syncing State with URL

To keep the URL query parameters in sync with the component state, you can use `useEffect` to update the parameters when the state changes.

**Example**

```jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function PaginatedList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);

  return (
    <div>
      <h1>Paginated List</h1>
      <p>Current Page: {page}</p>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
    </div>
  );
}

export default PaginatedList;
```

## Additional Tips

- **Default Values:** Always provide default values for parameters to avoid issues with missing or malformed URLs.
- **Validation:** Ensure parameters are valid and sanitize them to prevent security vulnerabilities.
- **Performance:** Avoid excessive updates to search parameters, as it can cause unnecessary re-renders and performance degradation.

## Resources

- [React Router Documentation](https://reactrouter.com/web/api/Hooks/useSearchParams)
- [Handling Query Parameters](https://reacttraining.com/blog/query-strings-in-react-router/)
