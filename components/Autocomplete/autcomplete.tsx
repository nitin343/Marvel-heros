import { getCharacter, getName } from '../../services/character.api';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { SEARCH_HERO, SET_HERO_NAME } from '@/redux/HeroName.reducer';
import { RESET_PAGINATION } from '@/redux/pagination.reducer';

function AutcompleteChar() {

    const [input, setinput] = useState('')
    const {heroname} = getName();
    // const {searchLoading, characters} = getCharacter();
    const searchLoading = false
    const dispatch = useDispatch();
    // const {searchDetail} = useSelector((state:any) => state.searchHero)

    const onOptionSelect = (name: any) => {
       setinput(name)
    }

    const onTypeOfHero = (event: any) => {
        setinput(event.target.value)
        dispatch(SET_HERO_NAME(event.target.value));
        dispatch(RESET_PAGINATION(0));

    }

    const searchSelectedHero = () => {
        dispatch(SEARCH_HERO(input));
        dispatch(RESET_PAGINATION(0));
    }

    return (
        <div className='relative items-center flex  flex-col w-[100%] overflow-hidden'>
        <div className='flex w-full justify-center rounded-r-md'>
          <input
            type='text'
            className="rounded-1-md  w-[50%] px-3"
            onChange={(e) => {onTypeOfHero(e)}}
            placeholder='HERO'
            value={input}
          />
  
          <button className='border-b-2 border-black text-zinc-500 px-2 py-2 cursor-pointer' onClick={() => searchSelectedHero()} >
            {
              searchLoading ?
                <div
                  className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span
                    className="absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
                :
                <span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
            }
          </button>
        </div>
        <div className='fixed top-16 md:top-32 md:left-[19%] md:w-[51%] w-[43%]'>
        {heroname.length > 0 ? <ul className='relative md:!w-[100%] lg:w-[43%] w-[100%] z-[10000] bg-white !justify-start !items-start ml-0 border-2 border-pink-100 rounded-b-md'>
          {heroname && heroname.map((hero: String, index) =>
          (
            <li key={hero+'_'+index} style={input == hero ? {backgroundColor: '#3F3F46', color:'white'} : {backgroundColor: 'white', color:'black'} }>
              <button className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer'
                onClick={() => onOptionSelect(hero)}>
                {hero}
              </button>
            </li>
          )
          )}
        </ul>
          : <></>
        }
        </div>
      </div>
    );
}

export default AutcompleteChar;