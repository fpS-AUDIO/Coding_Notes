# React Querey Library

### Install

Here we install version 4: `@4`

```cmd
npm i @tanstack/react-query@4
```

Also install the packed for react query dev tools (same version):

```cmd
npm i @tanstack/react-query-devtools@4
```

**NOTE:**
The v5 of React Query have some changes:

- `isLoading` is now called `isPending`
- The `cacheTime` option is now called `gcTime`

### Setup

To integrate React Query into application is:

#### **Create a place where the data basically lives**

```jsx
// ... inside the App.jsx ...
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

// ... imports of other components ...

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// set up the cache and the Query client using "new QueryClient()"
// QueryClient() accepts options

const QueryClientData = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime (in ms) is the amount of time that the data in the cache will stay valid until refatch again
      staleTime: 60 * 1000,

      // there are many options
    },
  },
});

// to provide the data to the application you can use the <QueryClientProvider>
// the 'client' prop should be the result of QueryClient()

// As child component of <QueryClientProvider> you can provide the devtools
// Devtools component: <ReactQueryDevtools initialIsOpen={false} />

function App() {
  return (
    <>
      <QueryClientProvider client={QueryClientData}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
```

#### **Provide that data to the application**

**services/apiCabins.js query function helper file**

```jsx
import supabase from "./supabase";

export async function getCabins() {
  // from supabase clients creating query using from() method
  //   specify name of table and the fields
  //   this returns a promise which is awaited
  const { data, error } = await supabase.from("cabins").select("*");

  //   check for errors
  if (error) {
    console.log(error);
    throw new Error(`Can't load the cabins data...`);
  }

  //   if everything is ok return data
  return data;
}
```

**Component (sstyled element)**

```jsx
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

/* eslint-disable */
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  /* useQuery() custom React Query hook
  useQuery() accpets an object with 2 things:
    1. queryKey is identifier of that query and it can be an array with a string (or complex array)
      queryKey identifies each query and also you can see it in dev tools
    2. queryFn is the function to make query (fetch data from API).
      This function must return a promise like fetch()
  */
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: [`cabins`],
    queryFn: getCabins,
  });

  // console.log(x); returns a lot of states, but we destructure only some of them like isLoading, status is also important.

  if (isLoading) return <Spinner />;

  // role is just to make html more accessible
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
```
