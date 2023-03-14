import { getImage } from '@/services/character.api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

const OverlayBody = ({ data, name }: any) => {

    const [image, setimage] = useState<any>()
    const [dataHolder, setDataHolder] = useState<any>()
    const { imageData } = getImage(dataHolder)

    useEffect(() => {
         console.log(imageData, 'imageData');
         
    },[imageData])
 

    return (
        <div className="relative my-10">
        <div className="rounded-lg  p-6">
          <h2 className="text-lg text-zinc-600 font-bold mb-4">Trending {name}</h2>
        </div>
          <div className="flex w-100 h-100 mx-2 scrollbar-hide overflow-x-auto gap-10 ">
            {data.map((story: any) => (
                       <div className="w-[160px] h-[15 0px] card_hover_animation hover:!text-white transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                       <div  className="text-md font-bold flex flex-col ">
                       <span className="uppercase !w-[160px]">
                        {story.name}    
                       </span>
                       </div>
                       
                   </div>
            ))}
          </div>
        </div>
    );
};

export default OverlayBody;