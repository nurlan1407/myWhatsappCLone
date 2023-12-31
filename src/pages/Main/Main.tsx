import React, { FC } from 'react'
import Chatlist from './components/Chatlist';
import Chat from 'features/Chat/ui/Chat';

interface MainProps {

}

const Main: FC<MainProps> = ({ }) => {
    return (
        <div className='grid grid-cols-3 h-screen'>
            <div className='col-span-1 border-r-2 border-solid border-borderColor h-screen'><Chatlist /></div>
            <div className='col-span-2 h-screen'><Chat /></div>
            <div className='col-span-1'></div>
        </div>
    )
}

export default Main;