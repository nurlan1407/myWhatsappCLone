import React, { FC } from 'react'
import ReactDOM from 'react-dom'


interface PhotoUploadProps{
  pickImage:(src:string)=>void,
}
const PhotoUpload: FC<PhotoUploadProps> = ({ pickImage }) => {
  const getImage = (e:React.ChangeEvent<HTMLInputElement>) =>{
      if(e.target.files && e.target.files[0]){
        const file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)
        pickImage(imageSrc)
      }
  }
  const component = (<input type='file' id='file-picker' onChange={(e)=>{getImage(e)}}  hidden></input>)
  
  return ReactDOM.createPortal(
    component,
    document.getElementById('root')!
  )
}

export default PhotoUpload;