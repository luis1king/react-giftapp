import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';



export const GiftGrid = ({e}) => {

    const [images,setImages] = useState([])

    useEffect(() => {
       getGifs(e)
       .then(setImages)
    }, [e]);


  return (
    <div><h3>{e}</h3>
    
        {
            images.map(img=> (
               <GiftGridItem key = {img.id} {...img}/>
            ))
        }
    </div>
  )
}


