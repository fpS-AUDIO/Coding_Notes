# Muate Remote State with React Query

### services/supabase.js client example

```js
import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabaseUrl = "https://zavgobasvghlftfixxnd.supabase.co";

const supabaseKey = apiKey;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

### services/apiCabins.js example

```js
import supabase from "./supabase";

// REMEMBER to check the row level security policy rules

export async function deleteCabin(id) {
  // code generated with Supabase API Docs
  // takes supabase client
  // selects "cabins" table
  //  deletes from there
  // where the id column is equal to passed in id
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  //   check for errors
  if (error) {
    console.log(error);
    throw new Error(`Can't delete the cabin...`);
  }

  //   if everything is ok return data
  return data;
}
```

### Cabin Table (parent) Component example

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

### Cabin Row (child) Component example

```jsx
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  // to get the access to the 'QueryClient' instance you can use 'useQueryClient()' hook
  const queryClient = useQueryClient();

  // useMutation() custom React Query Hook allows to make mutation on remote state and it accepts

  // useMutation() also returns:
  // - 'isLoading' state flag
  // - 'mutate' callback function which can be connected to a button for example

  //  useMutation() accepts an object with:
  // - 'mutationFn' is the function which the React Query will call

  const { isLoading: isLoadingDeleting, mutate } = useMutation({
    // with only this option the mutation will work but it won't trigger any UI updating
    mutationFn: function (id) {
      // calls the imported deleteCabin() function
      return deleteCabin(id);
    },

    // this tell React Query what to do as soon as the mutation was successful
    onSuccess: function () {
      // to update the UI just refetch the data
      // to easly refetch the data in React Query you can just invalidate the cache
      // you need to call 'invalidateQueries()' on the 'QueryClient' returned from 'new QueryClient({...})' in App.js
      // to get the access to the 'QueryClient' instance you can use 'useQueryClient()' hook
      // in 'invalidateQueries' you need to tell which query you want to invalidate, so insert the 'queryKey' specified in 'useQuery()'
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    // there is also error handler
    onError: function (err) {
      // this error handler recieve the error thrown inside the deleteCabin() function
      // do something with this error
      alert(err.message);
    },
  });

  return (
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      {/* using 'mutate' function returned from useMutation() */}
      <button onClick={() => mutate(id)} disabled={isLoadingDeleting}>
        Delete
      </button>
    </TableRow>
  );
}

export default CabinRow;
```
