import {createSlice} from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'paginationDetail',
    initialState: {
        data: {
         limit: 3,
         offset: 0, 
         currentPage: 1
        }
    },
    reducers: {
        SET_INC_OFFSET(state, action){
            state.data.offset = state.data.offset + state.data.limit
            state.data.currentPage = state.data.currentPage + 1
        },
        SET_DEC_OFFSET(state, action){
            state.data.offset = state.data.offset == 0 ? state.data.offset : state.data.offset -  state.data.limit
            state.data.currentPage = state.data.currentPage < 1 ? state.data.currentPage : state.data.currentPage - 1
        },
        SET_LIMIT(state, action){
            state.data.limit = action.payload 
        },
        RESET_PAGINATION(state, action){
            state.data.offset = 0
            state.data.limit = 3
            state.data.currentPage = 1
        }
    }
})

export const {SET_INC_OFFSET, SET_DEC_OFFSET, SET_LIMIT,RESET_PAGINATION  } = paginationSlice.actions
export default paginationSlice.reducer