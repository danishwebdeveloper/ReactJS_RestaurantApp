import { createStore, combineReducers, applyMiddleware } from 'redux';
import { leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Dishes } from './dishes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

// Combine Reducer
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}