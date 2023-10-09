import React, { FC, useEffect, useState } from 'react'
import gif from 'public/whatsapp.gif'
import Input from 'shared/ui/input'
import Button from 'shared/ui/button'
import TextArea from 'shared/ui/textArea'
import { SliceState, UseAppSelector } from 'store'
import defaultAvatar from 'public/default_avatar.png'
import CameraIcon from 'public/icons/icon_camera.svg'
import ContextMenu from 'shared/ui/contextMenu/contextMenu'
import PhotoLibrary from 'shared/ui/contextMenu/photoLibrary'
import PhotoUpload from 'features/PhotoUpload/iu/photoUpload'
import TakePhoto from 'features/TakePhoto/ui/TakePhoto'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setImage, setDisplayName, setBio, setTag  } from 'entities/user/slice'
import PhotoCrop from 'features/PhotoUpload/photoCrop'
import { useNavigate } from 'react-router-dom'
import { createProfile } from 'entities/user/api'
import {User} from 'entities/user/model'

const Authorization: FC = ({ }) => {
  const dispatch:ThunkDispatch<SliceState<User>,undefined,AnyAction> = useDispatch()
  const navigate = useNavigate()
  const setUploadedImage = (imageSrc: string) => {
    dispatch(setImage(imageSrc))
    setIsAvatarCropVisible(true)
  }

  const userRegister = async() =>{
    try{
      await dispatch(createProfile(userInfo!))
      navigate('/main')
    }catch(e){
      alert(e)
    }
  }


  const state = UseAppSelector(state => state.user)
  const userInfo = state.state
  const [isContextVisible, setIsContextVisible] = useState<boolean>(false)
  const [isPhotoLibraryVisible, setIsPhotoLibraryVisible] = useState<boolean>(false)
  const [isPhotoUploadVisible, setIsPhotoUploadVisible] = useState<boolean>(false)
  const [isTakePhotoVisible, setIsTakePhotoVisible] = useState<boolean>(false)
  const [isAvatarCropVisible, setIsAvatarCropVisible] = useState<boolean>(false)


  const [hover, setHover] = useState<boolean>(false)
  const [contextCoordinates, setContextCoordinates] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if ((e.target as HTMLElement).id !== 'context-opener') {
      return
      //do notgin
    }
    setIsContextVisible(true)
    const { pageX, pageY } = e
    setContextCoordinates({ y: pageY, x: pageX })
  }
  const data = [
    {
      title: "Upload avatar", onClick: () => {
        console.log("sss");
        setIsPhotoUploadVisible(true)
      }
    },
    { title: "Select avatar", onClick: () => { setIsPhotoLibraryVisible(true) } },
    { title: "Delete avatar", onClick: () => { } },
    { title: "Take photo", onClick: () => { setIsTakePhotoVisible(true) } }
  ]

  useEffect(() => {
    if (isPhotoUploadVisible == true) {
      const inputFile = document.getElementById('file-picker') as HTMLInputElement
      inputFile.click()
      document.body.onfocus = (e) => {
        setIsPhotoUploadVisible(false)
      }
    }
  }, [isPhotoUploadVisible])

  useEffect(()=>{
    if(state.state==null){
      navigate('/login')
    }
  },[])
  useEffect(()=>{
    if(state.status == 'pending'){
      //set loading
    }
  },[state.status])

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
            <Input name={'Display Name'} type={"text"} label='Display Name' onChange={(e) => { dispatch(setDisplayName(e.target.value)) }} value={userInfo?.displayName} />
            <Input name={'Tag'} type={"text"} label='Tag (@:..)' onChange={(e) => { dispatch(setTag(e.target.value)) }} value={userInfo?.tag } />
            <TextArea name={'Bio'} type={"text"} label='Bio' onChange={(e) => { dispatch(setBio(e.target.value))}} value={userInfo?.bio}></TextArea>
            <div className='mt-5'>
              <Button onClick={userRegister}>
                Create Profile
              </Button>
            </div>
          </div>
          <div className='relative w-40  h-40 mb-3' id='context-opener'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) => {
              handleContextMenu(e)
            }}
          >
            {isPhotoLibraryVisible && <PhotoLibrary onClose={() => { setIsPhotoLibraryVisible(false) }} onSelect={() => { }} />}
            {isTakePhotoVisible && <TakePhoto onClose={() => { setIsTakePhotoVisible(false) }} />}
            {isAvatarCropVisible && <PhotoCrop 
                    onClose={() => { setIsAvatarCropVisible(false); setHover(false) }} 
                    setImage={(value: string) => { dispatch(setImage(value)) }} 
                  />}  
            {hover &&
              <div
                id='context-opener'
                className='absolute top-0 left-0 w-full h-full z-2 rounded-full flex flex-col justify-center items-center cursor-pointer bg-black bg-opacity-50'
              >
                <CameraIcon id='context-opener' width={50} height={50} />
                <span id='context-opener' className='text-base text-primary'>Add profile image</span>
              </div>
            }
            <img id='context-opener' src={state.state?.avatarUrl || defaultAvatar} referrerPolicy={'no-referrer'} className='rounded-full w-full h-full object-cover' />
          </div>
        </div>
      </div>
      {<PhotoUpload pickImage={setUploadedImage} />}
      {isContextVisible && <ContextMenu x={contextCoordinates.x} y={contextCoordinates.y} setContextMenu={setIsContextVisible} options={data}></ContextMenu>}
    </>
  )
}

export default Authorization;