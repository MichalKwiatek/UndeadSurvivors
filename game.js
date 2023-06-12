(function () {

  const CANVAS_WIDTH = 500
  const CANVAS_HEIGHT = 500

  const canvas = document.getElementById('game-canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  let movement = null
  let positionHorizontal = 250

  const ctx = canvas.getContext('2d')

  function animate() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    if (movement === 'LEFT') {
      positionHorizontal--
    } else {
      
    }

    ctx.fillStyle = 'red'
    ctx.fillRect(positionHorizontal, 0, 20, 20)

    requestAnimationFrame(animate)
  }

  function initUserControls() {
    const arrowLeft = 37
    const arrowUp = 38
    const arrowRight = 39
    const arrowDown = 40

    document.onkeydown = function (e) {
      if (e.keyCode === arrowLeft) {
        movement = 'LEFT'
      }
    };

    document.onkeyup = function (e) {
      if (e.keyCode === arrowLeft) {
        movement = null
      }
    };
  }

  animate()
  initUserControls()

})()