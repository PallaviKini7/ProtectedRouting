import React from 'react'
import './DisplayScreen.css'

const DisplayScreen = ({posts,loading}) => {
    if(loading)
    {
        return <h1>Loading !...</h1>
    }
  
  return (
    <div>
        {
            posts.map(item=>
                (
                    <div className='item-title'>{item.title}</div>
                ))
        }
      
    </div>
  )
}

export default DisplayScreen