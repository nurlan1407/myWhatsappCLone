import React, { FC, useRef, useState } from 'react'
import IconClose from 'public/icons/icon_close.svg'
import AvatarEditor from 'react-avatar-editor'
import { UseAppSelector } from 'store'
import Button from 'shared/ui/button'
import Slider from 'shared/ui/Slider'
import { setImage } from 'entities/user/slice'

interface PhotoCropProps {
    onClose: (value: boolean) => void,
    setImage:(value:string)=>void
}

const PhotoCrop: FC<PhotoCropProps> = ({ onClose,setImage }) => {
    const editorRef = useRef<AvatarEditor>(null)
    const [rangeValue, setRangeValue ] = useState(10)
    const state = UseAppSelector(state=>state.user.state)
    
    const onClickSave = () =>{
        if(editorRef.current){
            const canvas = editorRef.current.getImage()
            const image = canvas.toDataURL()
            setImage(image)
            onClose(false)
        }
    }


    return (
        <div className='absolute top-0 left-0 bg-inputColor p-3 z-10 w-25 h-fit'>
            <div className='p-2'>
                <IconClose
                    height={30}
                    width={30}
                    className='cursor-pointer'
                    onClick={() => { onClose(false) }}
                />
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-5'>
                <AvatarEditor
                    ref ={editorRef}
                    image={state!.avatarUrl}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={rangeValue/10}
                    rotate={0}
                    onImageChange={()=>console.log("22")}
                ></AvatarEditor>
                <Slider 
                    value={rangeValue}
                    onValueChange={(e)=>{setRangeValue(parseInt(e.target.value))}} 
                    step={1}
                    min={10}
                    max={50}
                />
                <Button
                    className=''
                    onClick={()=>{onClickSave()}}
                >
                Save
                </Button>
            </div>
        </div>
    )
}

export default PhotoCrop;