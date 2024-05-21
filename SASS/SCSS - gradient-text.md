# SCSS - Gradient text

```SCSS

// Gradient Text Styling
.heading {
    // Basic text styling
    font-size: 1.5em; // Example size, adjust as needed
    font-weight: bold; // Bold text
    text-align: center; // Center-align text

    // Make the text block only as wide as its content
    display: inline-block;

    // Apply a linear gradient as a background from left to right
    background-image: linear-gradient(to right, $custom-color-1, $custom-color-2);

    // Clip the background so it only shows where the text is, creating a gradient text effect
    -webkit-background-clip: text;
    background-clip: text;

    // Make the text color transparent to show the background
    color: transparent;
}

```
