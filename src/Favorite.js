import React from 'react'

const Favorite = ({faveSong}) => {

  const loaded = () => (
    <div className='favorite'>
      <h2>Favorite Songs List</h2>
      <div className='fave-container'>
        {faveSong.map((song) => (
          <article>
            <h5>{song.title}</h5>
            <h5>{song.artist}</h5>
            <h5>{song.time}</h5>
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