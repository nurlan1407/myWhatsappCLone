import React, { FC, useEffect, useRef } from 'react'
import IconClose from 'public/icons/icon_close.svg'
import Button from 'shared/ui/button'
interface TakePhotoProps {
    onClose: (value: boolean) => void
}

const TakePhoto: FC<TakePhotoProps> = ({ onClose }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    let stream:MediaStream
    const startStream = async()=>{
        stream = await navigator.mediaDevices.getUserMedia({
            video:true,
            audio:false
        })
        if(videoRef.current){
            videoRef.current.srcObject = stream
        }  
    }
    useEffect(()=>{
        startStream()
        return ()=> stream.getTracks().forEach(item=>item.stop())
    },[])


    const createPhoto = () =>{
        const canvas = document.createElement("canvas")
        canvas.getContext("2d")?.drawImage(videoRef.current as CanvasImageSource, 0,0,300,150)
        const url = canvas.toDataURL("image/jpeg")
        //so get this url and send it to backend
        
    }
    return (
        <div className='absolute top-0 left-0 bg-inputColor w-25 p-3 z-10'>
            <div className='p-2'>
                <IconClose
                    height={30}
                    width={30}
                    className='cursor-pointer'
                    onClick={() => { onClose(false) }}
                />
            </div> 
            <div className='flex flex-col items-center justify-center3 gap-2 w-[250px]'>
                <video ref={videoRef} id='video-cam' autoPlay className='w-full h-full'></video>
                <Button onClick={()=>{createPhoto()}} className='w-50 h-100 mt-0' />
            </div>
        </div>
    )
}

export default TakePhoto;