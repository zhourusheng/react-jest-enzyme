import React from 'react'

const NumberCount = props => {
  const {
    dish,
    count,
    addToCart,
    minusDish,
    minusPoint,
    minusDishToCart
  } = props

  return (
    <div className='number-count'>
      {count > 0 ? (
        <>
          <div className='minus'>
            <span className='minus-icon' />
            <span
              className='minus-trigger'
              onClick={() => minusDishToCart(dish)}
            />
          </div>
          <div className='num'>{count}</div>
        </>
      ) : null}
      <div className='plus'>
        <span className='plus-icon' />
        <span className='plus-trigger' onClick={() => addToCart(dish)} />
      </div>
    </div>
  )
}

export default NumberCount
