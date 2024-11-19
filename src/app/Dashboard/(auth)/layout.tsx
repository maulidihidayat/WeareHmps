import { FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react'
import React, { ReactNode } from 'react'


const layout = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <div>
            <h1 className='text-primary font-semibold text-[20px] p-8'>Hmps Pendidikan Informatika</h1>
        </div>
        {children}
        <div className='p-8 bg-background flex justify-between'>
            <h1 className='text-success text-xl font-bold'>Hmps Pendidikan Informatika</h1>
            <div className='flex gap-4 items-center'>
                <p className='text-primary underline'>Syarat & Ketentuan</p>
                <p className='text-primary underline'>Kebijakan</p>
                <Instagram className='text-primary' />
                <FacebookIcon className='text-primary' />
                <Linkedin className='text-primary' />
                <Twitter className='text-primary' />
            </div>
        </div>
    </div>
  )
}

export default layout