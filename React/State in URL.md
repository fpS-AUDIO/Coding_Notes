# Storing State in URL in React Using React Router

In React applications, it's common to store state in the URL to allow for better navigation, bookmarking, and sharing. This guide will cover how to store and manage state in URLs using React Router, focusing on both URL parameters and query strings.

## Advantages of Storing State in URL

- **Accessible to All Components**: State stored in the URL is globally accessible to all components.
- **Pass Data Between Components**: You can easily pass data from one component to another via the URL.
- **Bookmark and Share**: Users can bookmark and share the page link with the state included in the URL, providing a better user experience.
- **Back and Forward Navigation**: State in the URL allows users to use the browser's back and forward buttons effectively.

## Understanding URL Parameters and Query Strings

- **URL Parameters**: Part of the URL that acts as a placeholder for values. They are used for dynamic routing.
- **Query Strings**: A way to pass key-value pairs in the URL, used to filter or sort data.

---

## Using URL Parameters with React Router

### Step 1: Create a New Route

Define a route with a parameter in your `App.js` or routing component.

```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./DetailPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* '/:' is the important part then 'id' acts like a simple variable for the 'useParams' */}
        {/* so when Router sees '/details/' + 'something' it renders DetailPage */}
        <Route path="/details/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
```

### Step 2: Link to the Route with Parameters

Create a link that navigates to the route with parameters.

```jsx
import { Link } from "react-router-dom";

function ItemList() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {/* to='' should include the data you want to pass to the next page */}
          {/* in this case we pass item.id so the UI will be rendered basing on this info */}
          <Link to={`/details/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
```

### Step 3: Read the State from the URL Using `useParams`

Use `useParams` to extract the parameter from the URL in the target component.

```jsx
import { useParams } from "react-router-dom";

function DetailPage() {
  // useParamns returns an object where:
  //  - key is parameter passed in Route (path="/details/:id" ) in Step 1
  //  - value is what the link passed in in Step 2
  // so simply destructure it
  const { id } = useParams();

  return <div>Details about item {id}</div>;
}

export default DetailPage;
```

---

## Using Query Strings with React Router

### Step 1: Create a New Route

Define a generic route which, optionally, can accept also the **params** if you want.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CityList from "./components/CityList";
import City from "./components/City";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* btw the <CityList> component will render <CityItem> components */}
        <Route
          path="cities"
          element={<CityList cities={cities} isLoading={isLoading} />}
        ></Route>

        {/* here with params will be rendered a different component */}
        <Route
          path="cities/:id"
          element={<City cities={cities} isLoading={isLoading} />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Step 2: Link to the Route with Query Strings

Create a link that includes query strings.

```jsx
import { Link } from "react-router-dom";

function CityItem({ city }) {
  // example of position object
  console.log(city.position); // Output: {lat: 52.53586782505711, lng: 13.376933665713324}

  // To add the query string (with or without params) you need to add:
  //    '?' (question mark)
  //    then query variable
  //    then '=' (equal sign)
  //    then its value
  //    use '&' to add more params
  // SYNTAX:  url/url/?variableName1=value&variableName2=value

  // PARAMS:        ${city.id}
  // QUESRY STRING: ?lat=${city.position.lat}&lng=${city.position.lng}
  return (
    <li>
      <Link
        to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      ></Link>
    </li>
  );
}

export default CityItem;
```

### Step 3: Read the State from the URL Using `useSearchParams`

```jsx
import { useSearchParams } from "react-router-dom";

function Map() {
  // useSearchParams hook returns an array with current url state and a function to update it
  const [searchParams, setSearchParams] = useSearchParams();

  // on searchParams object you need to call get() method and pass-in the quesry string variable name
  const lat = searchParams.get(`lat`);
  const lng = searchParams.get(`lng`);

  // this function will change the URL query string (global update)
  function changeCoords() {
    // setSearchParams accepts new object
    setSearchParams({ lat: 2324, lng: 3221 });
  }

  return (
    <div>
      <p>
        The coords of current URL are: {lat} and {lng}
      </p>

      <button onClick={changeCoords}>Change URL query string</button>
    </div>
  );
}

export default Map;
```

## Common Patterns and Practices

- **Use URL Parameters for Identifiable Data**: Ideal for data that identifies a resource, such as user IDs or item IDs.
- **Use Query Strings for Filtering and Sorting**: Useful for optional data that modifies the view, like filters or sort orders.
- **Keep URLs Clean and User-Friendly**: Ensure URLs are readable and concise for better user experience.
- **Handle Default Values**: Provide default values for parameters to avoid breaking the application when values are missing.
