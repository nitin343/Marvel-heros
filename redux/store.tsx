import { configureStore } from "@reduxjs/toolkit";
import paginationDetailReducer from './pagination.reducer';
import heroNameReducer from './HeroName.reducer';
import overlayReducer from './overlay.reducers';
import saveHeroReducer from './saveHero.reducer';


export default configureStore({
    reducer: {
        paginationDetail: paginationDetailReducer,
        searchHero: heroNameReducer,
        overlay: overlayReducer,
        saveHero: saveHeroReducer
    }
})