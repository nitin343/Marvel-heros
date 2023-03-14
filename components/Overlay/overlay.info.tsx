import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import OverlayBody from './overlayBody';
import OverlayHeader from './overlayHeader';

function OverlayInfo() {

    const { overlayHeroData: data }  = useSelector((state: any) => state.overlay)
    

    return (
        <>
            {
                data ? (
                    <div >
                        <div className='fixed w-[70%] md:w-[100%] md:h-[80vh] overflow-y-scroll h-[90vh] px-2 border-2 border-gray-500 bg-white z-50'>
                           <OverlayHeader data={data} className='px-10'/>
                           <OverlayBody name='Stories' data={data.stories.items} />
                           <OverlayBody name='Comics' data={data.comics.items} />
                           <OverlayBody name='Series' data={data.series.items} />
                        </div>
                    </div>

                )  : 
                <> <Loading /> </>
        }


        </>
    )
}

    export default OverlayInfo;
