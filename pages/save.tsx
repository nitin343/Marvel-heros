import CharacterCard from '@/components/card/character.card';
import React from 'react';
import { useSelector } from 'react-redux';

const Save = () => {
    const {hero} = useSelector((state: any) => state.saveHero);


    return (
        <div>
            {
                hero.length > 0 ? <CharacterCard character={hero} /> : <div className='w-full h-[80vh] text-3xl text-gray-500  flex justify-center items-center'>No saved Hero</div>
            }
             
        </div>
    );
};

export default Save;