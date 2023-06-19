import calculateMovementDirection from './Web/calculateMovementDirection'

(function () {

  const CANVAS_WIDTH = 500
  const CANVAS_HEIGHT = 500

  const canvas = document.getElementById('game-canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  let arrowPressedState = {
    LEFT: false,
    RIGHT: false,
    UP: false,
    DOWN: false,
  }

  let movementHorizontalModifier = {
    LEFT: -1,
    RIGHT: 1,
    UP: 0,
    DOWN: 0,
  }

  let movementVerticalModifier = {
    LEFT: 0,
    RIGHT: 0,
    UP: -1,
    DOWN: 1,
  }

  let positionHorizontal = 250
  let positionVertical = 250

  const ctx = canvas.getContext('2d')

  function animate() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    const movements = calculateMovementDirection(arrowPressedState)
    if (movements.length > 0) {
      positionHorizontal += movements.reduce((acc, movement) => acc + movementHorizontalModifier[movement], 0)
      positionVertical += movements.reduce((acc, movement) => acc + movementVerticalModifier[movement], 0)
    }

    ctx.fillStyle = 'red'
    ctx.fillRect(positionHorizontal, positionVertical, 20, 20)

    requestAnimationFrame(animate)
  }

  function initUserControls() {
    const arrowLeft = 37
    const arrowUp = 38
    const arrowRight = 39
    const arrowDown = 40

    document.onkeydown = function (e) {
      if (e.keyCode === arrowLeft) {
        arrowPressedState.LEFT = true
      }

      if (e.keyCode === arrowRight) {
        arrowPressedState.RIGHT = true
      }

      if (e.keyCode === arrowUp) {
        arrowPressedState.UP = true
      }

      if (e.keyCode === arrowDown) {
        arrowPressedState.DOWN = true
      }
    };

    document.onkeyup = function (e) {
      if (e.keyCode === arrowLeft) {
        arrowPressedState.LEFT = false
      }

      if (e.keyCode === arrowRight) {
        arrowPressedState.RIGHT = false
      }

      if (e.keyCode === arrowUp) {
        arrowPressedState.UP = false
      }

      if (e.keyCode === arrowDown) {
        arrowPressedState.DOWN = false
      }
    };
  }

  animate()
  initUserControls()

})()