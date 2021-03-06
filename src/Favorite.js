import React from 'react'
import "./Favorite.css"

const Favorite = ({faveSong}) => {

  const loaded = () => (
    <div className='favorite'>
      <h2>Favorite Songs List</h2>
      <div className='fave-container'>
        {faveSong.map((tunr) => (
          <article>
            <h5>{tunr.title}</h5>
            <h5>{tunr.artist}</h5>
            <h5>{tunr.time}</h5>
          </article>
        ))}
      </div>
    </div>
  )

  const loading = () => (
    <div className='favorite'>
    <h2>Favorite Songs List</h2>
    <div className='fave-container'>
      <h5>Song Artist Time</h5>
    </div>
  </div>
  )

  return faveSong.length > 0 ? loaded() : loading()
}

export default Favorite