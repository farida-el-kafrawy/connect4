const {winningBoard, findemptyspace} = require('./logic');

describe('When calling the winningBoard function with a board where yellows win diagonally', () => {
  it('should return true', () => {
    // Arrange
    board = [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "red",
        "red",
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "red",
        "red",
        "red",
        null,
        null,
        null
      ]
    ]
    // Act
    result = winningBoard(board)
    // Assert
    expect(result).toEqual(true)
  });
})


describe('When calling the winningBoard function with a board where yellows win horizontally', () => {
  it('should return true', () => {
    // Arrange
    board = [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "yellow",
        "red",
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "red",
        "red",
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        null,
        null,
        null
      ]
    ]
    // Act
    result = winningBoard(board)
    // Assert
    expect(result).toEqual(true)
  });
})

describe('When calling the winningBoard function with a board where red win vertically', () => {
  it('should return true', () => {
    // Arrange
    board = [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "red",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "yellow",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "red",
        "yellow",
        null,
        null,
        null
      ]
    ]
    // Act
    result = winningBoard(board)
    // Assert
    expect(result).toEqual(true)
  });
})

describe('When calling the findemptyspace function with a board', () => {
  it('should return true', () => {
    // Arrange
    board = [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "yellow",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "red",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "yellow",
        null,
        null,
        null,
        null
      ],
      [
        "red",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      [
        "red",
        "yellow",
        "red",
        "yellow",
        null,
        null,
        null
      ]
    ]
    b_column = 4
    // Act
    result = findemptyspace(board, b_column)
    // Assert
    expect(result).toEqual(5)
  });
})


