import React from 'react'

const Card = props => {
  const { title, date, copyright, explanation, url } = props.data

  return (
    <div>
      <h2 className='title'>{title}</h2>
      <p className='copyright'>By: {copyright}</p>
      <p className='date'>Date: {date}</p>
      <p className='paragraph'>{explanation}</p>
      <img src={url} alt='APOD' />
    </div>
  )
}

export default Card
