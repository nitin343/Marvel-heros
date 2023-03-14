import { SET_OVERLAY_DISPLAY } from '@/redux/overlay.reducers';
import { AppContext } from 'next/app';
import Image from 'next/image';
import React, { JSXElementConstructor } from 'react';
import { useDispatch } from 'react-redux';

const OverlayHeader = ({data}: any ) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div className='border-b-2 border-red-200 py-3 flex md:flex-col-reverse  w-full h-[45%] flex-row justify-between'>
                <div className='border-4 border-pink-500 overflow-hidden w-[260px] h-[260px] rounded-full md:my-5 md:!justify-center md:!items-center'>
                    <Image priority src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} width={260} height={260} className="-z-10 transform rounded-full transition duration-500 hover:scale-x-110 hover:scale-y-105 " />
                </div>
                <div className='flex flex-col items-center justify-center w-[60%] md:w-[100%] md:my-5'>
                    <div className='h-5 w-full flex !justify-end px-5'>
                        <button onClick={() => dispatch(SET_OVERLAY_DISPLAY(false))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className='w-full h-full  text-5xl flex justify-center items-center'>
                        {data.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayHeader;