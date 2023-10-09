import React, { FC } from 'react'
import avatar from 'public/avatars/2.png'
import Button from 'shared/ui/button';
import SearchInput from 'features/Search/ui';
import { UseAppSelector } from 'store';
import user from 'features/Search/ui/user';
import User from 'features/Search/ui/user';
import Loader from 'shared/ui/loader';

interface ChatlistProps {

}

const Chatlist: FC<ChatlistProps> = ({ }) => {
    const userList = UseAppSelector(state => state.search)
    console.log(userList.status);
    
    return (
        <div className='h-full'>
            <div className='w-full h-[60px] flex justify-between items-center py-2 px-4 bg-boundaryColor'>
                <div className='w-fit flex gap-3 items-center h-full'>
                    <img src={avatar} height={48} width={48} className='object-cover'></img>
                    <div className='text-xl'>John</div>
                </div>
                <div>
                    <Button className='text-white' onClick={() => { }}>Log out</Button>
                </div>
            </div>
            <div className='py-2 px-4 bg-headerColor'>
                <SearchInput></SearchInput>
            </div>
            <div className='w-full y-2 relative'>
                {
                    userList.status == 'pending' ? <Loader styles='absolute translate-y-1/2 translate-x-1/2' /> : (
                        userList.state && userList.state.length > 0 &&
                        <div className=''>
                            <h3 className='text-lg uppercase tracking-widest text-secondary px-4 py-4 pointer-events-none cursor-none select-none'>USERS</h3>
                            <hr className='bg-secondaryText'></hr>
                            {userList.state?.map((item) => (
                                <User name={item.displayName} tag={item.tag} bio={item.bio} avatartUrl={item.avatarUrl}></User>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Chatlist;