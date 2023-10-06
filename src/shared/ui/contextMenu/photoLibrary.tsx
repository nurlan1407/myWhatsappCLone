import React, { FC } from 'react'
import photoLibrary from 'shared/data/photoLibrary'
import IconClose from 'public/icons/icon_close.svg'


interface PhotoLibraryProps{
    onClose:()=>void,
    onSelect:()=>void
}

const PhotoLibrary: FC<PhotoLibraryProps> = ({ onClose, onSelect }) => {

  return (
    <div className='absolute top-0 left-0 bg-inputColor w-25 p-3 z-10'>
        <div className='p-2'>
            <IconClose 
                height={30} 
                width={30} 
                className='cursor-pointer'
                onClick={()=>{onClose()}}
            />
        </div>
        <div className='grid grid-cols-3 gap-2 w-[250px]'>
        {
            photoLibrary.map((item,index)=>(
                <img 
                    key={index}
                    src={item} 
                    className='rounded-full cursor-pointer'
                    onClick={()=>onSelect()}
                >
                </img>
            ))
        }
        </div>

    </div>
  )
}

export default PhotoLibrary;