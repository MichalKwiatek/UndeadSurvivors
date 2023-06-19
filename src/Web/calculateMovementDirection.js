function calculateMovementDirection(arrowPressedState) {
  try {
    const arrowOpposites = {
      LEFT: 'RIGHT',
      RIGHT: 'LEFT',
      UP: 'DOWN',
      DOWN: 'UP',
    }

    const arrowNeighbours = {
      LEFT: ['UP', 'DOWN'],
      RIGHT: ['UP', 'DOWN'],
      UP: ['LEFT', 'RIGHT'],
      DOWN: ['LEFT', 'RIGHT'],
    }

    const movementDirections = Object.keys(arrowPressedState)
      .filter(direction => arrowPressedState[direction])
      .map(direction => {
        if (!arrowPressedState[direction]) {
          return []
        }

        if (arrowPressedState[direction] && arrowPressedState[arrowOpposites[direction]]) {
          throw new Error('Incorrect arrow pressed state')
        }

        const neighbourArrowPressed = arrowNeighbours[direction].find(neighbour => arrowPressedState[neighbour])
        if (arrowPressedState[direction] && neighbourArrowPressed) {
          return [neighbourArrowPressed, direction]
        }

        return [direction]
      })

    return movementDirections
      .filter(movementDirection => movementDirection && movementDirection.length > 0)[0] || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export default calculateMovementDirection