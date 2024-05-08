# Comprehensive CSS Grid Layout Documentation

```css
/* --- CSS GRID LAYOUT COMPLETE REFERENCE --- */

/* Overview:
   CSS Grid Layout is a flexible and comprehensive layout system.
   It provides control over rows and columns, allowing precise control over structure and layout.
*/

/* ------------------------------ Grid Container ------------------------------ */

.container {
  display: grid; /* Establishes this element as a grid container */

  /* grid-template-columns:
       Specifies the number and width of grid columns.
       - 1fr: Fractional unit, divides remaining space
       - fixed unit (px, em, etc.)
       - min-content: The column width is the smallest possible size of the content.
       - max-content: The column width is the highest possible size of the content.
       - auto: Automatically determines based on content
       - minmax(min, max): Min/max values to set a flexible range
       - repeat(x, pattern): Repeats a pattern x times
       - auto-fit: Automatically resizes to fit the number of columns
       - auto-fill: Similar to auto-fit, but ensures all slots are filled
    */

  grid-template-columns: repeat(
    auto-fit,
    minmax(320px, 1fr)
  ); /* Automatically fills with min/max limits */

  /* grid-template-rows:
       Defines the number and height of grid rows.
       Same possible values as columns.
    */
  grid-template-rows: 100px auto 50px; /* Fixed height for header/footer, flexible middle row */

  /* grid-template:
       Shorthand to define rows and columns at once.
       Format: "rows / columns".
    */
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);

  /* grid-auto-rows & grid-auto-columns:
       Specifies a default size for rows/columns not explicitly defined.
       Values: fixed unit, auto, minmax(min, max)
    */
  grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(100px, auto);

  /* gap, grid-row-gap, grid-column-gap:
       Sets space between grid rows/columns.
       `gap` is shorthand for row and column gaps.
    */
  gap: 10px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;

  /* grid-auto-flow:
       Determines how items are auto-placed in the grid.
       Possible values:
       - row: Places items in rows, wraps to next row if needed
       - column: Places items in columns, wraps to next column if needed
       - row dense / column dense: Tries to fill gaps earlier in the grid
    */
  grid-auto-flow: row dense;

  /* Content Alignment and Distribution */

  /* justify-items:
       Aligns individual items horizontally within their grid cells.
       Possible values:
       - start: Aligns to the start of the cell
       - end: Aligns to the end of the cell
       - center: Centers within the cell
       - stretch: Fills the whole width of the cell (default)
    */
  justify-items: stretch;

  /* align-items:
       Aligns individual items vertically within their grid cells.
       Possible values:
       - start: Aligns to the start of the cell
       - end: Aligns to the end of the cell
       - center: Centers within the cell
       - stretch: Fills the whole height of the cell (default)
    */
  align-items: stretch;

  /* justify-content:
       Aligns the entire grid horizontally within the container.
       Possible values:
       - start: Aligns to the start of the container
       - end: Aligns to the end of the container
       - center: Centers within the container
       - stretch: Stretches to fill the container
       - space-around: Distributes extra space around items
       - space-between: Distributes extra space between items
       - space-evenly: Distributes extra space evenly around items
    */
  justify-content: space-between;

  /* align-content:
       Aligns the entire grid vertically within the container.
       Possible values:
       - start: Aligns to the start of the container
       - end: Aligns to the end of the container
       - center: Centers within the container
       - stretch: Stretches to fill the container
       - space-around: Distributes extra space around items
       - space-between: Distributes extra space between items
       - space-evenly: Distributes extra space evenly around items
    */
  align-content: space-between;

  /* Named Grid Areas:
       Defines a template of named areas.
       These are referenced in individual grid items using `grid-area`.
    */
  grid-template-areas:
    "header header header"
    "nav content sidebar"
    "footer footer footer";
}

/* ------------------------------ Grid Items ------------------------------ */

.child-element {
  /* Positioning Items:
       Specifies how the element is placed within the grid lines.
       grid-column: "start / end" (or span n)
       grid-row: "start / end" (or span n)
    */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  /* Shorthand for grid-column/grid-row:
       grid-column: 1 / span 2
       grid-row: 1 / span 2
    */
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;

  /* Aligning Individual Items:
       align-self: Vertically aligns this item inside its grid cell
       justify-self: Horizontally aligns this item inside its grid cell
       Possible values (align-self & justify-self):
       - start: Aligns to the start of the cell
       - end: Aligns to the end of the cell
       - center: Centers within the cell
       - stretch: Fills the whole cell (default)
    */
  align-self: center;
  justify-self: center;

  /* Assigning to Named Areas:
       `grid-area` refers to a named area specified in `grid-template-areas`.
       Shorthand for row-start / col-start / row-end / col-end.
    */
  grid-area: header;
}

/* ------------------------------ Responsive Grid Example ------------------------------ */

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "header header"
      "nav content"
      "footer footer";
  }
}
```
