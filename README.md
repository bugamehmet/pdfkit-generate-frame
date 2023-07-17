# pdfkit-generate-frame

### generateFrame Function

This function is used to generate a frame in a PDF document using the PDFKit library.

#### Usage

1. Import the PDFKit library:

   ```javascript
   const PDFDocument = require('pdfkit');
   ```

2. Create a new PDF document:

   ```javascript
   const doc = new PDFDocument();
   ```

3. Call the `generateFrame` function to generate the frame:

   ```javascript
   generateFrame(doc);
   ```

4. Customize the frame dimensions and appearance:

   - Adjust the `frameX` and `frameY` variables to set the coordinates of the top-left corner of the frame.
   - Modify the `frameWidth` and `frameHeight` variables to set the width and height of the frame.
   - Change the `frameThickness` variable to adjust the thickness of the frame in pixels.
   - Update the color values (`#000000`) in the `drawRect` function calls to set the color of the frame.

#### Example

```javascript
function generateFrame(doc) {
  const frameX = 15; // X coordinate of the left edge of the frame
  const frameY = 30; // Y coordinate of the top edge of the frame
  const frameWidth = 570; // Width of the frame
  const frameHeight = 750; // Height of the frame
  const frameThickness = 2; // Thickness of the frame in pixels

  const drawRect = (x, y, width, height, color) => {
    doc.rect(x, y, width, height).fill(color);
  };

  drawRect(frameX, frameY, frameWidth, frameThickness, '#000000'); // Top frame
  drawRect(frameX, frameY + frameHeight - frameThickness, frameWidth, frameThickness, '#000000'); // Bottom frame
  drawRect(frameX, frameY + frameThickness, frameThickness, frameHeight - 2 * frameThickness, '#000000'); // Left frame
  drawRect(frameX + frameWidth - frameThickness, frameY + frameThickness, frameThickness, frameHeight - 2 * frameThickness, '#000000'); // Right frame
}
```

Feel free to modify and enhance the provided information based on your specific project needs.
