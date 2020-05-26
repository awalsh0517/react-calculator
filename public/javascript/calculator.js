import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './operatorConstants'

const calculator = {
  [ADD]: (a, b) => a + b,
  [SUBTRACT]: (a, b) => a - b,
  [MULTIPLY]: (a, b) => a * b,
  [DIVIDE]: (a, b) => a / b,
}

export default (inputs, operator) => calculator[operator](...inputs)
