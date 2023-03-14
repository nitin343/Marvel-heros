import { paginationDataType } from '../../types/pagination.types';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_DEC_OFFSET, SET_INC_OFFSET } from '../../redux/pagination.reducer';


function Pagination({ paginationProps }: paginationDataType) {

    const { limit, currentPage } = useSelector((state: any) => state.paginationDetail.data)
    const dispatch = useDispatch();
    const [currentState, setCurrentState] = useState({ prev: false, next: false })

    useEffect(() => {
        console.log(limit, 'limitDetail hurray ');
        if (currentPage === 1 && currentPage === paginationProps.pageSize) {
            setCurrentState({ prev: true, next: true })
        } else if (currentPage === paginationProps.pageSize) {
            setCurrentState({ prev: false, next: true })
        } else if (currentPage === 1) {
            setCurrentState({ prev: true, next: false })
        }else{
            setCurrentState({ prev: false, next: false })
        }
    }, [currentPage])

    const nextCard = () => {
        dispatch(SET_INC_OFFSET(1))
    }
    const prevCard = () => {
        dispatch(SET_DEC_OFFSET(1))
    }

    return (
        <>        {
            paginationProps && (
                <div className='fixed bottom-10 w-[100%] flex flex-row  md:bottom-0 justify-center items-center md:bg-white' >
                    <div> <button onClick={prevCard} disabled={currentState.prev} style={currentState.prev ? { backgroundColor: 'grey', color: 'white' } : { backgroundColor: 'white' }} className='border-2 border-black rounded-md px-5 py-1 mx-2'>Prev</button></div>
                    <div> <span>{currentPage} of {paginationProps.pageSize}</span></div>
                    <div> <button onClick={nextCard} disabled={currentState.next} style={currentState.next ? { backgroundColor: 'grey', color: 'white' } : { backgroundColor: 'white' }} className='border-2 border-black rounded-md px-5 py-1 mx-2'>Next</button> </div>
                </div>
            )
        }
        </>
    );
}

export default Pagination;