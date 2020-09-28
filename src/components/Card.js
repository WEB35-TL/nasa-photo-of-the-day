import React from 'react'

const Card = props => {
  const { title, date, copyright, explanation, url } = props.data

  return (
    <div className='card'>
      <header>
        <img
          src='https://lh3.googleusercontent.com/proxy/4kpEh7h5j14KUcCfkwuwGkqBykheU_TCtmx5yePpouEEVFmvWU9r1KEApKlnay4rSVNYkEbJxRF4_8cs443Zqin3jrYfaHYLLmQcdqI5kLbCMnNWm68'
          alt='logo'
          className='logo'
        />
        <h1>Nasa's Photo of the Day</h1>
      </header>
      <div className='content'>
        <img src={url} className='head-img' alt='APOD' />
        <h2 className='title'>{title}</h2>
        <p className='copyright'>By: {copyright}</p>
        <p className='date'>Date: {date}</p>
        <p className='paragraph'>{explanation}</p>
      </div>
    </div>
  )
}

export default Card
