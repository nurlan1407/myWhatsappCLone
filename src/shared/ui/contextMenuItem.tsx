import React, { FC } from 'react'

interface ContextMenuItemProps {
  title:string
}

const ContextMenuItem: FC<ContextMenuItemProps> = ({ title }) => {
  return (
    <div>
     {title}
    </div>
  )
}

export default ContextMenuItem;