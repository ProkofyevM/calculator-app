import './App.css'
import { useState } from 'react'
import React from 'react'

const Button = ({ number, onClick }) => {
   console.log(number, onClick)
   return (
      <button  onClick={onClick}>
         {number}
      </button>
   )
}

export const App = () => {
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   const [operand1, setOperand1] = useState('')
   const [operator, setOperator] = useState('')
   const [operand2, setOperand2] = useState('')
   const [isResult, setIsResult] = useState(false)

   const handleClickOperand1 = num => {

      if (operator) {
         setOperand2(acc => {
            if (acc === '0') {
               return num
            }
            return acc + num
            })
      } else {
         setOperand1(acc => {
         if (acc === '0') {
            return num
         }
         return acc + num
         })
      }
   }

   const handleClickOperator = operator => {
      setIsResult(false)
      if (operand1) {
         setOperator(operator)
      }
   }

   const handleClickCancel = () => {
      if (operand1 || operator || operand2) {
         setOperand1('')
         setOperator('')
         setOperand2('')
         setIsResult(false)
      }
   }

   const calcResult =(op1, op, op2)=> {
      const num1 = Number(op1)
      const num2= Number(op2)

      if(op === '+'){
         return num1 + num2
      }else if(op === '-'){
         return num1 - num2
      }
   }

   const handleClickEqual = () => {
      if (operand2) {
         const result = calcResult(operand1, operator, operand2);
         setOperand1(result.toString())
         setOperator("")
         setOperand2("")
         setIsResult(true)
   }
}

   return (
      <div className='app'>
         <div className='calc'>
            <input
               type='text'
               value={operand1 + operator + operand2}
               className={isResult ? 'inp result' : 'inp'}
            ></input>
            <button className='btn1' onClick={() => handleClickCancel()}>
               c
            </button>
            <button className='btn1' onClick={() => handleClickOperator('+')}>
               +
            </button>
            <button className='btn1' onClick={() => handleClickOperator('-')}>
               -
            </button>
            {numbers.map(number => (
               <Button key = {number} number={number} onClick={() => handleClickOperand1(number)} />
            ))}
            <button className = 'btn1 btn'  onClick={handleClickEqual}>
               =
            </button>
         </div>
      </div>
   )
}


