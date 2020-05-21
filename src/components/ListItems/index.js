import './index.css'
import React from 'react'

import ImageCard from '../ImageCard'


const ListItem = ({items})=>{

  const images =items.map(( image)=>{
    return <ImageCard key={image.id} image={image} />
  })


  return(
    <div className="image-list">{images}</div>
  )
}


export default ListItem
