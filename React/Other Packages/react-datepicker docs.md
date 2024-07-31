
# React DatePicker Documentation

## Introduction
`react-datepicker` is a simple and reusable datepicker component for React. It provides a user-friendly interface to select dates, with support for date ranges, time selection, and various customizations.

## Installation
To install the `react-datepicker` package, you can use npm or yarn:

```sh
npm install react-datepicker --save
# or
yarn add react-datepicker
```

You will also need to install `react` and `react-dom` if they are not already installed:

```sh
npm install react react-dom --save
# or
yarn add react react-dom
```

## Usage
Here is a basic example of how to use `react-datepicker` in a React component:

```jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
    />
  );
};

export default MyDatePicker;
```

### Explanation
- **Importing**: The `react-datepicker` package and its CSS file are imported.
- **State Management**: A `useState` hook is used to manage the selected date state.
- **DatePicker Component**: The `DatePicker` component is rendered with `selected` and `onChange` props.

## Props
`react-datepicker` provides a variety of props for customization:

- `selected`: The currently selected date.
- `onChange`: Callback when the selected date changes.
- `minDate` and `maxDate`: Set the minimum and maximum selectable dates.
- `dateFormat`: Customize the display format of the date.
- `showTimeSelect`: Include a time picker.

### Example with Props
```jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={new Date().setMonth(new Date().getMonth() + 1)}
      dateFormat="dd/MM/yyyy"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
    />
  );
};

export default CustomDatePicker;
```

## Common Patterns

### Date Range Selection
To select a date range, use the `startDate` and `endDate` props:

```jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
};

export default DateRangePicker;
```

### Inline DatePicker
To display the datepicker inline (always visible), use the `inline` prop:

```jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InlineDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      inline
    />
  );
};

export default InlineDatePicker;
```

### Custom Input
You can use a custom input component with `react-datepicker` by using the `customInput` prop:

```jsx
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className="custom-input" onClick={onClick} ref={ref}>
    {value || 'Select a date'}
  </button>
));

const CustomInputDatePicker = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
};

export default CustomInputDatePicker;
```

### Styling
To customize the styling of the datepicker, you can override the default CSS classes or provide your own CSS:

```css
/* Custom styles for the datepicker */
.custom-input {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}
```

```jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

const StyledDatePicker = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="custom-datepicker"
    />
  );
};

export default StyledDatePicker;
```

## Conclusion
`react-datepicker` is a powerful and flexible datepicker component for React applications. With its wide range of props and customization options, it can be adapted to fit various use cases and design requirements. Refer to the official [react-datepicker documentation](https://reactdatepicker.com/) for more detailed information and advanced usage.

