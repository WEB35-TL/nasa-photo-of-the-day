import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

import './Style.scss'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=D03KIoirG1gp8WbKwZ4KO81EBgq4TzKC0uIEbjdi`
      )
      .then(res => setData(res.data))
  }, [])

  return (
    <div className='App'>
      <Card data={data} />
    </div>
  )
}

export default App
