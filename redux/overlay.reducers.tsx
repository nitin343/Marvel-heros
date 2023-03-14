import {createSlice} from '@reduxjs/toolkit'

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: {
       overlayDisplay: false,
       overlayHeroData : {}
    },
    reducers: {
        SET_OVERLAY_DISPLAY(state, action){
            state.overlayDisplay = !state.overlayDisplay
        },
        SET_OVERLAY_DATA(state, action){
            state.overlayHeroData = action.payload
        }
    } 
})

export const {SET_OVERLAY_DISPLAY, SET_OVERLAY_DATA} = overlaySlice.actions
export default overlaySlice.reducer