
import React from 'react'

export default function Home({categories}) {
  return (

    <div>
        {categories.map(item => (<h1>{item.name}</h1>))} 
    </div>
  )
}

