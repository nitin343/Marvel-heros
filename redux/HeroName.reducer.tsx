import {createSlice} from '@reduxjs/toolkit'

const heroNameSlice = createSlice({
    name: 'searchHero',
    initialState: {
        name: '',
        searchDetail: ''
    },
    reducers: {
        SET_HERO_NAME(state, action){
            state.name = action.payload
            state.searchDetail = ''

        },
        SEARCH_HERO(state, action){
            state.name = ''
            state.searchDetail = action.payload

        },
    } 
})

export const {SET_HERO_NAME, SEARCH_HERO } = heroNameSlice.actions
export default heroNameSlice.reducer