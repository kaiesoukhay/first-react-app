import React from 'react'
import PropsTypes from 'prop-types'

const Image = (props) => <img  src={props.imagepath} alte="default"></img>

Image.prototypes ={
    imagepath : PropsTypes.string
}
export default Image 