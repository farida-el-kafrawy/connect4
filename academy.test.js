const academy = require('./academy')

const scenarios = [ { board: [
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
      null,
      null,
      null,
      null,
      null,
      "yellow",
      null
    ],
    [
      null,
      null,
      "yellow",
      "red",
      "yellow",
      "red",
      null
    ],
    [
      null,
      "red",
      "red",
      "yellow",
      "red",
      "yellow",
      null
    ],
    [
      "red",
      "yellow",
      "yellow",
      "red",
      "yellow",
      "red",
      null
    ]
  ], 
  turn: 17,
  expected: "yellow" } ]
scenarios.forEach(({board, expected}) => {
    describe('When calling the checkWinner function', () => {
        it('should do what you expect', () => {
            let result;
            beforeEach(() => {
            turn = 17
            result = academy.checkWinner(api_board) // ACT!
            })
            it(`should return ${expected}`, () => {
            expect(result).toEqual(expected) // ASSERT!
        });
      })
    });
})
    