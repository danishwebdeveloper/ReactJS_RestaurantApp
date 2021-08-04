import { createStore, combineReducers, applyMiddleware } from 'redux';
import { leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Dishes } from './dishes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


// Combine Reducer
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: leaders
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}