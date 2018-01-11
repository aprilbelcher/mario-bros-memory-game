import React from 'react'



const Image = function(props) {
let charStyle = {
  height: 110,
  width: 110,
  margin: 10 
  }
  
  return(
      <img onClick={props.func} style={charStyle} src={props.background} alt='Something here'/>
  )
}

export default Image;
