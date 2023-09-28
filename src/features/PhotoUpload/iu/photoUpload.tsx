import React, { FC } from 'react'
import ReactDOM from 'react-dom'

const PhotoUpload: FC = ({  }) => {
  const component = (<input type='file' id='file-picker' onAbort={()=>{console.log("EXIT");
  }} hidden></input>)
  
  return ReactDOM.createPortal(
    component,
    document.getElementById('root')!
  )
}

export default PhotoUpload;