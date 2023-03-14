import {createSlice} from '@reduxjs/toolkit'

const saveHeroSlice = createSlice({
    name: 'saveHero',
    initialState: {
       hero: []
    },
    reducers: {
        SAVE_HERO(state: any, action: any){
            state.hero = [...state.hero , action.payload]
        },
        REMOVE_HERO(state: any, action: any){
            state.hero = state.hero.filter((hero: any) => hero.id !== action.payload.id )
        }
    } 
})

export const {SAVE_HERO, REMOVE_HERO} = saveHeroSlice.actions
export default saveHeroSlice.reducer