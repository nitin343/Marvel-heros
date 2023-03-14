import Pagination from '@/components/pagination/pagination';
import { getCharacterType } from '../types/getcharacter.types';
import {getCharacter} from '../services/character.api'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AutcompleteChar from '../components/Autocomplete/autcomplete'
import CharacterCard from '../components/card/character.card';
import {paginationDataType} from '../types/pagination.types'
import {useSelector } from 'react-redux'
import Loading from '@/components/Loading';
import OverlayInfo from '@/components/Overlay/overlay.info';
import Error from '@/components/Error';

function Character() {

    const { loading, error, characters, paginationData} = getCharacter();
    const {overlayDisplay, overlayHeroData} = useSelector((state: any) => state.overlay);

    if (error) {
        return <Error error={error} />
    }

    return (
        <div>
            { loading ? (
                    <Loading />
                    ): (
                     <>
                      { overlayDisplay  ? <OverlayInfo /> : <></> }
                       <CharacterCard character={characters} />
                     </>
                    )
            }
         <Pagination paginationProps={paginationData} />
        </div>
    );
}

export default Character;