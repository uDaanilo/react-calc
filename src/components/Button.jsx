import React from 'react'
import './Button.css'

export default props => {
   return (
   <button 
   onClick={e => props.click(props.label)}
   className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.triple ? 'triple' : ''}
      ${props.double ? 'double' : ''}
   `}>{props.label}</button>
   )
}