function generateFrame() {
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
