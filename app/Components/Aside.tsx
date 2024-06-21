'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Aside() {
    const [path, setPath] = useState("/")
    const pathname = usePathname() // initialize once then asign : Reason :- cause you cant use usePathname inside useeffect that pops an error at build time 
    useEffect(() => {
        setPath(prev => prev = pathname)
    }, [])
    console.log(path)


    const sample = ['file one', "second file", "third File", 'file one', "second file", "third File", 'file one', "third File", 'file one', "second file", "third File"]
    return (
        <>
            <aside className='h-lvh w-2/12  bg-slate-900 pt-16 px-3 fixed'>
                <ul className='flex files h-full w-full  flex-col px-2 overflow-y-scroll'>

                    {
                        sample.map((n, index) => <Link key={index} href={`${path}/${index}`}> <li key={index} className='w-full my-2 px-5 py-3 rounded bg-slate-400 cursor-pointer'>{n}</li></Link>)
                    }
                    <div className="hidden h-auto w-full grow rounded-md bg-gray-900 md:block"></div>
                    <li className='w-full my-2 px-5 py-3 rounded bg-slate-400 cursor-pointer'>+ New File</li>


                </ul>
            </aside>
        </>
    )
}
