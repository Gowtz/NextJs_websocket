import React from 'react'
import MiniHeader from '../Components/MiniHeader';
import Aside from '../Components/Aside';

export default function RoomLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <MiniHeader />
            <div className="flex">

                <Aside />
                <main className='absolute top-0 right-0 w-10/12  bg-slate-950    text-white'>


                        {children}

                </main>
            </div>
        </>
    )
}
