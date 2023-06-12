(function () {

  const CANVAS_WIDTH = 500
  const CANVAS_HEIGHT = 500

  const canvas = document.getElementById('game-canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  const ctx = canvas.getContext('2d')

  function animate() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    ctx.fillStyle = 'red'
    ctx.fillRect(0, 0, 20, 20)

    requestAnimationFrame(animate)
  }

  animate()

})()