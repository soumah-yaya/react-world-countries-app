import React from 'react'

import './image.css'
type ImageProps ={
    src:string;
    alt:string;
}
const Image = ({ src, alt }: ImageProps) => {
    return (
        <>
            <img className='image' src={src} alt={alt} />
        </>
    )
}

export default Image