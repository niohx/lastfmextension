import React from 'react'

export const SimilarArtist=(request)=>({
  <div>
    {request.state.map(artist=>{
      return(
        <div>
          <img src= {artist.similar_artist.image[1]['#text']} />
          {artist.similar_artist.name}
        </div>
      )
    }}
  </div>
})
