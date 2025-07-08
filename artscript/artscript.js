// Initialize canvas and context
const canvas = document.createElement("canvas");
canvas.width = 600; // Set canvas width
canvas.height = 600; // Set canvas height
document.body.appendChild(canvas); // Append canvas to the body
const c = canvas.getContext("2d"); // Get 2D drawing context

// Function to draw a Mondrian-style image
function drawMondrian() {
  // Background color
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Define colors
  const colors = ['red', 'blue', 'yellow', 'black'];

  // Draw rectangles
  const rectangles = [
    { x: 0, y: 0, width: 200, height: 200, color: 'red' },
    { x: 200, y: 0, width: 400, height: 100, color: 'blue' },
    { x: 0, y: 200, width: 150, height: 400, color: 'yellow' },
    { x: 150, y: 200, width: 450, height: 200, color: 'black' },
    { x: 150, y: 400, width: 300, height: 200, color: 'red' },
    { x: 450, y: 400, width: 150, height: 200, color: 'blue' },
  ];

  rectangles.forEach(rect => {
    c.fillStyle = rect.color;
    c.fillRect(rect.x, rect.y, rect.width, rect.height);
  });

  // Draw black grid lines
  c.strokeStyle = 'black';
  c.lineWidth = 10;
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(600, 0);
  c.lineTo(600, 600);
  c.lineTo(0, 600);
  c.closePath();
  c.stroke();

  c.beginPath();
  c.moveTo(200, 0);
  c.lineTo(200, 600);
  c.moveTo(150, 200);
  c.lineTo(600, 200);
  c.moveTo(450, 400);
  c.lineTo(450, 600);
  c.moveTo(0, 400);
  c.lineTo(600, 400);
  c.stroke();
}

// Call the function to draw the Mondrian image
drawMondrian();