import React, { FC, useEffect, useRef, MouseEvent} from 'react'
import { ReactDOM } from 'react'
interface ContextMenuProps {
    options:{ title: string, onClick:()=>void }[]
    x: number,
    y: number,
    setContextMenu: (value:boolean) => void
}

const ContextMenu: FC<ContextMenuProps> = (props) => {
    const { options,x,y,setContextMenu } = props
    const contextMenuRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const outSideClickHandler = (event:Event) => {
            event.stopPropagation()            
            const target = event.target as HTMLElement
            if(target.id !== 'context-opener'){
                if(contextMenuRef.current && !contextMenuRef.current.contains(target))
                    setContextMenu(false)
            }
        }
        document.addEventListener("click",(e)=>{outSideClickHandler(e)})

        return document.removeEventListener("click",(e)=>{outSideClickHandler(e)})
    },[])

    const handleClick = () =>{
        setContextMenu(false)
    }
    return (
        <div
            className='bg-inputColor fixed'
            style={{ top:y, left:x}}
            ref={contextMenuRef}
        >
            <ul className='list-none'>
                {
                    options.map((option)=>(
                        <li 
                            key={option.title}
                            className='bg-inputColor hover:bg-inputActiveColor text-gray hover:text-primary cursor-pointer py-1 px-2'
                            onClick={()=>{setContextMenu(false);option.onClick()}}    
                        >
                            <span>{option.title}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContextMenu;