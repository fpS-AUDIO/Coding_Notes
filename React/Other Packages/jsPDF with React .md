# jsPDF with React Documentation

## Introduction

jsPDF is a JavaScript library used to generate PDF documents in the browser. This documentation provides an overview of how to use jsPDF with React, including theory, examples, and common patterns.

## Installation

To use jsPDF in your React project, you need to install it using npm:

```bash
npm install jspdf
```

## Basic Usage

### Importing jsPDF

First, import the jsPDF library in your React component:

```javascript
import jsPDF from "jspdf";
```

### Generating a Simple PDF

Create a simple PDF document with some text:

```javascript
function generatePDF() {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add some text to the PDF at coordinates (10, 10)
  doc.text("Hello world!", 10, 10);

  // Save the generated PDF with the name 'output.pdf'
  doc.save("output.pdf");
}
```

### Adding a Button to Generate PDF

In your React component, add a button to trigger the PDF generation:

```javascript
import React from "react";
import jsPDF from "jspdf";

function MyComponent() {
  function generatePDF() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add some text to the PDF at coordinates (10, 10)
    doc.text("Hello world!", 10, 10);

    // Save the generated PDF with the name 'output.pdf'
    doc.save("output.pdf");
  }

  return (
    <div>
      {/* Button to generate PDF when clicked */}
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}

export default MyComponent;
```

## Advanced Usage

### Adding Images

You can also add images to your PDF:

```javascript
function generatePDFWithImage() {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Base64 encoded image data
  const imgData = "data:image/jpeg;base64,...";

  // Add the image to the PDF at coordinates (15, 40) with width 180 and height 160
  doc.addImage(imgData, "JPEG", 15, 40, 180, 160);

  // Save the generated PDF with the name 'output_with_image.pdf'
  doc.save("output_with_image.pdf");
}
```

### Adding Multiple Pages

If you need multiple pages, you can add them like this:

```javascript
function generateMultiPagePDF() {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add text to the first page
  doc.text("Page 1", 10, 10);

  // Add a new page
  doc.addPage();

  // Add text to the second page
  doc.text("Page 2", 10, 10);

  // Save the generated PDF with the name 'multi_page.pdf'
  doc.save("multi_page.pdf");
}
```

## Styling Text

jsPDF supports various text styling options:

```javascript
function generateStyledPDF() {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set the font to 'helvetica'
  doc.setFont("helvetica");

  // Set the font type to 'bold'
  doc.setFontType("bold");

  // Set the font size to 22
  doc.setFontSize(22);

  // Add styled text to the PDF at coordinates (10, 10)
  doc.text("Styled Text", 10, 10);

  // Save the generated PDF with the name 'styled.pdf'
  doc.save("styled.pdf");
}
```

## Common Patterns

### Generating PDF from HTML

You can use libraries like `html2canvas` to capture HTML content and then add it to the PDF:

```javascript
import html2canvas from 'html2canvas';

function generatePDFFromHTML() {
  // Capture the content of the specified HTML element and convert it to canvas
  html2canvas(document.querySelector("#content")).then(canvas => {
    // Convert the canvas to an image in PNG format
    const imgData = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the captured image to the PDF at coordinates (10, 10)
    doc.addImage(imgData, 'PNG', 10, 10);

    // Save the generated PDF with the name 'html_to_pdf.pdf'
    doc.save('html_to_pdf.pdf');
  });
}

// In your component
<div id="content">
  {/* Your HTML content to capture */}
</div>
<button onClick={generatePDFFromHTML}>Generate PDF from HTML</button>
```

## References

- [jsPDF Official Documentation](https://github.com/parallax/jsPDF)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
