import React, { FC, useEffect, useState } from 'react'
import gif from 'public/whatsapp.gif'
import Input from 'shared/ui/input'
import Button from 'shared/ui/button'
import TextArea from 'shared/ui/textArea'
import { UseAppSelector } from 'store'
import defaultAvatar from 'public/default_avatar.png'
import CameraIcon from 'public/icons/icon_camera.svg'
import ContextMenu from 'shared/ui/contextMenu/contextMenu'
import PhotoLibrary from 'shared/ui/contextMenu/photoLibrary'
import PhotoUpload from 'features/PhotoUpload/iu/photoUpload'
import TakePhoto from 'features/TakePhoto/ui/TakePhoto'


const Authorization: FC = ({ }) => {
  const state = UseAppSelector(state => state.user)

  const [isContextVisible, setIsContextVisible] = useState<boolean>(false)
  const [isPhotoLibraryVisible, setIsPhotoLibraryVisible] = useState<boolean>(false)
  const [isPhotoUploadVisible, setIsPhotoUploadVisible] = useState<boolean>(false)
  const [isTakePhotoVisible, setIsTakePhotoVisible] = useState<boolean>(false)

  const [hover, setHover] = useState<boolean>(false)
  const [contextCoordinates, setContextCoordinates] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if((e.target as HTMLElement).id !== 'context-opener'){
      return
      //do notgin
    }
    setIsContextVisible(true)
    const { pageX, pageY } = e
    setContextCoordinates({ y: pageY, x: pageX })
  }
  const data = [
    { title: "Upload avatar", onClick:()=>{console.log("sss");
    setIsPhotoUploadVisible(true)}},
    { title: "Select avatar", onClick:()=>{setIsPhotoLibraryVisible(true)}},
    { title:"Delete avatar", onClick:()=>{}},
    { title:"Take photo", onClick:()=>{setIsTakePhotoVisible(true)}}
  ]

  useEffect(()=>{
      if(isPhotoUploadVisible==true){
        const inputFile = document.getElementById('file-picker') as HTMLInputElement
        inputFile.click()
        document.body.onfocus = (e)=>{
          setIsPhotoUploadVisible(false)
        }
      }

  },[isPhotoUploadVisible])

 

  return (
    <>
      <div className='wrapper'>
        <div className='flex justify-center items-center gap-2 h-fit border-box'>
          <img src={gif} className='' height={200} width={200} />
          <span className='text-7xl'>WhatsApp</span>
        </div>
        <span className='flex justify-center text-xl'>Create your profile</span>
        <div className='m-auto w-full flex justify-center gap-10 items-center py-3 border-box'>
          <div className='py-2'>
            <Input name={'Display Name'} type={"text"} label='Display Name' onChange={() => { }} value={""} />
            <TextArea name={'Bio'} type={"text"} label='Bio' onChange={() => { }} value={""}></TextArea>
            <Button onClick={() => { }}>
              Create Profile
            </Button>
          </div>
          <div className='relative w-60 h-60' id='context-opener'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) => {
              handleContextMenu(e)
            }}
          >
            {isPhotoLibraryVisible && <PhotoLibrary  onClose={()=>{setIsPhotoLibraryVisible(false)}} onSelect={()=>{}}/>}
            {isTakePhotoVisible && <TakePhoto onClose={()=>{setIsTakePhotoVisible(false)}}/>}
            {hover &&
              <div
                id='context-opener'
                className='absolute top-0 left-0 w-full h-full z-2 rounded-full flex flex-col justify-center items-center cursor-pointer bg-black bg-opacity-50'
              >
                <CameraIcon width={50} height={50} />
                <span className='text-base text-primary'>Add profile image</span>
              </div>
            }
            <img id='context-opener' src={defaultAvatar} className='rounded-full' />
          </div>
        </div>
      </div>
      {<PhotoUpload/>}
      {isContextVisible && <ContextMenu x={contextCoordinates.x} y={contextCoordinates.y} setContextMenu={setIsContextVisible} options={data}></ContextMenu>}
    </>
  )
}

export default Authorization;