import image from '@/source/image';
import Image from 'next/image';
import React from 'react'

interface Component {
    nama : string;
    deskripsi : string;
}
const Visimisi:  React.FC<Component> = ({nama , deskripsi}) => {
  return (
    <div>
        
      <Image src={image.smile2} alt="Stars decoration" className="absolute " />
      <div className="flex justify-center">
        {/* <Image src={gambar} alt={nama} width={500} height={300} />  */}
        <div>
            
          <h1 className="bg-primary border-2 mx-auto text-center border-secondary rounded-lg  w-20 text-white text-2xl">
            {nama}
          </h1>
          <p className="w-[555px] h-16 text-xl text-center text-success">{deskripsi}</p>
        </div>
      </div>
      <Image src={image.star} alt="Stars decoration" className="absolute right-0" />
    </div>
  )
}

export default Visimisi