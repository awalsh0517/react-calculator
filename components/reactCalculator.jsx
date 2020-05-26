import React, { useState } from 'react'
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../public/javascript/operatorConstants'
import calculator from '../public/javascript/calculator'

const validateInputs = ({ num1, num2 }) => ((
  num1.length > 0 && Number.isNaN(num1)
) && (num2.length > 0 && Number.isNaN(num2)))

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState(ADD)
  const [total, setTotal] = useState('')
  const [validationError, setValidationError] = useState('')

  const updateNum1 = (event) => {
    setNum1(event.target.value)
  }

  const updateNum2 = (event) => {
    setNum2(event.target.value)
  }

  const updateOperator = (event) => {
    setOperator(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (validateInputs({ num1, num2 })) {
      setValidationError('')
      setTotal(calculator([Number(num1), Number(num2)], operator))
    } else {
      setValidationError('Please enter a number in each field')
      setTotal('')
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <form onSubmit={handleFormSubmit}>
        <input name="number1" id="number1" type="text" value={num1} onChange={updateNum1} />
        <select name="operators" onChange={updateOperator} value={operator}>
          <option value={ADD}>+</option>
          <option value={SUBTRACT}>-</option>
          <option value={MULTIPLY}>*</option>
          <option value={DIVIDE}>/</option>
        </select>
        <input name="number2" id="number2" type="text" value={num2} onChange={updateNum2} />
        <button type="submit">=</button>
        <input type="text" disabled value={total} />
      </form>
      {validationError && (
        <div className="validation">{validationError}</div>
      )}
    </div>
  )
}
