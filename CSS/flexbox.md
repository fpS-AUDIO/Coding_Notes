# Complete Flexbox Documentation

```css
/* --- FLEXBOX COMPLETE REFERENCE --- */

/* Introduction:
   Flexbox is a one-dimensional layout system that distributes space between items within a container.
   It arranges items along one axis at a time, allowing responsive design, alignment, and spacing. */

/* ------------------------------------------------------------------------------------------ */

/* Flexbox Container */

.container {
  display: flex;
  /* Establishes the .container as a flex container,
       making its children flex items. */

  /* Direction and Wrapping */

  flex-direction: row;
  /* Sets the direction of the main axis:
       - row: Items are arranged horizontally in normal order.
       - row-reverse: Items arranged horizontally in reverse order.
       - column: Items arranged vertically in normal order.
       - column-reverse: Items arranged vertically in reverse order. */

  flex-wrap: nowrap;
  /* Determines if flex items will wrap onto multiple lines:
       - nowrap: All items will be on one line (default).
       - wrap: Items wrap onto multiple lines from top to bottom or left to right.
       - wrap-reverse: Items wrap in the opposite direction. */

  flex-flow: row nowrap;
  /* Shorthand for flex-direction and flex-wrap. */

  /* Alignment */

  justify-content: flex-start;
  /* Aligns items along the main axis:
       - flex-start: Items align to the start of the container.
       - flex-end: Items align to the end of the container.
       - center: Items align to the center.
       - space-between: Items spread evenly, with the first at the start and the last at the end.
       - space-around: Items have equal space around them.
       - space-evenly: Items have even space between and around them. */

  align-items: stretch;
  /* Aligns items along the cross axis:
       - stretch: Items stretch to fill the container (default).
       - flex-start: Aligns to the start of the cross axis.
       - flex-end: Aligns to the end of the cross axis.
       - center: Aligns items to the center.
       - baseline: Aligns items along their baseline. */

  align-content: stretch;
  /* Aligns the flex lines when there's extra space on the cross axis:
       - stretch: Lines stretch to occupy available space (default).
       - flex-start: Lines align to the start.
       - flex-end: Lines align to the end.
       - center: Lines align to the center.
       - space-between: Lines spread evenly, with the first at the start and the last at the end.
       - space-around: Lines have equal space around them.
       - space-evenly: Lines have even space between and around them. */

  /* Gap */

  gap: 10px;
  /* Defines the gap between items and lines in the flex container (horizontal and vertical). */
}

/* ------------------------------------------------------------------------------------------ */

/* Child Items of Flexbox Container */

.container_item {
  flex-grow: 0;
  /* Sets the ability of an item to grow if necessary:
       - <number>: 0 means the item will not grow, 1 means it will grow. */

  flex-shrink: 1;
  /* Sets the ability of an item to shrink if necessary:
       - <number>: 0 means the item will not shrink, 1 means it will shrink. */

  flex-basis: auto;
  /* Defines the default size of an item before the remaining space is distributed:
       - <length>: Can be any unit like px, %, etc.
       - auto: Default size determined by its content.
       - 0: Makes the item as small as possible, maximizing flexibility. */

  flex: 0 1 auto;
  /* Shorthand for flex-grow, flex-shrink, and flex-basis. */
  /* Example: 'flex: 1' means flex-grow is 1 and the rest are automatic. */

  align-self: auto;
  /* Overrides the align-items property for individual items:
       - auto: Uses the value of align-items (default).
       - flex-start: Aligns the item to the start of the cross axis.
       - flex-end: Aligns the item to the end of the cross axis.
       - center: Aligns the item to the center.
       - baseline: Aligns the item along its baseline.
       - stretch: Stretches the item to fill the container. */

  order: 0;
  /* Changes the order in which items appear in the flex container:
       - <integer>: Items with a higher number appear later.
       - 0 is the default value. */
}

/* ------------------------------------------------------------------------------------------ */

/* Practical Example */

.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.flex-container .flex-item {
  flex: 1; /* Each item will grow equally. */
}

/* Advanced Example: Responsive Layout */

.responsive-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.responsive-container .responsive-item {
  flex-basis: calc(
    33.33% - 20px
  ); /* Items adapt to one-third of the container width minus the gap. */
  flex-grow: 1;
  margin-bottom: 20px; /* Ensure rows are evenly spaced. */
}
```
