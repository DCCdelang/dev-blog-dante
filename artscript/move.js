// Initialize canvas and context
const canvas = document.createElement("canvas");
canvas.width = 400; // Set canvas width
canvas.height = 400; // Set canvas height
document.body.appendChild(canvas); // Append canvas to the body
const c = canvas.getContext("2d"); // Get 2D drawing context


// Set our starting variables
let width = 400, height = 300, score = 0, lives = 3, tick = 0, junk = []
let hero = { x: 100, y: 100, size: 10, speed: 2 }
let keys = { left: false, right: false, up: false, down: false }
let highScore = window.localStorage.getItem('highScore') || 0
          
// Respond to arrow keys and start our ~60fps game loop
window.onkeydown = function (e) { keyChange(true, e) }
window.onkeyup = function (e) { keyChange(false, e) }
gameLoop()
          
function gameLoop (timer) {
  // Clear the canvas
  c.fillStyle = 'ivory'
  c.fillRect(0, 0, width, height)
          
  // Move our hero (without going outside screen)
  if (keys.left && hero.x > 0) hero.x -= hero.speed * 2
  if (keys.right && hero.x + hero.size < width) hero.x += hero.speed
  if (keys.up && hero.y > 0) hero.y -= hero.speed
  if (keys.down && hero.y + hero.size < height) hero.y += hero.speed
          
  // Move junk, removing if off screen
  for (let i = junk.length - 1; i >= 0; i--) {
    junk[i].x -= junk[i].speed
    if (junk[i].x < -50) junk.splice(i, 1)
  }
          
  // See if we're touching any junk, and respond accordingly
  if (lives > 0) detectHit()
  else {
    c.fillStyle = 'black'
    c.font = '50px monospace'
    c.fillText('GAME OVER', 70, 150)
  }
          
  // Draw our 'hero'
  c.fillStyle = 'blue'
  c.fillRect(hero.x, hero.y, hero.size, hero.size)
          
  // Draw all the junk flying at the hero
  for (let i = 0; i < junk.length; i++) {
    c.fillStyle = junk[i].good ? 'lime' : 'red'
    c.fillRect(junk[i].x, junk[i].y, junk[i].size, junk[i].size)
  }
          
  // Show time and score
  c.fillStyle = 'black'
  c.font = '16px monospace'
  c.fillText('Lives: ' + lives + '     Score: ' + score, 10, 20)
  c.fillText('High score: ' + highScore, 250, 20)
          
  // add random junk (getting faster over time)
  let gameSpeed = Math.max(2, 50 - Math.round(timer / 1000 / 3))
  if (tick % gameSpeed == 0) {
    junk.push({
      x: width, // just off the right edge of screen
      y: Math.round(Math.random() * (height + 5) - 5), // -5 to 300
      speed: Math.round(Math.random() * 3 + 1), // 1 to 4
      good: Math.random() > 0.6, // mostly bad/red
      size: Math.round(Math.random() * 11 + 4) // 4 to 15
    })
  }
          
  // Run the loop again
  tick++
  window.requestAnimationFrame(gameLoop)
}
          
function keyChange (onOff, e) {
  for (let i = 0; i < Object.keys(keys).length; i++) {
    if (e.key.toLowerCase() == 'arrow' + Object.keys(keys)[i]) {
      keys[Object.keys(keys)[i]] = onOff
      e.preventDefault()
    }
  }
}
          
function detectHit () {
  for (let i = 0; i < junk.length; i++) {
    if (
        hero.x < junk[i].x + junk[i].size &&
        hero.x + hero.size > junk[i].x &&
        hero.y < junk[i].y + junk[i].size &&
        hero.y + hero.size > junk[i].y
    ) {
      if (junk[i].good) { // we got some good junk
        score += junk[i].size
        if (score > highScore) {
          highScore = score
          window.localStorage.setItem('highScore', highScore)
        }
      } else lives -= 1 // we hit a bad one; lose a life
      junk.splice(i, 1) // either way, we remove this junk
    }
  }
}