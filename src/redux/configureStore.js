import { createStore, combineReducers } from 'redux';
import { leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Dishes } from './dishes';


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: leaders
        })
    )
    return store;
}