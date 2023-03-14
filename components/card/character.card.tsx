import { SET_OVERLAY_DISPLAY, SET_OVERLAY_DATA } from '../../redux/overlay.reducers';
import Image from 'next/image';
import React, { ReactNode, useState, memo, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { REMOVE_HERO, SAVE_HERO } from '@/redux/saveHero.reducer';

const CharacterCard = memo(({ character }: any) => {
    const [visible, setVisible] = useState<string | undefined>('')
    const [saveId, setSaveId] = useState<any>([])
    const dispatch = useDispatch();
    const {hero} = useSelector((state: any) => state.saveHero)
  

    const heroCard = (Herodetail: any) => {
        dispatch(SET_OVERLAY_DISPLAY(true))
        dispatch(SET_OVERLAY_DATA (Herodetail))
    } 

    const saveorRemoveHero = (heroData: any, event: any, action: string) => {
        event.stopPropagation()
        console.log(heroData);
        switch (action) {
            case 'save':
                dispatch(SAVE_HERO(heroData))
                break;
            case 'remove':
                dispatch(REMOVE_HERO(heroData))
                break;
            default:
                break;
        }
    }

    function getSaveIcon(){
        return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
      </svg>
      
    }

    function getSavedIcon(){
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
      </svg>
      
    }

    const setVisiblity = (data: any, action: string) => {
       switch (action) {
        case 'visible':
             setVisible(data.id)
            break;
        case 'invisible':
             setVisible(data.id)
            break;
        default:
            break;
       }
    }

    useEffect(() => {
       console.log(hero); 
       let ids: any = []
       hero.forEach((herodata: any) => {
          ids.push(herodata.id)
       })
       setSaveId(ids)
    }, [hero, visible])
    

    return (
        <>
            <section className="text-gray-700 body-font w-full md:overflow-hidden  md:justify-center md:items-center flex border-2 border-red-600">
                <div className="container px-5 py-16 md:py-5 md:px-0  mx-auto flex md:flex-col overflow-x-auto  flex-row flex-wrap gap-3 justify-center align-baseline w-full">
                    {
                       character && character.map((data: any) => (
                            <div onMouseEnter={() => setVisiblity(data, 'visible')} onMouseLeave={() => setVisiblity(data, 'invisible')} key={data.id} onClick={() => heroCard(data)} className="flex relative flex-wrap -m-4 md:m-0 md:mb-10 text-center w-1/3 S:w-[100%] md:w-[100%] md:my-[10px] justify-center align-baseline cursor-pointer">
                                <div>
                                    <div className="border-2 border-gray-600 rounded-lg flex flex-col  items-center overflow-hidden">
                                        <Image priority src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} width={360} height={80} className="mb-4 -z-10 transform transition duration-500 hover:scale-x-110 hover:scale-y-105 !h-[360px]" />
                                        <div style={{display: visible == data.id ? 'block' : 'none'}}>
                                        <div onClick={(e) => saveorRemoveHero(data,e,'save')} style={{display: saveId.includes(data.id) ? 'none' : 'block'}}  className='absolute top-0 right-6 p-2  text-white'>
                                            {getSaveIcon()}
                                        </div>
                                        <div onClick={(e) => saveorRemoveHero(data,e,'remove')} style={{display: saveId.includes(data.id) ? 'block' : 'none'}} className='absolute top-0 right-6 p-2 text-white'>
                                            {getSavedIcon()}
                                        </div>
                                        </div>
                                        <p className="leading-relaxed font-roboto_Condensed text-xl font-bold ">{data.name.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            



        </>
    );
});

export default CharacterCard;
