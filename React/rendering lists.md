# How to render a list

### Basics

When you have a JS array (e.g., with objects) and you want to create a component for each item of that array, you can use JS logic. For example, if you want to loop over an array and produce a new array, you can use the [].map() method. forEach will not work because it doesn't produce a new array and then you can't produce JSX.

**React**:

```javascript
// Suppose you have an array like this and you want to loop over it to create components for each nested object
const pizzasArray = [
  {
    pizzaName: "Margherita",
    image: "margherita.jpg",
    ingredients: "Tomato, Mozzarella, Basil",
  },
  {
    pizzaName: "Pepperoni",
    image: "pepperoni.jpg",
    ingredients: "Tomato, Mozzarella, Pepperoni",
  },
  {
    pizzaName: "Hawaiian",
    image: "hawaiian.jpg",
    ingredients: "Tomato, Mozzarella, Ham, Pineapple",
  },
];

// Parent component
function PizzaMenu() {
  return (
    <>
      <h3>Homemade Pizza List:</h3>
      <div>
        {pizzasArray.map((pizzaItem) => (
          // Inside each component pass in props with the pizza object
          // When you use [].map(), each item that will be rendered needs a unique key property
          <Pizza pizzaObj={pizzaItem} key={pizzaItem.pizzaName} />
        ))}
      </div>
    </>
  );
}

// Child component
function Pizza(props) {
  return (
    <div>
      {/* Destructure the pizza object from props and then access the nested properties */}
      <img src={props.pizzaObj.image} alt={props.pizzaObj.pizzaName} />
      <h4>{props.pizzaObj.pizzaName}</h4>
      <p>{props.pizzaObj.ingredients}</p>
    </div>
  );
}
```

### Using Conditional Rendering

Also, inside the {} you can use ternary or && operators based on some data to choose to render one component or another like this:

```javascript
function PizzaMenu() {
  const isRestaurantOpen = true;
  const pizzasArray = [
    {
      pizzaName: "Margherita",
      image: "margherita.jpg",
      ingredients: "Tomato, Mozzarella, Basil",
    },
    {
      pizzaName: "Pepperoni",
      image: "pepperoni.jpg",
      ingredients: "Tomato, Mozzarella, Pepperoni",
    },
  ];

  return (
    <>
      <h3>Homemade Pizza List:</h3>
      {/* Using ternary operator */}
      {isRestaurantOpen ? (
        <div>
          {pizzasArray.map((pizzaItem) => (
            <Pizza pizzaObj={pizzaItem} key={pizzaItem.pizzaName} />
          ))}
        </div>
      ) : (
        <p>Restaurant is closed</p>
      )}
    </>
  );
}
```

### Using Multiple Returns with Guard Clauses

Another approach to conditional rendering is using multiple returns within a function. This can make your code cleaner and easier to read by handling conditions early and avoiding deeply nested code.

```javascript
function PizzaMenu() {
  const isRestaurantOpen = true;
  const pizzasArray = [
    {
      pizzaName: "Margherita",
      image: "margherita.jpg",
      ingredients: "Tomato, Mozzarella, Basil",
    },
    {
      pizzaName: "Pepperoni",
      image: "pepperoni.jpg",
      ingredients: "Tomato, Mozzarella, Pepperoni",
    },
  ];

  // Guard clause to handle closed restaurant
  if (!isRestaurantOpen) {
    return <p>Restaurant is closed</p>;
  }

  // Main return if restaurant is open
  return (
    <>
      <h3>Homemade Pizza List:</h3>
      <div>
        {pizzasArray.map((pizzaItem) => (
          <Pizza pizzaObj={pizzaItem} key={pizzaItem.pizzaName} />
        ))}
      </div>
    </>
  );
}
```
