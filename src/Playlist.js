import React from 'react'

// playlist addFaveSong

const myPlaylist = (props) => {
    const {playlist, addFaveSong} = props

    const loaded = () => (
        <div>
        {playlist.map((song) => (
            <h3>{playlist.title}</h3>
            <h3>{playlist.artist}</h3>
            <h4>{playlist.time}</h4>
            <button
              onClick={() => 
                addFaveSong(song)}>
                <3
            </button>
        ))}
        </div>
    );

    const loading = () => (
        <div>
            <h1>Loading...</h1>
        </div>
    )

    return playlist.length > 0 ? loaded() : loading()
}

export default myPlaylist
