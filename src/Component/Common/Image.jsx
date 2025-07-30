import React from 'react'

const Image = ({ src, alt, ...args }) => {
    return (
        <img src={src} alt={alt} {...args} />
    )
}

export default Image